(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1e3:function(t,a,e){t.exports=e.p+"assets/img/image-20210713224517686.0c7051d4.png"},1001:function(t,a,e){t.exports=e.p+"assets/img/1525620483637.60e5fa18.png"},1002:function(t,a,e){t.exports=e.p+"assets/img/1525620787090.d8822cdf.png"},1003:function(t,a,e){t.exports=e.p+"assets/img/1544361421671.07ef505a.png"},1004:function(t,a,e){t.exports=e.p+"assets/img/1525622652849.8d1b54b3.png"},1005:function(t,a,e){t.exports=e.p+"assets/img/1525622699666.08de5bce.png"},1006:function(t,a,e){t.exports=e.p+"assets/img/1525622754316.e773db07.png"},1007:function(t,a,e){t.exports=e.p+"assets/img/image-20210713224724673.a3414a08.png"},1008:function(t,a,e){t.exports=e.p+"assets/img/image-20210713225653000.4c64b5c6.png"},1542:function(t,a,e){"use strict";e.r(a);var s=e(1),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("上一节中，我们添加了@LoadBalanced注解，即可实现负载均衡功能，这是什么原理呢？")])]),t._v(" "),a("h2",{attrs:{id:"_1-负载均衡原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-负载均衡原理"}},[t._v("#")]),t._v(" 1.负载均衡原理")]),t._v(" "),a("p",[t._v("SpringCloud底层其实是利用了一个名为Ribbon的组件，来实现负载均衡功能的。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(1e3),alt:"image-20210713224517686"}})]),t._v(" "),a("blockquote",[a("p",[t._v("那么我们发出的请求明明是 http://userservice/user/1，怎么变成了http://localhost:8081的呢？")])]),t._v(" "),a("h2",{attrs:{id:"_2-源码跟踪"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-源码跟踪"}},[t._v("#")]),t._v(" 2.源码跟踪")]),t._v(" "),a("p",[t._v("为什么我们只输入了service名称就可以访问了呢？之前还要获取ip和端口。")]),t._v(" "),a("p",[t._v("显然有人帮我们根据service名称，获取到了服务实例的ip和端口。它就是"),a("code",[t._v("LoadBalancerInterceptor")]),t._v("，这个类会在对RestTemplate的请求进行拦截，然后从Eureka根据服务id获取服务列表，随后利用负载均衡算法得到真实的服务地址信息，替换服务id。")]),t._v(" "),a("p",[t._v("我们进行源码跟踪：")]),t._v(" "),a("h3",{attrs:{id:"_1-loadbalancerintercepor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-loadbalancerintercepor"}},[t._v("#")]),t._v(" 1）LoadBalancerIntercepor")]),t._v(" "),a("p",[a("img",{attrs:{src:e(1001),alt:"1525620483637"}})]),t._v(" "),a("p",[t._v("可以看到这里的intercept方法，拦截了用户的HttpRequest请求，然后做了几件事：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("request.getURI()")]),t._v("：获取请求uri，本例中就是 http://user-service/user/8")]),t._v(" "),a("li",[a("code",[t._v("originalUri.getHost()")]),t._v("：获取uri路径的主机名，其实就是服务id，"),a("code",[t._v("user-service")])]),t._v(" "),a("li",[a("code",[t._v("this.loadBalancer.execute()")]),t._v("：处理服务id，和用户请求。")])]),t._v(" "),a("p",[t._v("这里的"),a("code",[t._v("this.loadBalancer")]),t._v("是"),a("code",[t._v("LoadBalancerClient")]),t._v("类型，我们继续跟入。")]),t._v(" "),a("h3",{attrs:{id:"_2-loadbalancerclient"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-loadbalancerclient"}},[t._v("#")]),t._v(" 2）LoadBalancerClient")]),t._v(" "),a("p",[t._v("继续跟入execute方法：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(1002),alt:"1525620787090"}})]),t._v(" "),a("p",[t._v("代码是这样的：")]),t._v(" "),a("ul",[a("li",[t._v("getLoadBalancer(serviceId)：根据服务id获取ILoadBalancer，而ILoadBalancer会拿着服务id去eureka中获取服务列表并保存起来。")]),t._v(" "),a("li",[t._v("getServer(loadBalancer)：利用内置的负载均衡算法，从服务列表中选择一个。本例中，可以看到获取了8082端口的服务")])]),t._v(" "),a("p",[t._v("放行后，再次访问并跟踪，发现获取的是8081：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(388),alt:"1525620835911"}})]),t._v(" "),a("p",[t._v("果然实现了负载均衡。")]),t._v(" "),a("h3",{attrs:{id:"_3-负载均衡策略irule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-负载均衡策略irule"}},[t._v("#")]),t._v(" 3）负载均衡策略IRule")]),t._v(" "),a("p",[t._v("在刚才的代码中，可以看到获取服务使通过一个"),a("code",[t._v("getServer")]),t._v("方法来做负载均衡:")]),t._v(" "),a("p",[a("img",{attrs:{src:e(388),alt:"1525620835911"}})]),t._v(" "),a("p",[t._v("我们继续跟入：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(1003),alt:"1544361421671"}})]),t._v(" "),a("p",[t._v("继续跟踪源码chooseServer方法，发现这么一段代码：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(1004),alt:"1525622652849"}})]),t._v(" "),a("p",[t._v("我们看看这个rule是谁：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(1005),alt:"1525622699666"}})]),t._v(" "),a("p",[t._v("这里的rule默认值是一个"),a("code",[t._v("RoundRobinRule")]),t._v("，看类的介绍：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(1006),alt:"1525622754316"}})]),t._v(" "),a("p",[t._v("这不就是轮询的意思嘛。")]),t._v(" "),a("p",[t._v("到这里，整个负载均衡的流程我们就清楚了。")]),t._v(" "),a("h3",{attrs:{id:"_4-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-总结"}},[t._v("#")]),t._v(" 4）总结")]),t._v(" "),a("p",[t._v("SpringCloudRibbon的底层采用了一个拦截器，拦截了RestTemplate发出的请求，对地址做了修改。用一幅图来总结一下：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(1007),alt:"image-20210713224724673"}})]),t._v(" "),a("p",[t._v("基本流程如下：")]),t._v(" "),a("ul",[a("li",[t._v("拦截我们的RestTemplate请求http://userservice/user/1")]),t._v(" "),a("li",[t._v("RibbonLoadBalancerClient会从请求url中获取服务名称，也就是user-service")]),t._v(" "),a("li",[t._v("DynamicServerListLoadBalancer根据user-service到eureka拉取服务列表")]),t._v(" "),a("li",[t._v("eureka返回列表，localhost:8081、localhost:8082")]),t._v(" "),a("li",[t._v("IRule利用内置负载均衡规则，从列表中选择一个，例如localhost:8081")]),t._v(" "),a("li",[t._v("RibbonLoadBalancerClient修改请求地址，用localhost:8081替代userservice，得到http://localhost:8081/user/1，发起真实请求")])]),t._v(" "),a("h2",{attrs:{id:"_3-负载均衡策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-负载均衡策略"}},[t._v("#")]),t._v(" 3.负载均衡策略")]),t._v(" "),a("h3",{attrs:{id:"_3-1-负载均衡策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-负载均衡策略"}},[t._v("#")]),t._v(" 3.1.负载均衡策略")]),t._v(" "),a("p",[t._v("负载均衡的规则都定义在IRule接口中，而IRule有很多不同的实现类：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(1008),alt:"image-20210713225653000"}})]),t._v(" "),a("p",[t._v("不同规则的含义如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("内置负载均衡规则类")])]),t._v(" "),a("th",[a("strong",[t._v("规则描述")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("RoundRobinRule")]),t._v(" "),a("td",[t._v("简单轮询服务列表来选择服务器。它是Ribbon默认的负载均衡规则。")])]),t._v(" "),a("tr",[a("td",[t._v("AvailabilityFilteringRule")]),t._v(" "),a("td",[t._v("对以下两种服务器进行忽略：   （1）在默认情况下，这台服务器如果3次连接失败，这台服务器就会被设置为“短路”状态。短路状态将持续30秒，如果再次连接失败，短路的持续时间就会几何级地增加。  （2）并发数过高的服务器。如果一个服务器的并发连接数过高，配置了AvailabilityFilteringRule规则的客户端也会将其忽略。并发连接数的上限，可以由客户端的<clientName>.<clientConfigNameSpace>.ActiveConnectionsLimit属性进行配置。")])]),t._v(" "),a("tr",[a("td",[t._v("WeightedResponseTimeRule")]),t._v(" "),a("td",[t._v("为每一个服务器赋予一个权重值。服务器响应时间越长，这个服务器的权重就越小。这个规则会随机选择服务器，这个权重值会影响服务器的选择。")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("ZoneAvoidanceRule")])]),t._v(" "),a("td",[t._v("以区域可用的服务器为基础进行服务器的选择。使用Zone对服务器进行分类，这个Zone可以理解为一个机房、一个机架等。而后再对Zone内的多个服务做轮询。")])]),t._v(" "),a("tr",[a("td",[t._v("BestAvailableRule")]),t._v(" "),a("td",[t._v("忽略那些短路的服务器，并选择并发数较低的服务器。")])]),t._v(" "),a("tr",[a("td",[t._v("RandomRule")]),t._v(" "),a("td",[t._v("随机选择一个可用的服务器。")])]),t._v(" "),a("tr",[a("td",[t._v("RetryRule")]),t._v(" "),a("td",[t._v("重试机制的选择逻辑")])])])]),t._v(" "),a("p",[t._v("默认的实现就是ZoneAvoidanceRule，是一种轮询方案")]),t._v(" "),a("h3",{attrs:{id:"_3-2-自定义负载均衡策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-自定义负载均衡策略"}},[t._v("#")]),t._v(" 3.2.自定义负载均衡策略")]),t._v(" "),a("p",[t._v("通过定义IRule实现可以修改负载均衡规则，有两种方式：")]),t._v(" "),a("ol",[a("li",[t._v("代码方式：在order-service中的OrderApplication类中，定义一个新的IRule：")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IRule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomRule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RandomRule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("配置文件方式：在order-service的application.yml文件中，添加新的配置也可以修改规则：")])]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("userservice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给某个微服务配置负载均衡规则，这里是userservice服务")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ribbon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("NFLoadBalancerRuleClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.netflix.loadbalancer.RandomRule "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 负载均衡规则 ")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("blockquote",[a("p",[a("strong",[t._v("注意")]),t._v("，一般用默认的负载均衡规则，不做修改。")])]),t._v(" "),a("h2",{attrs:{id:"_4-饥饿加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-饥饿加载"}},[t._v("#")]),t._v(" 4.饥饿加载")]),t._v(" "),a("p",[t._v("Ribbon默认是采用懒加载，即第一次访问时才会去创建LoadBalanceClient，请求时间会很长。")]),t._v(" "),a("p",[t._v("而饥饿加载则会在项目启动时创建，降低第一次访问的耗时，通过下面配置开启饥饿加载：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ribbon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eager-load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启饥饿加载")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clients")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定饥饿加载得服务名称。（因为他是java.util.List<String> ，所以他不是一个，可以采用下面这种方式）")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" userservice\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports},388:function(t,a,e){t.exports=e.p+"assets/img/1525620835911.f36ce91f.png"}}]);