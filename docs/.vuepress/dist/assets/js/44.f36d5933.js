(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1113:function(s,t,n){"use strict";n.r(t);var a=n(1),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Python 提供了两个级别访问的网络服务。：")]),s._v(" "),t("ul",[t("li",[s._v("低级别的网络服务支持基本的 "),t("code",[s._v("Socket")]),s._v("，它提供了标准的 "),t("code",[s._v("BSD Sockets API")]),s._v("，可以访问底层操作系统 "),t("code",[s._v("Socket")]),s._v(" 接口的全部方法。")]),s._v(" "),t("li",[s._v("高级别的网络服务模块 "),t("code",[s._v("SocketServer")]),s._v("， 它提供了服务器中心类，可以简化网络服务器的开发。")])]),s._v(" "),t("h2",{attrs:{id:"_1-什么是-socket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-socket"}},[s._v("#")]),s._v(" 1：什么是 Socket?")]),s._v(" "),t("p",[t("code",[s._v("Socket")]),s._v(' 又称"套接字"，应用程序通常通过"套接字"向网络发出请求或者应答网络请求，使主机间或者一台计算机上的进程间可以通讯。')]),s._v(" "),t("h2",{attrs:{id:"_2-socket-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-socket-函数"}},[s._v("#")]),s._v(" 2：socket()函数")]),s._v(" "),t("p",[s._v("Python 中，我们用 "),t("code",[s._v("socket（）")]),s._v("函数来创建套接字，语法格式如下：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("family"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" proto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("参数")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("family")]),s._v(": 套接字家族可以使 "),t("code",[s._v("AF_UNIX")]),s._v(" 或者 "),t("code",[s._v("AF_INET")])]),s._v(" "),t("li",[t("code",[s._v("type")]),s._v(": 套接字类型可以根据是面向连接的还是非连接分为 "),t("code",[s._v("SOCK_STREAM")]),s._v(" 或 "),t("code",[s._v("SOCK_DGRAM")])]),s._v(" "),t("li",[t("code",[s._v("protocol")]),s._v(": 一般不填默认为0.")])]),s._v(" "),t("h2",{attrs:{id:"_3-socket-对象-内建-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-socket-对象-内建-方法"}},[s._v("#")]),s._v(" 3：Socket 对象(内建)方法")]),s._v(" "),t("p",[t("img",{attrs:{src:n(466),alt:"Alt text"}}),s._v(" "),t("img",{attrs:{src:n(467),alt:"Alt text"}})]),s._v(" "),t("h2",{attrs:{id:"_4-简单实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-简单实例"}},[s._v("#")]),s._v(" 4：简单实例")]),s._v(" "),t("h3",{attrs:{id:"_1-服务端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-服务端"}},[s._v("#")]),s._v(" 1）服务端")]),s._v(" "),t("p",[s._v("我们使用 "),t("code",[s._v("socket")]),s._v(" 模块的 "),t("code",[s._v("socket")]),s._v(" 函数来创建一个 "),t("code",[s._v("socket")]),s._v(" 对象。"),t("code",[s._v("socket")]),s._v(" 对象可以通过调用其他函数来设置一个 "),t("code",[s._v("socket")]),s._v(" 服务。")]),s._v(" "),t("p",[s._v("现在我们可以通过调用 "),t("code",[s._v("bind(hostname, port)")]),s._v(" 函数来指定服务的 "),t("code",[s._v("port(端口)")]),s._v("。")]),s._v(" "),t("p",[s._v("接着，我们调用 "),t("code",[s._v("socket")]),s._v(" 对象的 "),t("code",[s._v("accept")]),s._v(" 方法。该方法等待客户端的连接，并返回 "),t("code",[s._v("connection")]),s._v(" 对象，表示已连接到客户端。")]),s._v(" "),t("p",[s._v("完整代码如下：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/python3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件名：server.py")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入 socket、sys 模块")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" socket\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sys\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 socket 对象")]),s._v("\nserversocket "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AF_INET"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SOCK_STREAM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取本地主机名")]),s._v("\nhost "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gethostname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nport "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定端口")]),s._v("\nserversocket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置最大连接数，超过后排队")]),s._v("\nserversocket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("listen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立客户端连接")]),s._v("\n    clientsocket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("addr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" serversocket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("accept"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      \n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"连接地址: %s"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("addr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    msg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'欢迎访问W3Cschool教程！'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\r\\n"')]),s._v("\n    clientsocket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    clientsocket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br")])]),t("h3",{attrs:{id:"_2-客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-客户端"}},[s._v("#")]),s._v(" 2）客户端")]),s._v(" "),t("p",[s._v("接下来我们写一个简单的客户端实例连接到以上创建的服务。端口号为 "),t("code",[s._v("12345")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("socket.connect(hosname, port )")]),s._v(" 方法打开一个 "),t("code",[s._v("TCP")]),s._v(" 连接到主机为 "),t("code",[s._v("hostname")]),s._v(" 端口为 "),t("code",[s._v("port")]),s._v(" 的服务商。连接后我们就可以从服务端后期数据，记住，操作完成后需要关闭连接。")]),s._v(" "),t("p",[s._v("完整代码如下：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/python3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件名：client.py")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入 socket、sys 模块")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" socket\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sys\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 socket 对象")]),s._v("\ns "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AF_INET"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SOCK_STREAM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取本地主机名")]),s._v("\nhost "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gethostname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置端口好")]),s._v("\nport "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接服务，指定主机和端口")]),s._v("\ns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("connect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 接收小于 1024 字节的数据")]),s._v("\nmsg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\ns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("p",[s._v("现在我们打开连个终端，第一个终端执行 "),t("code",[s._v("server.py")]),s._v(" 文件：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("$ python3 server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("第二个终端执行 "),t("code",[s._v("client.py")]),s._v(" 文件：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("$ python3 client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py \n欢迎访问W3Cschool教程！\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这是我们再打开第一个终端，就会看到有以下信息输出：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("连接地址： "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.0.118'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33397")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_5-internet-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-internet-模块"}},[s._v("#")]),s._v(" 5：Internet 模块")]),s._v(" "),t("p",[t("img",{attrs:{src:n(468),alt:"Alt text"}})])])}),[],!1,null,null,null);t.default=e.exports},466:function(s,t,n){s.exports=n.p+"assets/img/image1.ca813834.png"},467:function(s,t,n){s.exports=n.p+"assets/img/image2.9ad27f6c.png"},468:function(s,t,n){s.exports=n.p+"assets/img/image3.0075c0a8.png"}}]);