<template><div><h2 id="为什么使用mq" tabindex="-1"><a class="header-anchor" href="#为什么使用mq" aria-hidden="true">#</a> 为什么使用MQ？</h2>
<p>使用MQ的场景很多，主要有三个：解耦、异步、削峰。</p>
<ul>
<li>解耦：假设现在，日志不光要插入到数据库里，还要在硬盘中增加文件类型的日志，同时，一些关键日志还要通过邮件的方式发送给指定的人。那么，如果按照原来的逻辑，A可能就需要在原来的代码上做扩展，除了B服务，还要加上日志文件的存储和日志邮件的发送。但是，如果你使用了MQ，那么，A服务是不需要做更改的，它还是将消息放到MQ中即可，其它的服务，无论是原来的B服务还是新增的日志文件存储服务或日志邮件发送服务，都直接从MQ中获取消息并处理即可。这就是解耦，它的好处是提高系统灵活性，扩展性。</li>
<li>异步：可以将一些非核心流程，如日志，短信，邮件等，通过MQ的方式异步去处理。这样做的好处是缩短主流程的响应时间，提升用户体验。</li>
<li>削峰：MQ的本质就是业务的排队。所以，面对突然到来的高并发，MQ也可以不用慌忙，先排好队，不要着急，一个一个来。削峰的好处就是避免高并发压垮系统的关键组件，如某个核心服务或数据库等。</li>
</ul>
<p>下面附场景解释：</p>
<h3 id="解耦" tabindex="-1"><a class="header-anchor" href="#解耦" aria-hidden="true">#</a> 解耦</h3>
<p>场景：A 系统发送数据到 BCD 三个系统，通过接口调用发送。如果 E 系统也要这个数据呢？那如果 C 系统现在不需要了呢？A 系统负责人几乎崩溃......</p>
<p><img src="http://blog-img.coolsen.cn/img/727602-20200108091205317-949408193.png" alt="img"></p>
<p>在这个场景中，A 系统跟其它各种乱七八糟的系统严重耦合，A 系统产生一条比较关键的数据，很多系统都需要 A 系统将这个数据发送过来。A 系统要时时刻刻考虑 BCDE 四个系统如果挂了该咋办？要不要重发，要不要把消息存起来？头发都白了啊！</p>
<p>如果使用 MQ，A 系统产生一条数据，发送到 MQ 里面去，哪个系统需要数据自己去 MQ 里面消费。如果新系统需要数据，直接从 MQ 里消费即可；如果某个系统不需要这条数据了，就取消对 MQ 消息的消费即可。这样下来，A 系统压根儿不需要去考虑要给谁发送数据，不需要维护这个代码，也不需要考虑人家是否调用成功、失败超时等情况。</p>
<p><img src="http://blog-img.coolsen.cn/img/727602-20200108091329888-1880681145.png" alt="img"></p>
<p>总结：通过一个 MQ，Pub/Sub 发布订阅消息这么一个模型，A 系统就跟其它系统彻底解耦了。</p>
<h3 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h3>
<p>场景：A 系统接收一个请求，需要在自己本地写库，还需要在 BCD 三个系统写库，自己本地写库要 3ms，BCD 三个系统分别写库要 300ms、450ms、200ms。最终请求总延时是 3 + 300 + 450 + 200 = 953ms，接近 1s，用户感觉搞个什么东西，慢死了慢死了。用户通过浏览器发起请求，等待个 1s，这几乎是不可接受的。</p>
<p><img src="http://blog-img.coolsen.cn/img/727602-20200108091632167-740723329.png" alt="img"></p>
<p>一般互联网类的企业，对于用户直接的操作，一般要求是每个请求都必须在 200 ms 以内完成，对用户几乎是无感知的。</p>
<p>如果使用 MQ，那么 A 系统连续发送 3 条消息到 MQ 队列中，假如耗时 5ms，A 系统从接受一个请求到返回响应给用户，总时长是 3 + 5 = 8ms，对于用户而言，其实感觉上就是点个按钮，8ms 以后就直接返回了。</p>
<p><img src="http://blog-img.coolsen.cn/img/727602-20200108091722601-747710174.png" alt="img"></p>
<h3 id="削峰" tabindex="-1"><a class="header-anchor" href="#削峰" aria-hidden="true">#</a> 削峰</h3>
<p>场景：每天 0:00 到 12:00，A 系统风平浪静，每秒并发请求数量就 50 个。结果每次一到 12:00 ~ 13:00 ，每秒并发请求数量突然会暴增到 5k+ 条。但是系统是直接基于 MySQL 的，大量的请求涌入 MySQL，每秒钟对 MySQL 执行约 5k 条 SQL。</p>
<p>使用 MQ，每秒 5k 个请求写入 MQ，A 系统每秒钟最多处理 2k 个请求，因为 MySQL 每秒钟最多处理 2k 个。A 系统从 MQ 中慢慢拉取请求，每秒钟就拉取 2k 个请求，不要超过自己每秒能处理的最大请求数量就 ok，这样下来，哪怕是高峰期的时候，A 系统也绝对不会挂掉。而 MQ 每秒钟 5k 个请求进来，就 2k 个请求出去，结果就导致在中午高峰期（1 个小时），可能有几十万甚至几百万的请求积压在 MQ 中。</p>
<p><img src="http://blog-img.coolsen.cn/img/727602-20200108091915241-1598228624.png" alt="img"></p>
<p>这个短暂的高峰期积压是 ok 的，因为高峰期过了之后，每秒钟就 50 个请求进 MQ，但是 A 系统依然会按照每秒 2k 个请求的速度在处理。所以说，只要高峰期一过，A 系统就会快速将积压的消息给解决掉。</p>
<h2 id="消息队列的缺点" tabindex="-1"><a class="header-anchor" href="#消息队列的缺点" aria-hidden="true">#</a> 消息队列的缺点</h2>
<p>1、 系统可用性降低</p>
<p>系统引入的外部依赖越多，越容易挂掉。</p>
<p>2、 系统复杂度提高</p>
<p>加入了消息队列，要多考虑很多方面的问题，比如：一致性问题、如何保证消息不被重复消费、如何保证消息可靠性传输等。因此，需要考虑的东西更多，复杂性增大。</p>
<p>3、 一致性问题</p>
<p>A 系统处理完了直接返回成功了，人都以为你这个请求就成功了；但是问题是，要是 BCD 三个系统那里，BD 两个系统写库成功了，结果 C 系统写库失败了，这就数据不一致了。</p>
<h2 id="kafka、activemq、rabbitmq、rocketmq-有什么优缺点" tabindex="-1"><a class="header-anchor" href="#kafka、activemq、rabbitmq、rocketmq-有什么优缺点" aria-hidden="true">#</a> Kafka、ActiveMQ、RabbitMQ、RocketMQ 有什么优缺点？</h2>
<table>
<thead>
<tr>
<th>特性</th>
<th>ActiveMQ</th>
<th>RabbitMQ</th>
<th>RocketMQ</th>
<th>Kafka</th>
</tr>
</thead>
<tbody>
<tr>
<td>开发语言</td>
<td>java</td>
<td>erlang</td>
<td>java</td>
<td>scala</td>
</tr>
<tr>
<td>单机吞吐量</td>
<td>万级，比 RocketMQ、Kafka 低一个数量级</td>
<td>同 ActiveMQ</td>
<td>10 万级，支撑高吞吐</td>
<td>10 万级，高吞吐，一般配合大数据类的系统来进行实时数据计算、日志采集等场景</td>
</tr>
<tr>
<td>topic 数量对吞吐量的影响</td>
<td></td>
<td></td>
<td>topic 可以达到几百/几千的级别，吞吐量会有较小幅度的下降，这是 RocketMQ 的一大优势，在同等机器下，可以支撑大量的 topic</td>
<td>topic 从几十到几百个时候，吞吐量会大幅度下降，在同等机器下，Kafka 尽量保证 topic 数量不要过多，如果要支撑大规模的 topic，需要增加更多的机器资源</td>
</tr>
<tr>
<td>时效性</td>
<td>ms 级</td>
<td>微秒级，这是 RabbitMQ 的一大特点，延迟最低</td>
<td>ms 级</td>
<td>延迟在 ms 级以内</td>
</tr>
<tr>
<td>可用性</td>
<td>高，基于主从架构实现高可用</td>
<td>同 ActiveMQ</td>
<td>非常高，分布式架构</td>
<td>非常高，分布式，一个数据多个副本，少数机器宕机，不会丢失数据，不会导致不可用</td>
</tr>
<tr>
<td>消息可靠性</td>
<td>有较低的概率丢失数据</td>
<td>基本不丢</td>
<td>经过参数优化配置，可以做到 0 丢失</td>
<td>同 RocketMQ</td>
</tr>
<tr>
<td>功能支持</td>
<td>MQ 领域的功能极其完备</td>
<td>基于 erlang 开发，并发能力很强，性能极好，延时很低</td>
<td>MQ 功能较为完善，还是分布式的，扩展性好</td>
<td>功能较为简单，主要支持简单的 MQ 功能，在大数据领域的实时计算以及日志采集被大规模使用</td>
</tr>
<tr>
<td>社区活跃度</td>
<td>低</td>
<td>很高</td>
<td>一般</td>
<td>很高</td>
</tr>
</tbody>
</table>
<ul>
<li>中小型公司，技术实力较为一般，技术挑战不是特别高，用 RabbitMQ 是不错的选择；</li>
<li>大型公司，基础架构研发实力较强，用 RocketMQ 是很好的选择。</li>
<li>大数据领域的实时计算、日志采集等场景，用 Kafka 是业内标准的，几乎是全世界这个领域的事实性规范。</li>
</ul>
<h1 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> RabbitMQ</h1>
<h2 id="_1-rabbitmq是什么" tabindex="-1"><a class="header-anchor" href="#_1-rabbitmq是什么" aria-hidden="true">#</a> 1. RabbitMQ是什么？</h2>
<p>RabbitMQ是实现了高级消息队列协议（AMQP）的开源消息代理软件（亦称面向消息的中间件）。RabbitMQ服务器是用Erlang语言编写的，而群集和故障转移是构建在开放电信平台框架上的。所有主要的编程语言均有与代理接口通讯的客户端库。</p>
<h2 id="_2-rabbitmq特点" tabindex="-1"><a class="header-anchor" href="#_2-rabbitmq特点" aria-hidden="true">#</a> 2. RabbitMQ特点?</h2>
<p>可靠性: RabbitMQ使用一些机制来保证可靠性， 如持久化、传输确认及发布确认等。</p>
<p>灵活的路由 : 在消息进入队列之前，通过交换器来路由消息。对于典型的路由功能， RabbitMQ 己经提供了一些内置的交换器来实现。针对更复杂的路由功能，可以将多个 交换器绑定在一起， 也可以通过插件机制来实现自己的交换器。</p>
<p>扩展性: 多个RabbitMQ节点可以组成一个集群，也可以根据实际业务情况动态地扩展 集群中节点。</p>
<p>高可用性 : 队列可以在集群中的机器上设置镜像，使得在部分节点出现问题的情况下队 列仍然可用。</p>
<p>多种协议: RabbitMQ除了原生支持AMQP协议，还支持STOMP， MQTT等多种消息 中间件协议。</p>
<p>多语言客户端 :RabbitMQ 几乎支持所有常用语言，比如 Java、 Python、 Ruby、 PHP、 C#、 JavaScript 等。</p>
<p>管理界面 : RabbitMQ 提供了一个易用的用户界面，使得用户可以监控和管理消息、集 群中的节点等。</p>
<p>令插件机制: RabbitMQ 提供了许多插件 ， 以实现从多方面进行扩展，当然也可以编写自 己的插件。</p>
<h2 id="_3-amqp是什么" tabindex="-1"><a class="header-anchor" href="#_3-amqp是什么" aria-hidden="true">#</a> 3. AMQP是什么?</h2>
<p>RabbitMQ就是 AMQP 协议的 <code v-pre>Erlang</code> 的实现(当然 RabbitMQ 还支持 <code v-pre>STOMP2</code>、 <code v-pre>MQTT3</code> 等协议 ) AMQP 的模型架构 和 RabbitMQ 的模型架构是一样的，生产者将消息发送给交换器，交换器和队列绑定 。</p>
<p>RabbitMQ 中的交换器、交换器类型、队列、绑定、路由键等都是遵循的 AMQP 协议中相 应的概念。目前 RabbitMQ 最新版本默认支持的是 AMQP 0-9-1。</p>
<h2 id="_4-amqp的3层协议" tabindex="-1"><a class="header-anchor" href="#_4-amqp的3层协议" aria-hidden="true">#</a> 4. AMQP的3层协议？</h2>
<p>Module Layer:协议最高层，主要定义了一些客户端调用的命令，客户端可以用这些命令实现自己的业务逻辑。</p>
<p>Session Layer:中间层，主要负责客户端命令发送给服务器，再将服务端应答返回客户端，提供可靠性同步机制和错误处理。</p>
<p>TransportLayer:最底层，主要传输二进制数据流，提供帧的处理、信道服用、错误检测和数据表示等。</p>
<h2 id="_5-说说broker服务节点、queue队列、exchange交换器" tabindex="-1"><a class="header-anchor" href="#_5-说说broker服务节点、queue队列、exchange交换器" aria-hidden="true">#</a> 5. 说说Broker服务节点、Queue队列、Exchange交换器？</h2>
<ul>
<li>Broker可以看做RabbitMQ的服务节点。一般请下一个Broker可以看做一个RabbitMQ服务器。</li>
<li>Queue:RabbitMQ的内部对象，用于存储消息。多个消费者可以订阅同一队列，这时队列中的消息会被平摊（轮询）给多个消费者进行处理。</li>
<li>Exchange:生产者将消息发送到交换器，由交换器将消息路由到一个或者多个队列中。当路由不到时，或返回给生产者或直接丢弃。</li>
</ul>
<h2 id="_6-如何保证消息的可靠性" tabindex="-1"><a class="header-anchor" href="#_6-如何保证消息的可靠性" aria-hidden="true">#</a> 6. 如何保证消息的可靠性？</h2>
<p>分三点：</p>
<ul>
<li>生产者到RabbitMQ：事务机制和Confirm机制，注意：事务机制和 Confirm 机制是互斥的，两者不能共存，会导致 RabbitMQ 报错。</li>
<li>RabbitMQ自身：持久化、集群、普通模式、镜像模式。</li>
<li>RabbitMQ到消费者：basicAck机制、死信队列、消息补偿机制。</li>
</ul>
<h2 id="_7-生产者消息运转的流程" tabindex="-1"><a class="header-anchor" href="#_7-生产者消息运转的流程" aria-hidden="true">#</a> 7. 生产者消息运转的流程？</h2>
<ol>
<li>
<p><code v-pre>Producer</code>先连接到Broker,建立连接Connection,开启一个信道(Channel)。</p>
</li>
<li>
<p><code v-pre>Producer</code>声明一个交换器并设置好相关属性。</p>
</li>
<li>
<p><code v-pre>Producer</code>声明一个队列并设置好相关属性。</p>
</li>
<li>
<p><code v-pre>Producer</code>通过路由键将交换器和队列绑定起来。</p>
</li>
<li>
<p><code v-pre>Producer</code>发送消息到<code v-pre>Broker</code>,其中包含路由键、交换器等信息。</p>
</li>
<li>
<p>相应的交换器根据接收到的路由键查找匹配的队列。</p>
</li>
<li>
<p>如果找到，将消息存入对应的队列，如果没有找到，会根据生产者的配置丢弃或者退回给生产者。</p>
</li>
<li>
<p>关闭信道。</p>
</li>
<li>
<p>管理连接。</p>
</li>
</ol>
<h2 id="_8-消费者接收消息过程" tabindex="-1"><a class="header-anchor" href="#_8-消费者接收消息过程" aria-hidden="true">#</a> 8.消费者接收消息过程？</h2>
<ol>
<li>
<p><code v-pre>Producer</code>先连接到<code v-pre>Broker</code>,建立连接<code v-pre>Connection</code>,开启一个信道(<code v-pre>Channel</code>)。</p>
</li>
<li>
<p>向<code v-pre>Broker</code>请求消费响应的队列中消息，可能会设置响应的回调函数。</p>
</li>
<li>
<p>等待<code v-pre>Broker</code>回应并投递相应队列中的消息，接收消息。</p>
</li>
<li>
<p>消费者确认收到的消息,<code v-pre>ack</code>。</p>
</li>
<li>
<p><code v-pre>RabbitMq</code>从队列中删除已经确定的消息。</p>
</li>
<li>
<p>关闭信道。</p>
</li>
<li>
<p>关闭连接。</p>
</li>
</ol>
<h2 id="_9-生产者如何将消息可靠投递到rabbitmq" tabindex="-1"><a class="header-anchor" href="#_9-生产者如何将消息可靠投递到rabbitmq" aria-hidden="true">#</a> 9. 生产者如何将消息可靠投递到RabbitMQ？</h2>
<ol>
<li>
<p>Client发送消息给MQ</p>
</li>
<li>
<p>MQ将消息持久化后，发送Ack消息给Client，此处有可能因为网络问题导致Ack消息无法发送到Client，那么Client在等待超时后，会重传消息；</p>
</li>
<li>
<p>Client收到Ack消息后，认为消息已经投递成功。</p>
</li>
</ol>
<h2 id="_10-rabbitmq如何将消息可靠投递到消费者" tabindex="-1"><a class="header-anchor" href="#_10-rabbitmq如何将消息可靠投递到消费者" aria-hidden="true">#</a> 10. RabbitMQ如何将消息可靠投递到消费者？</h2>
<ol>
<li>
<p>MQ将消息push给Client（或Client来pull消息）</p>
</li>
<li>
<p>Client得到消息并做完业务逻辑</p>
</li>
<li>
<p>Client发送Ack消息给MQ，通知MQ删除该消息，此处有可能因为网络问题导致Ack失败，那么Client会重复消息，这里就引出消费幂等的问题；</p>
</li>
<li>
<p>MQ将已消费的消息删除。</p>
</li>
</ol>
<h2 id="_11-如何保证rabbitmq消息队列的高可用" tabindex="-1"><a class="header-anchor" href="#_11-如何保证rabbitmq消息队列的高可用" aria-hidden="true">#</a> 11. 如何保证RabbitMQ消息队列的高可用?</h2>
<p>RabbitMQ 有三种模式：<code v-pre>单机模式</code>，<code v-pre>普通集群模式</code>，<code v-pre>镜像集群模式</code>。</p>
<p><strong>单机模式</strong>：就是demo级别的，一般就是你本地启动了玩玩儿的，没人生产用单机模式</p>
<p><strong>普通集群模式</strong>：意思就是在多台机器上启动多个RabbitMQ实例，每个机器启动一个。</p>
<p><strong>镜像集群模式</strong>：这种模式，才是所谓的RabbitMQ的高可用模式，跟普通集群模式不一样的是，你创建的queue，无论元数据(元数据指RabbitMQ的配置数据)还是queue里的消息都会存在于多个实例上，然后每次你写消息到queue的时候，都会自动把消息到多个实例的queue里进行消息同步。</p>
<h1 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> RocketMQ</h1>
<h2 id="_1-rocketmq是什么" tabindex="-1"><a class="header-anchor" href="#_1-rocketmq是什么" aria-hidden="true">#</a> 1. RocketMQ是什么？</h2>
<p>RocketMQ 是阿里巴巴开源的分布式消息中间件。支持事务消息、顺序消息、批量消息、定时消息、消息回溯等。它里面有几个区别于标准消息中件间的概念，如Group、Topic、Queue等。系统组成则由Producer、Consumer、Broker、NameServer等。</p>
<p><strong>RocketMQ 特点</strong></p>
<ul>
<li>是一个队列模型的消息中间件，具有高性能、高可靠、高实时、分布式等特点</li>
<li>Producer、Consumer、队列都可以分布式</li>
<li>Producer 向一些队列轮流发送消息，队列集合称为 Topic，Consumer 如果做广播消费，则一个 Consumer 实例消费这个 Topic 对应的所有队列，如果做集群消费，则多个 Consumer 实例平均消费这个 Topic 对应的队列集合</li>
<li>能够保证严格的消息顺序</li>
<li>支持拉（pull）和推（push）两种消息模式</li>
<li>高效的订阅者水平扩展能力</li>
<li>实时的消息订阅机制</li>
<li>亿级消息堆积能力</li>
<li>支持多种消息协议，如 JMS、OpenMessaging 等</li>
<li>较少的依赖</li>
</ul>
<h2 id="_2-rocketmq由哪些角色组成-每个角色作用和特点是什么" tabindex="-1"><a class="header-anchor" href="#_2-rocketmq由哪些角色组成-每个角色作用和特点是什么" aria-hidden="true">#</a> 2. RocketMQ由哪些角色组成，每个角色作用和特点是什么？</h2>
<table>
<thead>
<tr>
<th>角色</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>Nameserver</td>
<td>无状态，动态列表；这也是和zookeeper的重要区别之一。zookeeper是有状态的。</td>
</tr>
<tr>
<td>Producer</td>
<td>消息生产者，负责发消息到Broker。</td>
</tr>
<tr>
<td>Broker</td>
<td>就是MQ本身，负责收发消息、持久化消息等。</td>
</tr>
<tr>
<td>Consumer</td>
<td>消息消费者，负责从Broker上拉取消息进行消费，消费完进行ack。</td>
</tr>
</tbody>
</table>
<h2 id="_3-rocketmq消费模式有几种" tabindex="-1"><a class="header-anchor" href="#_3-rocketmq消费模式有几种" aria-hidden="true">#</a> 3. RocketMQ消费模式有几种？</h2>
<p>消费模型由Consumer决定，消费维度为Topic。</p>
<p>1、集群消费</p>
<ul>
<li>
<p>一条消息只会被同Group中的一个Consumer消费</p>
</li>
<li>
<p>多个Group同时消费一个Topic时，每个Group都会有一个Consumer消费到数据</p>
</li>
</ul>
<p>2、广播消费</p>
<p>消息将对一 个Consumer Group 下的各个 Consumer 实例都消费一遍。即即使这些 Consumer 属于同一个Consumer Group ，消息也会被 Consumer Group 中的每个 Consumer 都消费一次。</p>
<h2 id="_4-rocketmq消费消息是push还是pull" tabindex="-1"><a class="header-anchor" href="#_4-rocketmq消费消息是push还是pull" aria-hidden="true">#</a> 4. RocketMQ消费消息是push还是pull？</h2>
<p>RocketMQ没有真正意义的push，都是pull，虽然有push类，但实际底层实现采用的是<strong>长轮询机制</strong>，即拉取方式</p>
<blockquote>
<p>broker端属性 longPollingEnable 标记是否开启长轮询。默认开启</p>
</blockquote>
<h3 id="追问-为什么要主动拉取消息而不使用事件监听方式" tabindex="-1"><a class="header-anchor" href="#追问-为什么要主动拉取消息而不使用事件监听方式" aria-hidden="true">#</a> 追问：为什么要主动拉取消息而不使用事件监听方式？</h3>
<p>事件驱动方式是建立好长连接，由事件（发送数据）的方式来实时推送。</p>
<p>如果broker主动推送消息的话有可能push速度快，消费速度慢的情况，那么就会造成消息在consumer端堆积过多，同时又不能被其他consumer消费的情况。而pull的方式可以根据当前自身情况来pull，不会造成过多的压力而造成瓶颈。所以采取了pull的方式。</p>
<h2 id="_5-broker如何处理拉取请求的" tabindex="-1"><a class="header-anchor" href="#_5-broker如何处理拉取请求的" aria-hidden="true">#</a> 5. broker如何处理拉取请求的？</h2>
<p>Consumer首次请求Broker</p>
<ul>
<li>
<p>Broker中是否有符合条件的消息</p>
</li>
<li>
<p>有</p>
</li>
<li>
<ul>
<li>响应Consumer</li>
<li>等待下次Consumer的请求</li>
</ul>
</li>
<li>
<p>没有</p>
</li>
<li>
<ul>
<li>DefaultMessageStore#ReputMessageService#run方法</li>
<li>PullRequestHoldService 来Hold连接，每个5s执行一次检查pullRequestTable有没有消息，有的话立即推送</li>
<li>每隔1ms检查commitLog中是否有新消息，有的话写入到pullRequestTable</li>
<li>当有新消息的时候返回请求</li>
<li>挂起consumer的请求，即不断开连接，也不返回数据</li>
<li>使用consumer的offset，</li>
</ul>
</li>
</ul>
<h2 id="_6-如何让rocketmq保证消息的顺序消费" tabindex="-1"><a class="header-anchor" href="#_6-如何让rocketmq保证消息的顺序消费" aria-hidden="true">#</a> 6. 如何让RocketMQ保证消息的顺序消费？</h2>
<p>首先多个queue只能保证单个queue里的顺序，queue是典型的FIFO，天然顺序。多个queue同时消费是无法绝对保证消息的有序性的。所以总结如下：</p>
<p>同一topic，同一个QUEUE，发消息的时候一个线程去发送消息，消费的时候 一个线程去消费一个queue里的消息。</p>
<h2 id="_7-rocketmq如何保证消息不丢失" tabindex="-1"><a class="header-anchor" href="#_7-rocketmq如何保证消息不丢失" aria-hidden="true">#</a> 7. RocketMQ如何保证消息不丢失？</h2>
<p>首先在如下三个部分都可能会出现丢失消息的情况：</p>
<ul>
<li>Producer端</li>
<li>Broker端</li>
<li>Consumer端</li>
</ul>
<p>1 、Producer端如何保证消息不丢失</p>
<ul>
<li>
<p>采取send()同步发消息，发送结果是同步感知的。</p>
</li>
<li>
<p>发送失败后可以重试，设置重试次数。默认3次。</p>
</li>
<li>
<p>集群部署，比如发送失败了的原因可能是当前Broker宕机了，重试的时候会发送到其他Broker上。</p>
</li>
</ul>
<p>2、Broker端如何保证消息不丢失</p>
<ul>
<li>
<p>修改刷盘策略为同步刷盘。默认情况下是异步刷盘的。</p>
</li>
<li>
<p>集群部署，主从模式，高可用。</p>
</li>
</ul>
<p>3、Consumer端如何保证消息不丢失</p>
<ul>
<li>完全消费正常后在进行手动ack确认。</li>
</ul>
<h2 id="_7-rocketmq的消息堆积如何处理" tabindex="-1"><a class="header-anchor" href="#_7-rocketmq的消息堆积如何处理" aria-hidden="true">#</a> 7. rocketMQ的消息堆积如何处理？</h2>
<p>首先要找到是什么原因导致的消息堆积，是Producer太多了，Consumer太少了导致的还是说其他情况，总之先定位问题。</p>
<p>然后看下消息消费速度是否正常，正常的话，可以通过上线更多consumer临时解决消息堆积问题</p>
<h3 id="追问-如果consumer和queue不对等-上线了多台也在短时间内无法消费完堆积的消息怎么办" tabindex="-1"><a class="header-anchor" href="#追问-如果consumer和queue不对等-上线了多台也在短时间内无法消费完堆积的消息怎么办" aria-hidden="true">#</a> 追问：如果Consumer和Queue不对等，上线了多台也在短时间内无法消费完堆积的消息怎么办？</h3>
<ul>
<li>准备一个临时的topic</li>
<li>queue的数量是堆积的几倍</li>
<li>queue分布到多Broker中</li>
<li>上线一台Consumer做消息的搬运工，把原来Topic中的消息挪到新的Topic里，不做业务逻辑处理，只是挪过去</li>
<li>上线N台Consumer同时消费临时Topic中的数据</li>
<li>改bug</li>
<li>恢复原来的Consumer，继续消费之前的Topic</li>
</ul>
<h3 id="追问-堆积时间过长消息超时了" tabindex="-1"><a class="header-anchor" href="#追问-堆积时间过长消息超时了" aria-hidden="true">#</a> 追问：堆积时间过长消息超时了？</h3>
<p>RocketMQ中的消息只会在commitLog被删除的时候才会消失，不会超时。也就是说未被消费的消息不会存在超时删除这情况。</p>
<h3 id="追问-堆积的消息会不会进死信队列" tabindex="-1"><a class="header-anchor" href="#追问-堆积的消息会不会进死信队列" aria-hidden="true">#</a> 追问：堆积的消息会不会进死信队列？</h3>
<p>不会，消息在消费失败后会进入重试队列（%RETRY%+ConsumerGroup），18次（默认18次，网上所有文章都说是16次，无一例外。但是我没搞懂为啥是16次，这不是18个时间吗 ？）才会进入死信队列（%DLQ%+ConsumerGroup）。</p>
<h2 id="_8-rocketmq为什么自研nameserver而不用zk" tabindex="-1"><a class="header-anchor" href="#_8-rocketmq为什么自研nameserver而不用zk" aria-hidden="true">#</a> 8. RocketMQ为什么自研nameserver而不用zk？</h2>
<ol>
<li>RocketMQ只需要一个轻量级的维护元数据信息的组件，为此引入zk增加维护成本还强依赖另一个中间件了。</li>
<li>RocketMQ追求的是AP，而不是CP，也就是需要高可用。
<ul>
<li>zk是CP，因为zk节点间通过zap协议有数据共享，每个节点数据会一致，但是zk集群当挂了一半以上的节点就没法使用了。</li>
<li>nameserver是AP，节点间不通信，这样会导致节点间数据信息会发生短暂的不一致，但每个broker都会定时向所有nameserver上报路由信息和心跳。当某个broker下线了，nameserver也会延时30s才知道，而且不会通知客户端（生产和消费者），只能靠客户端自己来拉，rocketMQ是靠消息重试机制解决这个问题的，所以是最终一致性。但nameserver集群只要有一个节点就可用。https://juejin.cn/post/6844904068771479559</li>
</ul>
</li>
</ol>
</div></template>


