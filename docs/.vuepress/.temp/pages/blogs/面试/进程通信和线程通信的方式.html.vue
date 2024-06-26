<template><div><h1 id="进程通信的几种方式" tabindex="-1"><a class="header-anchor" href="#进程通信的几种方式" aria-hidden="true">#</a> 进程通信的几种方式</h1>
<h2 id="管道" tabindex="-1"><a class="header-anchor" href="#管道" aria-hidden="true">#</a> 管道</h2>
<p>可以看出<strong>管道传输数据是单向的</strong>，如果想相互通信，我们需要创建两个管道才行。</p>
<p><strong>管道这种通信方式效率低，不适合进程间频繁地交换数据</strong></p>
<p><strong>所谓的管道，就是内核里面的一串缓存</strong>。从管道的一段写入的数据，实际上是缓存在内核中的，另一端读取，也就是从内核中读取这段数据。另外，管道传输的数据是无格式的流且大小受限。</p>
<img src="@source/blogs/面试/img/进程.png" alt="img" />
<h2 id="消息队列" tabindex="-1"><a class="header-anchor" href="#消息队列" aria-hidden="true">#</a> 消息队列</h2>
<p>比如，A 进程要给 B 进程发送消息，A 进程把数据放在对应的消息队列后就可以正常返回了，B 进程需要的时候再去读取数据就可以了。同理，B 进程要给 A 进程发送消息也是如此。</p>
<p><strong>消息队列是保存在内核中的消息链表</strong>，在发送数据时，会分成一个一个独立的数据单元，也就是消息体（数据块），消息体是用户自定义的数据类型，消息的发送方和接收方要约定好消息体的数据类型，所以每个消息体都是固定大小的存储块，不像管道是无格式的字节流数据。如果进程从消息队列中读取了消息体，内核就会把这个消息体删除。</p>
<p>消息队列生命周期随内核，如果没有释放消息队列或者没有关闭操作系统，消息队列会一直存在，而前面提到的匿名管道的生命周期，是随进程的创建而建立，随进程的结束而销毁。</p>
<p><strong>消息队列不适合比较大数据的传输</strong>，因为在内核中每个消息体都有一个最大长度的限制，同时所有队列所包含的全部消息体的总长度也是有上限。在 Linux 内核中，会有两个宏定义 <code v-pre>MSGMAX</code> 和 <code v-pre>MSGMNB</code>，它们以字节为单位，分别定义了一条消息的最大长度和一个队列的最大长度。</p>
<p><strong>消息队列通信过程中，存在用户态与内核态之间的数据拷贝开销</strong>，因为进程写入数据到内核中的消息队列时，会发生从用户态拷贝数据到内核态的过程，同理另一进程读取内核中的消息数据时，会发生从内核态拷贝数据到用户态的过程。</p>
<h2 id="共享内存" tabindex="-1"><a class="header-anchor" href="#共享内存" aria-hidden="true">#</a> 共享内存</h2>
<p>消息队列的读取和写入的过程，都会有发生用户态与内核态之间的消息拷贝过程。那<strong>共享内存</strong>的方式，就很好的解决了这一问题。</p>
<p>现代操作系统，对于内存管理，采用的是虚拟内存技术，也就是每个进程都有自己独立的虚拟内存空间，不同进程的虚拟内存映射到不同的物理内存中。所以，即使进程 A 和 进程 B 的虚拟地址是一样的，其实访问的是不同的物理内存地址，对于数据的增删查改互不影响。</p>
<p><strong>共享内存的机制，就是拿出一块虚拟地址空间来，映射到相同的物理内存中</strong>。这样这个进程写入的东西，另外一个进程马上就能看到了，都不需要拷贝来拷贝去，传来传去，大大提高了进程间通信的速度。</p>
<h2 id="信号量" tabindex="-1"><a class="header-anchor" href="#信号量" aria-hidden="true">#</a> 信号量</h2>
<p>用了共享内存通信方式，带来新的问题，那就是如果多个进程同时修改同一个共享内存，很有可能就冲突了。例如两个进程都同时写一个地址，那先写的那个进程会发现内容被别人覆盖了。</p>
<p>为了防止多进程竞争共享资源，而造成的数据错乱，所以需要保护机制，使得共享的资源，在任意时刻只能被一个进程访问。正好，<strong>信号量</strong>就实现了这一保护机制。</p>
<p><strong>信号量其实是一个整型的计数器，主要用于实现进程间的互斥与同步，而不是用于缓存进程间通信的数据</strong>。</p>
<p>信号量表示资源的数量，控制信号量的方式有两种原子操作：</p>
<ul>
<li>一个是 <strong>P 操作</strong>，这个操作会把信号量减去 -1，相减后如果信号量 &lt; 0，则表明资源已被占用，进程需阻塞等待；相减后如果信号量 &gt;= 0，则表明还有资源可使用，进程可正常继续执行。</li>
<li>另一个是 <strong>V 操作</strong>，这个操作会把信号量加上 1，相加后如果信号量 &lt;= 0，则表明当前有阻塞中的进程，于是会将该进程唤醒运行；相加后如果信号量 &gt; 0，则表明当前没有阻塞中的进程；</li>
</ul>
<h2 id="信号" tabindex="-1"><a class="header-anchor" href="#信号" aria-hidden="true">#</a> 信号</h2>
<p><strong>对于异常情况下的工作模式，就需要用「信号」的方式来通知进程。</strong></p>
<p>信号跟信号量虽然名字相似度 66.66%，但两者用途完全不一样</p>
<p>运行在 shell 终端的进程，我们可以通过键盘输入某些组合键的时候，给进程发送信号。例如</p>
<ul>
<li>Ctrl+C 产生 <code v-pre>SIGINT</code> 信号，表示终止该进程；</li>
<li>Ctrl+Z 产生 <code v-pre>SIGTSTP</code> 信号，表示停止该进程，但还未结束；</li>
</ul>
<p>信号是进程间通信机制中<strong>唯一的异步通信机制</strong>，因为可以在任何时候发送信号给某一进程，一旦有信号产生，我们就有下面这几种，用户进程对信号的处理方式。</p>
<p><strong>1.执行默认操作</strong>。Linux 对每种信号都规定了默认操作，例如，上面列表中的 SIGTERM 信号，就是终止进程的意思。Core 的意思是 Core Dump，也即终止进程后，通过 Core Dump 将当前进程的运行状态保存在文件里面，方便程序员事后进行分析问题在哪里。</p>
<p><strong>2.捕捉信号</strong>。我们可以为信号定义一个信号处理函数。当信号发生时，我们就执行相应的信号处理函数。</p>
<p><strong>3.忽略信号</strong>。当我们不希望处理某些信号的时候，就可以忽略该信号，不做任何处理。有两个信号是应用进程无法捕捉和忽略的，即 <code v-pre>SIGKILL</code> 和 <code v-pre>SEGSTOP</code>，它们用于在任何时候中断或结束某一进程。</p>
<h2 id="socket" tabindex="-1"><a class="header-anchor" href="#socket" aria-hidden="true">#</a> socket</h2>
<p>前面提到的管道、消息队列、共享内存、信号量和信号都是在同一台主机上进行进程间通信，那要想<strong>跨网络与不同主机上的进程之间通信，就需要 Socket 通信了。</strong></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>由于每个进程的用户空间都是独立的，不能相互访问，这时就需要借助内核空间来实现进程间通信，原因很简单，每个进程都是共享一个内核空间。</p>
<p>Linux 内核提供了不少进程间通信的方式，其中最简单的方式就是管道，管道分为「匿名管道」和「命名管道」。</p>
<p><strong>匿名管道</strong>顾名思义，它没有名字标识，匿名管道是特殊文件只存在于内存，没有存在于文件系统中，shell 命令中的「<code v-pre>|</code>」竖线就是匿名管道，通信的数据是<strong>无格式的流并且大小受限</strong>，通信的方式是<strong>单向</strong>的，数据只能在一个方向上流动，如果要双向通信，需要创建两个管道，再来<strong>匿名管道是只能用于存在父子关系的进程间通信</strong>，匿名管道的生命周期随着进程创建而建立，随着进程终止而消失。</p>
<p><strong>命名管道</strong>突破了匿名管道只能在亲缘关系进程间的通信限制，因为使用命名管道的前提，需要在文件系统创建一个类型为 p 的设备文件，那么毫无关系的进程就可以通过这个设备文件进行通信。另外，不管是匿名管道还是命名管道，进程写入的数据都是<strong>缓存在内核</strong>中，另一个进程读取数据时候自然也是从内核中获取，同时通信数据都遵循<strong>先进先出</strong>原则，不支持 lseek 之类的文件定位操作。</p>
<p><strong>消息队列</strong>克服了管道通信的数据是无格式的字节流的问题，消息队列实际上是保存在内核的「消息链表」，消息队列的消息体是可以用户自定义的数据类型，发送数据时，会被分成一个一个独立的消息体，当然接收数据时，也要与发送方发送的消息体的数据类型保持一致，这样才能保证读取的数据是正确的。消息队列通信的速度不是最及时的，毕竟<strong>每次数据的写入和读取都需要经过用户态与内核态之间的拷贝过程。</strong></p>
<p><strong>共享内存</strong>可以解决消息队列通信中用户态与内核态之间数据拷贝过程带来的开销，<strong>它直接分配一个共享空间，每个进程都可以直接访问</strong>，就像访问进程自己的空间一样快捷方便，不需要陷入内核态或者系统调用，大大提高了通信的速度，享有<strong>最快</strong>的进程间通信方式之名。但是便捷高效的共享内存通信，<strong>带来新的问题，多进程竞争同个共享资源会造成数据的错乱。</strong></p>
<p>那么，就需要<strong>信号量</strong>来保护共享资源，以确保任何时刻只能有一个进程访问共享资源，这种方式就是互斥访问。<strong>信号量不仅可以实现访问的互斥性，还可以实现进程间的同步</strong>，信号量其实是一个计数器，表示的是资源个数，其值可以通过两个原子操作来控制，分别是 <strong>P 操作和 V 操作</strong>。</p>
<p>与信号量名字很相似的叫<strong>信号</strong>，它俩名字虽然相似，但功能一点儿都不一样。信号是进程间通信机制中<strong>唯一的异步通信机制</strong>，信号可以在应用进程和内核之间直接交互，内核也可以利用信号来通知用户空间的进程发生了哪些系统事件，信号事件的来源主要有硬件来源（如键盘 Cltr+C ）和软件来源（如 kill 命令），一旦有信号发生，<strong>进程有三种方式响应信号 1. 执行默认操作、2. 捕捉信号、3. 忽略信号</strong>。有两个信号是应用进程无法捕捉和忽略的，即 <code v-pre>SIGKILL</code> 和 <code v-pre>SEGSTOP</code>，这是为了方便我们能在任何时候结束或停止某个进程。</p>
<p>前面说到的通信机制，都是工作于同一台主机，如果<strong>要与不同主机的进程间通信，那么就需要 Socket 通信了</strong>。Socket 实际上不仅用于不同的主机进程间通信，还可以用于本地主机进程间通信，可根据创建 Socket 的类型不同，分为三种常见的通信方式，一个是基于 TCP 协议的通信方式，一个是基于 UDP 协议的通信方式，一个是本地进程间通信方式。</p>
<h1 id="线程通信的几种方式" tabindex="-1"><a class="header-anchor" href="#线程通信的几种方式" aria-hidden="true">#</a> 线程通信的几种方式</h1>
<p>线程间的通信目的主要是用于线程同步，所以线程没有像进程通信中的用于数据交换的通信机制。</p>
<h2 id="_1-等待通知机制" tabindex="-1"><a class="header-anchor" href="#_1-等待通知机制" aria-hidden="true">#</a> 1. 等待通知机制</h2>
<p>两个线程通过对同一对象调用等待 wait() 和通知 notify() 方法来进行通讯。</p>
<p>等待通知有着一个经典范式：</p>
<p>线程 A 作为消费者：</p>
<ol>
<li>获取对象的锁。</li>
<li>进入 while(判断条件)，并调用 wait() 方法。</li>
<li>当条件满足跳出循环执行具体处理逻辑。</li>
</ol>
<p>线程 B 作为生产者:</p>
<ol>
<li>获取对象锁。</li>
<li>更改与线程 A 共用的判断条件。</li>
<li>调用 notify() 方法。</li>
</ol>
<p>伪代码如下:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//Thread A

synchronized(Object){
    while(条件){
        Object.wait();
    }
    //do something
}

//Thread B
synchronized(Object){
    条件=false;//改变条件
    Object.notify();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-join-方法" tabindex="-1"><a class="header-anchor" href="#_2-join-方法" aria-hidden="true">#</a> 2. join() 方法</h2>
<p>在 join 线程完成后会调用 notifyAll() 方法，是在 JVM 实现中调用，所以这里看不出来。</p>
<h2 id="_3-volatile-共享内存" tabindex="-1"><a class="header-anchor" href="#_3-volatile-共享内存" aria-hidden="true">#</a> 3. volatile 共享内存</h2>
<h3 id="_4-管道通信" tabindex="-1"><a class="header-anchor" href="#_4-管道通信" aria-hidden="true">#</a> 4. 管道通信</h3>
<h2 id="_5-并发工具" tabindex="-1"><a class="header-anchor" href="#_5-并发工具" aria-hidden="true">#</a> 5. 并发工具</h2>
<p>CountDownLatch 并发工具</p>
<p>CyclicBarrier 并发工具</p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<p>https://crossoverjie.top/2018/03/16/java-senior/thread-communication/</p>
</div></template>


