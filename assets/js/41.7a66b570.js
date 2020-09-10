(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{490:function(a,s,t){"use strict";t.r(s);var n=t(29),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),t("p",[t("code",[a._v("npx")]),a._v(" 是 "),t("code",[a._v("npm v5.2.0")]),a._v("  版本引入的工具，其可以快速体验想要尝试的包而不必执行 "),t("code",[a._v("npm init")]),a._v("、"),t("code",[a._v("npm install")]),a._v("、"),t("code",[a._v("配置 scripts")]),a._v(" 等步骤。")]),a._v(" "),t("p",[a._v("默认情况下，它会去检查包是否存在（"),t("code",[a._v("node_modules/.bin")]),a._v(" 及环境变量 "),t("code",[a._v("$PATH")]),a._v("），如果存在则执行，不存在则临时安装再运行。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看指令的帮助信息")]),a._v("\nnpx -h\n")])])]),t("h3",{attrs:{id:"_1-作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-作用"}},[a._v("#")]),a._v(" 1. 作用")]),a._v(" "),t("ol",[t("li",[a._v("避免与全局包冲突，可以测试新的版本")]),a._v(" "),t("li",[a._v("可直接测试 github 上的模块")])]),a._v(" "),t("h3",{attrs:{id:"_2-参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-参数"}},[a._v("#")]),a._v(" 2. 参数")]),a._v(" "),t("ol",[t("li",[t("code",[a._v("--no-install")]),a._v("：强制使用本地模块，不存在则报错")]),a._v(" "),t("li",[t("code",[a._v("--ignore-existing")]),a._v("：强制使用远程模块")])]),a._v(" "),t("h2",{attrs:{id:"执行包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行包"}},[a._v("#")]),a._v(" 执行包")]),a._v(" "),t("h3",{attrs:{id:"_1-global"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-global"}},[a._v("#")]),a._v(" 1. global")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i mocha -g\nmocha\n")])])]),t("h3",{attrs:{id:"_2-node-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-node-modules"}},[a._v("#")]),a._v(" 2. node_modules")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i mocha -D\n./node_modules/.bin/mocha\n")])])]),t("h3",{attrs:{id:"_3-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-package"}},[a._v("#")]),a._v(" 3. package")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i mocha -D\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置 package.json")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  scripts: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  \t"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"mocha"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 执行 scripts")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v("\n")])])]),t("h3",{attrs:{id:"_4-npx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-npx"}},[a._v("#")]),a._v(" 4. npx")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("npx mocha\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);