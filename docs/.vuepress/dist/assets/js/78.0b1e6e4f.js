(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1209:function(s,a,e){s.exports=e.p+"assets/img/image17.82b0414a.png"},1210:function(s,a,e){s.exports=e.p+"assets/img/image18.9e9dcc00.png"},1211:function(s,a,e){s.exports=e.p+"assets/img/image19.d93dac86.png"},1633:function(s,a,e){"use strict";e.r(a);var t=e(1),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("独立模式是独立运行的，不依赖任何外部的资源管理平台；当然独立也是有代价的：如果 "),a("em",[a("strong",[s._v("资源不足，或者出现故障，没有自动扩展或重分配资源的保证，必须手动处理")])]),s._v(" 。所以独立模式一般 "),a("em",[a("strong",[s._v("只用在开发测试或作业非常少的场景下")])]),s._v(" 。")]),s._v(" "),a("h2",{attrs:{id:"_1-会话模式部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-会话模式部署"}},[s._v("#")]),s._v(" 1：会话模式部署")]),s._v(" "),a("p",[s._v("提前启动集群，并通过Web页面客户端提交任务（可以多个任务，但是集群资源固定）。\n"),a("img",{attrs:{src:e(1209),alt:"Alt text"}})]),s._v(" "),a("h2",{attrs:{id:"_2-单作业模式部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-单作业模式部署"}},[s._v("#")]),s._v(" 2：单作业模式部署")]),s._v(" "),a("p",[a("code",[s._v("Flink")]),s._v(" 的 "),a("code",[s._v("Standalone")]),s._v(" 集群并不支持单作业模式部署。因为单作业模式需要借助一些资源管理平台。")]),s._v(" "),a("h2",{attrs:{id:"_3-应用模式部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-应用模式部署"}},[s._v("#")]),s._v(" 3：应用模式部署")]),s._v(" "),a("p",[s._v("应用模式下不会提前创建集群，所以不能调用 "),a("code",[s._v("start-cluster.sh")]),s._v(" 脚本。我们可以使用同样在bin目录下的 "),a("code",[s._v("standalone-job.sh")]),s._v(" 来创建一个 "),a("code",[s._v("JobManager")]),s._v(" 。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(1210),alt:"Alt text"}})]),s._v(" "),a("p",[s._v("具体步骤如下：")]),s._v(" "),a("ul",[a("li",[s._v("（0）环境准备。在 "),a("code",[s._v("hadoop102")]),s._v(" 中执行以下命令启动 "),a("code",[s._v("netcat")]),s._v(" 。")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-lk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7777")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("（1）进入到 "),a("code",[s._v("Flink")]),s._v(" 的安装路径下，将应用程序的jar包放到lib/目录下。")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" FlinkTutorial-1.0-SNAPSHOT.jar lib/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("（2）执行以下命令，启动 "),a("code",[s._v("JobManager")]),s._v(" 。")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("bin/standalone-job.sh start --job-classname com.atguigu.wc.SocketStreamWordCount\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这里我们直接指定作业入口类，脚本会到lib目录扫描所有的jar包。")]),s._v(" "),a("ul",[a("li",[s._v("（3）同样是使用bin目录下的脚本，启动 "),a("code",[s._v("TaskManager")]),s._v(" 。")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("bin/taskmanager.sh start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("在 "),a("code",[s._v("hadoop102")]),s._v(" 上模拟发送单词数据。")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-lk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7777")]),s._v("  \nhello\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("（5）在 "),a("code",[s._v("hadoop102:8081")]),s._v(" 地址中观察输出数据")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(1211),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("（6）如果希望停掉集群，同样可以使用脚本，命令如下。")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("bin/taskmanager.sh stop\nbin/standalone-job.sh stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);