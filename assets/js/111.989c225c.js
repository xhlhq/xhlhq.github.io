(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{564:function(s,t,a){"use strict";a.r(t);var n=a(29),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("当然，你首先需要"),a("a",{attrs:{href:"/os/centos/how-to-install-centos-on-virtualbox"}},[s._v("安装 CentOS")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"更新源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新源"}},[s._v("#")]),s._v(" 更新源")]),s._v(" "),a("p",[s._v("CentOS 安装完毕，首先应该修改源，并更新到最新的系统。此处选用阿里云的源，"),a("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("清华源"),a("OutboundLink")],1),s._v("，"),a("a",{attrs:{href:"http://mirrors.ustc.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("中科大源"),a("OutboundLink")],1),s._v("也可。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装工具 wget 或者 curl")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -y\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载阿里云源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-7.repo\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清理、生成缓存")]),s._v("\nyum clean cache\nyum makecache\n")])])]),a("h2",{attrs:{id:"更新系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新系统"}},[s._v("#")]),s._v(" 更新系统")]),s._v(" "),a("p",[s._v("更换源之后就可以使用国内的镜像了，否则下载速度太慢。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum update -y\n")])])]),a("h2",{attrs:{id:"常用包组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用包组"}},[s._v("#")]),s._v(" 常用包组")]),s._v(" "),a("p",[s._v("一般在安装系统时需要安装的软件包组。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groups")]),s._v(" mark convert\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有包组名称")]),s._v("\nyum grouplist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果缺乏部分包组，指定该包组")]),s._v("\nyum groupinstall "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cinnamon"')]),s._v(" -y\n")])])]),a("h2",{attrs:{id:"常用工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用工具"}},[s._v("#")]),s._v(" 常用工具")]),s._v(" "),a("p",[s._v("更新完系统后还需要一些常用的工具，使用 Ubuntu Server 的时候同样需要安装，只不过指令换为 "),a("code",[s._v("apt install")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" tree nmap dos2unix lrzsz "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" tcpdump "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("htop")]),s._v(" iftop iotop sysstat nethogs psmisc net-tools bash-completion vim-enhanced -y\n")])])]),a("h2",{attrs:{id:"常用指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[s._v("#")]),s._v(" 常用指令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 ip")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看服务的端口（例如：ssh）")]),s._v("\nss -lntup "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" sshd "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或 netstat -lntup")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看进程（例如：ssh）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否安装了对应的软件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa openssh openssl\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# openssh 提供 SSH 服务，openssl 为 SSH 提供连接加密")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);