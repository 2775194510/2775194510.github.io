(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1177:function(s,a,e){"use strict";e.r(a);var t=e(1),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-卸载旧版本docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-卸载旧版本docker"}},[s._v("#")]),s._v(" 1：卸载旧版本docker")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum remove "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-client "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-client-latest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-common "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-latest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-latest-logrotate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-logrotate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-selinux "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-engine-selinux "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-engine "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-ce\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"_2-防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-防火墙"}},[s._v("#")]),s._v(" 2：防火墙")]),s._v(" "),a("p",[s._v("使用以下命令 确认服务器开放了 15672 和 5672 端口\n!!!重要 最好先将需要开放的端口号配置好，因为在docker容器运行的情况下去重启防火墙似乎会导致一些问题（未证实）")]),s._v(" "),a("div",{staticClass:"language-linux line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("开启防火墙 systemctl start firewalld\n查看防火墙状态 systemctl status firewalld\n查看开放的端口 firewall-cmd --zone=public --list-ports\n开放指定端口号 firewall-cmd --zone=public --add-port=8080/tcp --permanent\n关闭指定端口号 firewall-cmd --zone=public --remove=8080/tcp --permanent\n重启防火墙（开放端口号后重启才能生效） firewall-cmd --reload\n永久关闭防火墙 systemctl disable firewalld\n暂时关闭防火墙(服务器重启后防火墙又会开启) systemctl stop firewalld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_3-安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装docker"}},[s._v("#")]),s._v(" 3：安装docker")]),s._v(" "),a("h3",{attrs:{id:"_1-安装yum工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装yum工具"}},[s._v("#")]),s._v(" 1）安装yum工具")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" yum-utils "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n           device-mapper-persistent-data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n           lvm2 --skip-broken\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_2-更新本地镜像源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-更新本地镜像源"}},[s._v("#")]),s._v(" 2）更新本地镜像源")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置docker镜像源")]),s._v("\nyum-config-manager "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --add-repo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n    \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/download.docker.com/mirrors.aliyun.com\\/docker-ce/g'")]),s._v(" /etc/yum.repos.d/docker-ce.repo\n\nyum makecache fast\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_3-安装docker-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装docker-2"}},[s._v("#")]),s._v(" 3）安装docker")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" docker-ce\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("docker-ce为社区免费版本。稍等片刻，docker即可安装成功。")]),s._v(" "),a("h3",{attrs:{id:"_4-启动docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动docker"}},[s._v("#")]),s._v(" 4）启动docker")]),s._v(" "),a("p",[s._v("Docker应用需要用到各种端口，逐一去修改防火墙设置。非常麻烦，因此建议大家直接关闭防火墙！")]),s._v(" "),a("p",[s._v("启动docker前，一定要关闭防火墙后！！")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭")]),s._v("\nsystemctl stop firewalld\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止开机启动防火墙")]),s._v("\nsystemctl disable firewalld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("启动")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl start "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动docker服务")]),s._v("\n\nsystemctl stop "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止docker服务")]),s._v("\n\nsystemctl restart "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启docker服务")]),s._v("\n\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker.service  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机自启")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_5-查看版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-查看版本"}},[s._v("#")]),s._v(" 5）查看版本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4-安装dockercompose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装dockercompose"}},[s._v("#")]),s._v(" 4：安装DockerCompose")]),s._v(" "),a("h3",{attrs:{id:"_1-命令下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令下载"}},[s._v("#")]),s._v(" 1）命令下载")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" https://github.com/docker/compose/releases/download/1.23.1/docker-compose-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /usr/local/bin/docker-compose\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-修改文件权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改文件权限"}},[s._v("#")]),s._v(" 2）修改文件权限")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-base自动补全命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-base自动补全命令"}},[s._v("#")]),s._v(" 3）base自动补全命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 补全命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" https://raw.githubusercontent.com/docker/compose/1.29.1/contrib/completion/bash/docker-compose "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/bash_completion.d/docker-compose\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果这里出现错误，需要修改自己的hosts文件：")]),s._v(" "),a("blockquote",[a("p",[s._v('echo "199.232.68.133 raw.githubusercontent.com" >> /etc/hosts')])])])}),[],!1,null,null,null);a.default=n.exports}}]);