<template><div><p>我们都知道 HashMap 是线程不安全的，那 HashMap 为什么线程不安全？JDK1.8 还有这些问题吗？如何解决这些问题呢？本文将对该问题进行解密。</p>
<p><img src="http://blog-img.coolsen.cn/img/HashMap为什么线程不安全.png" alt=""></p>
<h2 id="多线程下扩容死循环" tabindex="-1"><a class="header-anchor" href="#多线程下扩容死循环" aria-hidden="true">#</a> 多线程下扩容死循环</h2>
<p>JDK1.7中的 HashMap 使用头插法插入元素，在多线程的环境下，扩容的时候有可能导致环形链表的出现，形成死循环。因此，JDK1.8使用尾插法插入元素，在扩容时会保持链表元素原本的顺序，不会出现环形链表的问题。</p>
<p>下面看看多线程情况下， JDK1.7 扩容死循环问题的分析。</p>
<p><img src="http://blog-img.coolsen.cn/img/resize1.png" alt=""></p>
<p>新建一个更大尺寸的hash表，然后把数据从老的hash表中迁移到新的hash表中。重点看下transfer方法：</p>
<p><img src="http://blog-img.coolsen.cn/img/resize2.png" alt=""></p>
<p>假设HashMap初始化大小为2，hash算法就是用key mod 表的长度，在mod 2以后都冲突在table[1]这里了。负载因子是 1.5 (默认为 0.75 )，由公式<code v-pre> threshold=负载因子 *  hash表长度</code>可得，<code v-pre>threshold=1.5 * 2 =3</code>，size=3，而 size&gt;=threshold 就要扩容，所以 hash表要 resize 成 4。</p>
<p>未resize前的table如下图：</p>
<p><img src="http://blog-img.coolsen.cn/img/map线程安全性问题-第10页.png" alt=""></p>
<p>正常的ReHash，得到的结果如下图所示：</p>
<p><img src="http://blog-img.coolsen.cn/img/map线程安全性问题-第9页.png" alt=""></p>
<p>我们来看看多线程下的ReHash，假设现在有两个线程同时进行，线程1和线程2，两个线程都会新建新的数组，下面是resize 的过程。</p>
<p><strong>Step1:</strong></p>
<p><img src="http://blog-img.coolsen.cn/img/carbon.png" alt=""></p>
<p>假设 <strong>线程1</strong> 在执行到<code v-pre>Entry&lt;K,V&gt; next = e.next;</code>之后，cpu 时间片用完了，被调度挂起，这时<strong>线程1的 e</strong> 指向 节点A，<strong>线程1的 next</strong> 指向节点B。</p>
<p><strong>线程2</strong>继续执行，</p>
<p><img src="http://blog-img.coolsen.cn/img/map线程安全性问题-第1页.png" alt=""></p>
<p><strong>Step2:</strong></p>
<p>线程 1 被调度回来执行。</p>
<ul>
<li>先是执行 newTalbe[i] = e;</li>
<li>然后是e = next，导致了e指向了节点B，</li>
<li>而下一次循环的next = e.next导致了next指向了节点A。</li>
</ul>
<p><img src="http://blog-img.coolsen.cn/img/map线程安全性问题-第2页.png" alt=""></p>
<p><strong>Step3:</strong></p>
<p>线程1 接着工作。<strong>把节点B摘下来，放到newTable[i]的第一个，然后把e和next往下移</strong>。</p>
<p><img src="http://blog-img.coolsen.cn/img/map线程安全性问题-第3页.png" alt=""></p>
<p><strong>Step4:</strong> 出现环形链表</p>
<p>e.next = newTable[i] 导致A.next 指向了 节点B，此时的B.next 已经指向了节点A，出现<strong>环形链表</strong>。</p>
<p><img src="http://blog-img.coolsen.cn/img/map线程安全性问题-第4页.png" alt=""></p>
<p>如果get一个在此链表中不存在的key时，就会出现死循环了。如 get(11)时，就发生了死循环。</p>
<p>分析见get方法的源码：</p>
<p><img src="http://blog-img.coolsen.cn/img/carbon1.png" alt=""></p>
<p>for循环中的<code v-pre>e = e.next</code>永远不会为空，那么，如果get一个在这个链表中不存在的key时，就会出现死循环了。</p>
<h2 id="多线程的put可能导致元素的丢失" tabindex="-1"><a class="header-anchor" href="#多线程的put可能导致元素的丢失" aria-hidden="true">#</a> 多线程的put可能导致元素的丢失</h2>
<p>多线程同时执行 put 操作，如果计算出来的索引位置是相同的，那会造成前一个 key 被后一个 key 覆盖，从而导致元素的丢失。此问题在JDK 1.7和 JDK 1.8 中都存在。</p>
<p>我们来看下JDK 1.8 中 put 方法的部分源码，重点看黄色部分：</p>
<p><img src="http://blog-img.coolsen.cn/img/carbon4.png" alt=""></p>
<p>我们来演示个例子。</p>
<p>假设线程1和线程2同时执行put，线程1执行put(“1”, “A”)，线程2执行put(“5”, “B”)，hash算法就是用key mod 表的长度，表长度为4，在mod 4 以后都冲突在table[1]这里了。注：下面的例子，只演示了 <code v-pre>#1</code> 和<code v-pre>#2</code>代码的情况，其他代码也会出现类似情况。</p>
<p>正常情况下，put完成后，table的状态应该是下图中的任意一个。</p>
<p><img src="http://blog-img.coolsen.cn/img/map线程安全性问题-第6页.png" alt=""></p>
<p>下面来看看异常情况，两个线程都执行了<code v-pre>#1</code>处的<code v-pre>if ((p = tab[i = (n - 1) &amp; hash]) == null)</code>这句代码。</p>
<p>此时假设线程1 先执行<code v-pre>#2</code>处的<code v-pre>tab[i] = newNode(hash, key, value, null);</code></p>
<p>那么table会变成如下状态：</p>
<p><img src="http://blog-img.coolsen.cn/img/map线程安全性问题-第7页.png" alt=""></p>
<p>紧接着线程2 执行<code v-pre>tab[i] = newNode(hash, key, value, null);</code></p>
<p>此时table会变成如下状态:</p>
<p><img src="http://blog-img.coolsen.cn/img/map线程安全性问题-第8页.png" alt=""></p>
<p>这样一来，元素A就丢失了。</p>
<h2 id="put和get并发时-可能导致get为null" tabindex="-1"><a class="header-anchor" href="#put和get并发时-可能导致get为null" aria-hidden="true">#</a> put和get并发时，可能导致get为null</h2>
<p>线程1执行put时，因为元素个数超出threshold而导致rehash，线程2此时执行get，有可能导致这个问题。此问题在JDK 1.7和 JDK 1.8 中都存在。</p>
<p>我们来看下JDK 1.8 中 resize 方法的部分源码，重点看黄色部分：</p>
<p><img src="http://blog-img.coolsen.cn/img/carbon3.png" alt=""></p>
<p>在代码<code v-pre>#1</code>位置，用新计算的容量new了一个新的hash表，<code v-pre>#2</code>将新创建的空hash表赋值给实例变量table。</p>
<p>注意此时实例变量table是空的，如果此时另一个线程执行get，就会get出null。</p>
<h2 id="巨人的肩膀" tabindex="-1"><a class="header-anchor" href="#巨人的肩膀" aria-hidden="true">#</a> 巨人的肩膀</h2>
<p>http://mailinator.blogspot.com/2009/06/beautiful-race-condition.html</p>
<p>https://coolshell.cn/articles/9606.html</p>
<p>https://juejin.cn/post/6844903554264596487</p>
<p>https://juejin.cn/post/6844903796225605640</p>
</div></template>


