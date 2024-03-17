(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1600:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-先从大厂面试题开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-先从大厂面试题开始"}},[s._v("#")]),s._v(" 1：先从大厂面试题开始")]),s._v(" "),a("ul",[a("li",[s._v("你知道什么是Java内存模型JMM吗？")]),s._v(" "),a("li",[s._v("JMM与"),a("code",[s._v("volatile")]),s._v("它们两个之间的关系？（下一章详细讲解）")]),s._v(" "),a("li",[s._v("JMM有哪些特性or它的三大特性是什么？")]),s._v(" "),a("li",[s._v("为什么要有JMM，它为什么出现？作用和功能是什么？")]),s._v(" "),a("li",[a("code",[s._v("happens-before")]),s._v("先行发生原则你有了解过吗？")])]),s._v(" "),a("h2",{attrs:{id:"_2-计算机硬件存储体系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-计算机硬件存储体系"}},[s._v("#")]),s._v(" 2：计算机硬件存储体系")]),s._v(" "),a("p",[s._v("计算机存储结构，从本地磁盘到主存到CPU缓存，也就是从硬盘到内存，到CPU。\n一般对应的程序的操作就是从数据库查数据到内存然后到CPU进行计算\n"),a("img",{attrs:{src:t(718),alt:"Alt text"}}),s._v("\n因为有这么多级的缓存(cpu和物理主内存的速度不一致的)，\nCPU的运行"),a("strong",[s._v("并不是直接操作内存而是先把内存里边的数据读到缓存")]),s._v("，而内存的读和写操作的时候就会造成不一致的问题\n"),a("img",{attrs:{src:t(719),alt:"Alt text"}}),s._v("\nJava虚拟机规范中试图定义一种"),a("strong",[s._v("Java内存模型")]),s._v("（java Memory Model，简称JMM) "),a("strong",[s._v("来屏蔽掉各种硬件和操作系统的内存访问差异")]),s._v("，以实现让Java程序在各种平台下都能达到一致的内存访问效果。推导出我们需要知道JMM")]),s._v(" "),a("h2",{attrs:{id:"_3-java内存模型java-memory-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-java内存模型java-memory-model"}},[s._v("#")]),s._v(" 3：Java内存模型Java Memory Model")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("JMM\nJMM(Java内存模型Java Memory Model，简称JMM)本身是一种"),a("strong",[s._v("抽象的概念")]),s._v("并不真实存在它仅仅描述的是一组约定或规范，通过这组规范定义了程序中(尤其是多线程)各个变量的读写访问方式并决定一个线程对共享变量的写入何时以及如何变成对另一个线程可见，关键技术点都是围绕多线程的"),a("strong",[s._v("原子性")]),s._v("、"),a("strong",[s._v("可见性")]),s._v("和"),a("strong",[s._v("有序性")]),s._v("展开的。")])]),s._v(" "),a("li",[a("p",[s._v("原则：\nJMM的关键技术点都是围绕多线程的"),a("strong",[s._v("原子性")]),s._v("、"),a("strong",[s._v("可见性")]),s._v("和"),a("strong",[s._v("有序性")]),s._v("展开的")])]),s._v(" "),a("li",[a("p",[s._v("能干嘛？")]),s._v(" "),a("ul",[a("li",[s._v("1 通过JMM来实现线程和主内存之间的抽象关系。")]),s._v(" "),a("li",[s._v("2 屏蔽各个"),a("strong",[s._v("硬件平台")]),s._v("和"),a("strong",[s._v("操作系统")]),s._v("的内存访问差异以实现让Java程序在各种平台下都能达到一致的内存访问效果。")])])])]),s._v(" "),a("h2",{attrs:{id:"_4-jmm规范下-三大特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-jmm规范下-三大特性"}},[s._v("#")]),s._v(" 4：JMM规范下，三大特性")]),s._v(" "),a("h3",{attrs:{id:"_1-原子性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-原子性"}},[s._v("#")]),s._v(" 1）原子性")]),s._v(" "),a("ul",[a("li",[s._v("指一个操作是不可中断的，即多线程环境下，操作不能被其他线程干扰")])]),s._v(" "),a("h3",{attrs:{id:"_2-可见性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-可见性"}},[s._v("#")]),s._v(" 2）可见性")]),s._v(" "),a("blockquote",[a("p",[s._v("是指当一个线程修改了某一个共享变量的值，其他线程是否能够立即知道该变更 ，JMM规定了所有的变量都存储在主内存中。\n"),a("img",{attrs:{src:t(720),alt:"Alt text"}}),s._v(" "),a("img",{attrs:{src:t(721),alt:"Alt text"}})])]),s._v(" "),a("ul",[a("li",[s._v("Java中"),a("strong",[s._v("普通的共享变量不保证可见性")]),s._v('，因为数据修改被写入内存的时机是不确定的，多线程并发下很可能出现"脏读"，所以每个线程都有自己的'),a("strong",[s._v("工作内存")]),s._v("，线程自己的工作内存中保存了该线程使用到的变量的"),a("strong",[s._v("主内存副本拷贝")]),s._v("，线程对变量的所有操作（读取，赋值等 ）都必需在线程自己的工作内存中进行，而不能够直接读写主内存中的变量。不同线程之间也无法直接访问对方工作内存中的变量，线程间变量值的传递均需要通过主内存来完成\n"),a("img",{attrs:{src:t(722),alt:"Alt text"}})]),s._v(" "),a("li",[s._v("如果没有保证可见性\n"),a("ul",[a("li",[s._v("导致-"),a("strong",[s._v("线程脏读")])]),s._v(" "),a("li",[s._v("例子\n"),a("ul",[a("li",[s._v("主内存中有变量 x，初始值为 0")]),s._v(" "),a("li",[s._v("线程 A 要将 x 加 1，先将 x=0 拷贝到自己的私有内存中，然后更新 x 的值")]),s._v(" "),a("li",[s._v("线程 A 将更新后的 x 值回刷到主内存的时间是不固定的")]),s._v(" "),a("li",[s._v("刚好在线程 A 没有回刷 x 到主内存时，线程 B 同样从主内存中读取 x，此时为 0，和线程 A 一样的操作，最后期盼的 x=2 就会变成 x=1")])])])])])]),s._v(" "),a("h3",{attrs:{id:"_3-有序性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-有序性"}},[s._v("#")]),s._v(" 3）有序性")]),s._v(" "),a("ul",[a("li",[s._v("有序性牵扯到指令")]),s._v(" "),a("li",[s._v("这里给一个案例")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mySort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//语句1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//语句2")]),s._v("\n    x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//语句3")]),s._v("\n    y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//语句4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2134")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1324")]),s._v("\n \n问题：请问语句"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("可以重排后变成第一个条吗？\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("有序性是什么？\n对于一个线程的执行代码而言，我们总是习惯性认为代码的执行总是从上到下，有序执行。但为了提供性能，编译器和处理器通常会对指令序列进行"),a("strong",[s._v("重新排序")]),s._v("。Java规范规定JVM线程内部维持"),a("strong",[s._v("顺序化语义")]),s._v("，即只要程序的最终结果与它顺序化执行的结果"),a("strong",[s._v("相等")]),s._v("，那么指令的执行顺序可以与代码顺序"),a("strong",[s._v("不一致")]),s._v("，此过程叫"),a("strong",[s._v("指令的重排序")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("优缺点\nJVM能根据处理器特性（CPU多级缓存系统、多核处理器等）适当的机器对指令进行重排序，使得机器指令能更符合CPU的执行特性，最大限度的发挥机器性能。但是，")])])]),s._v(" "),a("p",[a("strong",[s._v("指令重排")]),s._v("可以保证"),a("strong",[s._v("串行")]),s._v("语义一致，但没有义务保证"),a("strong",[s._v("多线程间")]),s._v("的语义也一致（即可能产生“脏读”），简单说，两行以上不相干的代码在执行的时候有可能先执行的不是第一条，不见得是从上到下顺序执行，执行顺序会被优化。")]),s._v(" "),a("ul",[a("li",[s._v("指令重排的"),a("strong",[s._v("三种表现（层面）")]),s._v(" "),a("ul",[a("li",[s._v("编译器优化的重排")]),s._v(" "),a("li",[s._v("指令并行的重排")]),s._v(" "),a("li",[s._v("内存系统的重排")])])])]),s._v(" "),a("p",[a("img",{attrs:{src:t(723),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("小总结\n"),a("ul",[a("li",[a("strong",[s._v("单线程")]),s._v("环境里面确保程序最终执行结果和代码顺序执行的"),a("strong",[s._v("结果一致")]),s._v("。")]),s._v(" "),a("li",[s._v("处理器在进行重排序时必须要考虑指令之间的"),a("strong",[s._v("数据依赖性")])]),s._v(" "),a("li",[a("strong",[s._v("多线程")]),s._v("环境中线程交替执行,由于编译器优化重排的存在，两个线程中使用的变量能否保证一致性是"),a("strong",[s._v("无法确定的,结果无法预测")])])])])]),s._v(" "),a("h2",{attrs:{id:"_5-jmm规范下-多线程对变量的读写过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-jmm规范下-多线程对变量的读写过程"}},[s._v("#")]),s._v(" 5：JMM规范下，多线程对变量的读写过程")]),s._v(" "),a("ul",[a("li",[s._v("读取过程")])]),s._v(" "),a("p",[s._v("由于JVM运行程序的实体是线程，而每个线程创建时JVM都会为其创建一个工作内存(有些地方称为栈空间)，工作内存是每个线程的私有数据区域，而Java内存模型中规定所有变量都存储在主内存，主内存是共享内存区域，所有线程都可以访问，但线程对变量的操作(读取赋值等)必须在工作内存中进行，首先要将变量从主内存拷贝到的线程自己的工作内存空间，然后对变量进行操作，操作完成后再将变量写回主内存，不能直接操作主内存中的变量，各个线程中的工作内存中存储着主内存中的变量副本拷贝，因此不同的线程间无法访问对方的工作内存，线程间的通信(传值)必须通过主内存来完成，其简要访问过程如下图\n"),a("img",{attrs:{src:t(724),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("JMM定义了线程和主内存之间的抽象关系\n"),a("ul",[a("li",[s._v("线程之间的共享变量存储在主内存中(从硬件角度来说就是内存条)")]),s._v(" "),a("li",[s._v("每个线程都有一个私有的"),a("strong",[s._v("本地工作内存")]),s._v("，本地工作内存中存储了该线程用来读/写共享变量的副本(从硬件角度来说就是CPU的缓存，比如寄存器、L1、L2、L3缓存等)")])])]),s._v(" "),a("li",[s._v("小总结\n"),a("ul",[a("li",[s._v("我们定义的所有共享变量都存储在物理主内存中")]),s._v(" "),a("li",[s._v("每个线程都有自己独立的工作内存，里面保存该线程使用到的变量的副本（主内存中该变量的一份拷贝）")]),s._v(" "),a("li",[s._v("线程对共享变量所有的操作都必须先在线程自己的工作内存中进行后写回主内存，不能直接从主内存中读写（不能越级）")]),s._v(" "),a("li",[s._v("不同线程之间也无法直接访问其他线程的工作内存中的变量，线程间变量值的传递需要通过主内存来进行（同级不能相互访问）")])])])]),s._v(" "),a("h2",{attrs:{id:"_6-jmm规范下-多线程先行发生原则之happens-before"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-jmm规范下-多线程先行发生原则之happens-before"}},[s._v("#")]),s._v(" 6：JMM规范下，多线程先行发生原则之happens-before")]),s._v(" "),a("h3",{attrs:{id:"_1-引入happens-before"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-引入happens-before"}},[s._v("#")]),s._v(" 1）引入happens-before")]),s._v(" "),a("ul",[a("li",[s._v("本章最晦涩难懂的知识")]),s._v(" "),a("li",[s._v("happens-before先行发生原则\n"),a("ul",[a("li",[s._v("在JMM中，如果一个操作执行的结果需要对另一个操作可见性或者代码重新排序，那么这两个操作之间必须存在happens-before（先行发生）原则。逻辑上的先后关系。")])])]),s._v(" "),a("li",[s._v("x,y案例说明\n"),a("ul",[a("li",[s._v("x=5;线程A执行")]),s._v(" "),a("li",[s._v("y=x;线程B执行")]),s._v(" "),a("li",[s._v("问：y一定等于5吗？")]),s._v(" "),a("li",[s._v("答：不一定")])])])]),s._v(" "),a("p",[s._v("如果线程A的操作（x= 5）happens-before(先行发生)线程B的操作（y = x）,那么可以确定线程B执行后y = 5 一定成立;\n如果他们不存在"),a("code",[s._v("happens-before")]),s._v("原则，那么y = 5 不一定成立。\n是happens-before原则的威力。-------------------》包含可见性和有序性的约束")]),s._v(" "),a("ul",[a("li",[s._v("先行发生原则("),a("code",[s._v("happens-before")]),s._v(")被定义在了JMM之中\n如果Java内存模型中所有的有序性都仅靠"),a("code",[s._v("volatile")]),s._v("和"),a("code",[s._v("synchronized")]),s._v("来完成，那么有很多操作都将会变得非常啰嗦，但是我们在编写Java并发代码的时候并没有察觉到这一点。我们没有"),a("strong",[s._v("时时")]),s._v("、"),a("strong",[s._v("处处")]),s._v("、"),a("strong",[s._v("次次")]),s._v("，添加"),a("code",[s._v("volatile")]),s._v("和"),a("code",[s._v("synchronized")]),s._v("来完成程序，这是因为Java语言中JMM原则下有一个**“先行发生”("),a("code",[s._v("Happens-Before")]),s._v(")的原则限制和规矩**\n这个原则非常重要：\n它是判断数据是否存在竞争，"),a("strong",[s._v("线程是否安全")]),s._v("的"),a("strong",[s._v("非常有用的手段")]),s._v("。依赖这个原则，我们可以通过几条简单规则一揽子"),a("strong",[s._v("解决并发环境下两个操作之间是否可能存在冲突的所有问题")]),s._v("，而不需要陷入Java内存模型苦涩难懂的底层编译原理之中。")])]),s._v(" "),a("h3",{attrs:{id:"_2-happens-before总原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-happens-before总原则"}},[s._v("#")]),s._v(" 2）happens-before总原则")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("happens-before")]),s._v("总原则\n"),a("ul",[a("li",[s._v("如果一个操作"),a("code",[s._v("happens-before")]),s._v("另一个操作，那么第一个操作的执行结果将对第二个操作"),a("strong",[s._v("可见")]),s._v("，而且第一个操作的执行顺序排在第二个操作"),a("strong",[s._v("之前")]),s._v("。")]),s._v(" "),a("li",[s._v("两个操作之间存在happens-before关系，"),a("strong",[s._v("并不一定")]),s._v("要按照"),a("code",[s._v("happens-before")]),s._v("原则制定的顺序来执行。如果重排序之后的执行结果与按照happens-before关系来执行的"),a("strong",[s._v("结果一致，那么这种重排序并不非法。")])])])])]),s._v(" "),a("h3",{attrs:{id:"_3-happens-before8条"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-happens-before8条"}},[s._v("#")]),s._v(" 3）happens-before8条")]),s._v(" "),a("blockquote",[a("p",[s._v("JMM存在的天然存在的"),a("code",[s._v("happens-before")]),s._v("关系，8条")])]),s._v(" "),a("ul",[a("li",[s._v("次序规则：一个线程内，按照代码顺序，写在前面的操作先行发生于写在后面的操作。")]),s._v(" "),a("li",[s._v("锁定规则：锁的获取的先后顺序\n"),a("ul",[a("li",[s._v("一个"),a("code",[s._v("unLock")]),s._v("操作先行发生于后面（这里的后面是指时间上的先后）对同一个锁的"),a("code",[s._v("lock")]),s._v("操作（一个线程想要"),a("code",[s._v("lock")]),s._v(",肯定要等前面的锁"),a("code",[s._v("unLock")]),s._v("释放这个资源）")])])])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HappenBeforeDemo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" objectLock "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InterruptedException")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//对于同一把锁objectLock，threadA一定先unlock同一把锁后B才能获得该锁，   A 先行发生于B")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("objectLock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[s._v("volatile变量规则\n对一个"),a("code",[s._v("volatile")]),s._v("变量的读写操作先行发生于后面对这个变量的读操作，前面的写对后面的读是可见的，这里的后面同样是指时间上的先后。")]),s._v(" "),a("li",[s._v("传递规则\n如果操作A先行发生于操作B，而操作B又先行发生于操作C，则可以得出操作A先行发生于操作C")]),s._v(" "),a("li",[s._v("线程启动规则(Thread Start Rule)\nThread对象的"),a("code",[s._v("start()")]),s._v("方法先行发生于此线程的每一个动作")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),s._v(" t1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"----hello thread"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//后执行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nt1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//-------------------先执行")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("线程中断规则("),a("code",[s._v("Thread Interruption Rule")]),s._v(")")])]),s._v(" "),a("p",[s._v("对线程"),a("code",[s._v("interrupt()")]),s._v("方法的调用先行发生于被中断线程的代码检测到中断事件的发生；可以通过"),a("code",[s._v("Thread.interrupted()")]),s._v("检测到是否发生中断。")]),s._v(" "),a("ul",[a("li",[s._v("也就是说你要先调用了"),a("code",[s._v("interrupt()")]),s._v("方法设置过中断标志位，我才能检测到中断发送。")]),s._v(" "),a("li",[s._v("线程终止规则("),a("code",[s._v("Thread Termination Rule")]),s._v(")")])]),s._v(" "),a("p",[s._v("线程中的所有操作都先行发生于对此线程的终止检测，我们可以通过"),a("code",[s._v("isAlive()")]),s._v("等手段检测线程是否已经终止执行。")]),s._v(" "),a("ul",[a("li",[s._v("对象终结规则("),a("code",[s._v("Finalizer Rule")]),s._v(")")])]),s._v(" "),a("p",[s._v("一个对象的初始化完成（构造函数执行结束）先行发生于它的"),a("code",[s._v("finalize()")]),s._v("方法的开始")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("finalize")]),s._v("的通常目的是在对象被不可撤销的丢弃之前执行"),a("strong",[s._v("清理操作")]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"_4-happens-before案例说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-happens-before案例说明"}},[s._v("#")]),s._v(" 4）happens-before案例说明")]),s._v(" "),a("ul",[a("li",[s._v("案例")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestDemo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("问：假设存在线程A和B，线程A先（时间上的先后）调用了setValue()，然后线程B调用了同一个对象的getValue()，那么线程B收到的返回值是什么？是0还是1？")])]),s._v(" "),a("li",[a("p",[s._v("答：真不一定")])])]),s._v(" "),a("p",[s._v("我们就这段简单的代码一次分析happens-before的规则（规则5、6、7、8 可以忽略，因为他们和这段代码毫无关系）：\n1 由于两个方法是由不同的线程调用，不在同一个线程中，所以肯定不满足程序次序规则；\n2 两个方法都没有使用锁，所以不满足锁定规则；\n3 变量不是用volatile修饰的，所以volatile变量规则不满足；\n4 传递规则肯定不满足；")]),s._v(" "),a("ul",[a("li",[s._v("所以我们无法通过happens-before原则推导出线程A happens-before线程B，虽然可以确认在时间上线程A优先于线程B指定，\n但就是无法确认线程B获得的结果是什么，所以这段代码不是线程安全的。那么怎么修复这段代码呢？")]),s._v(" "),a("li",[s._v("修复")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestDemo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//synchronized太猛了，降低太多的效率")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestDemo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//把value定义为volatile变量，由于setter方法对value的修改不依赖value的值，满足volatile关键字使用场景")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//理由：利用volatile保证读取操作的可见性；利用synchronized保证复合操作的原子性结合使用锁和volatile变量来减少同步的开销。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports},718:function(s,a,t){s.exports=t.p+"assets/img/image19.724c9fd0.png"},719:function(s,a,t){s.exports=t.p+"assets/img/image20.7821870b.png"},720:function(s,a,t){s.exports=t.p+"assets/img/image21.6b8b301b.png"},721:function(s,a,t){s.exports=t.p+"assets/img/image22.5ee83942.png"},722:function(s,a,t){s.exports=t.p+"assets/img/image23.9ca965fe.png"},723:function(s,a,t){s.exports=t.p+"assets/img/image24.482ea391.png"},724:function(s,a,t){s.exports=t.p+"assets/img/image25.674b9bc2.png"}}]);