(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{574:function(t,a,s){"use strict";s.r(a);var e=s(29),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),s("p",[t._v("首先需要确认服务端、客户端的配置均没有问题。")]),t._v(" "),s("h2",{attrs:{id:"检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检测"}},[t._v("#")]),t._v(" 检测")]),t._v(" "),s("h3",{attrs:{id:"_1-ping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-ping"}},[t._v("#")]),t._v(" 1. ping")]),t._v(" "),s("p",[t._v("检查物理链路是否抵达：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-tracepath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-tracepath"}},[t._v("#")]),t._v(" 2. tracepath")]),t._v(" "),s("p",[t._v("路由跟踪指令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("tracepath "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-telnet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-telnet"}},[t._v("#")]),t._v(" 3. telnet")]),t._v(" "),s("p",[t._v("检查服务端是否提供服务：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("telnet "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("当 telnet 提示拒绝服务时，存在两种可能性：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("服务未开启，不存在服务；")])]),t._v(" "),s("li",[s("p",[t._v("防火墙拒绝访问：")]),t._v(" "),s("p",[t._v("在 CentOS6 中防火墙是 iptables，在 CentOS7 中是 firewalld")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("systemctl status firewalld\n")])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);