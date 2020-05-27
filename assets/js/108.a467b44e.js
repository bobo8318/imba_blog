(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{454:function(s,n,e){"use strict";e.r(n);var a=e(43),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"喵喵movie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#喵喵movie"}},[s._v("#")]),s._v(" 喵喵movie")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("create vue project")]),s._v(" "),e("blockquote",[e("p",[s._v("// 通过vue cli 脚手架初始化项目")]),s._v(" "),e("p",[s._v("vue create vue_project")]),s._v(" "),e("p",[s._v("◉ Babel\n◯ TypeScript\n◯ Progressive Web App (PWA) Support\n◉ Router\n◉ Vuex\n◉ CSS Pre-processors\n❯◯ Linter / Formatter\n◯ Unit Testing\n◯ E2E Testing")]),s._v(" "),e("p",[s._v("❯ Sass/SCSS (with dart-sass)\nSass/SCSS (with node-sass)\nLess\nStylus")]),s._v(" "),e("p",[s._v("Save this as a preset for future projects? (y/N) n")]),s._v(" "),e("p",[s._v("//运行程序")]),s._v(" "),e("p",[s._v("npm run serve")]),s._v(" "),e("p",[s._v("vue create is a Vue CLI 3 only command 使用如下命令升级安装vue cli3")]),s._v(" "),e("p",[s._v("npm uninstall -g vue-cli\nnpm install -g @vue/cli")])])]),s._v(" "),e("li",[e("p",[s._v("vue.config.js配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("module.exports = {\n    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */ \n    /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */\n    publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',\n    /* 输出文件目录：在npm run build时，生成文件的目录名称 */\n    outputDir: 'dist',\n    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */\n    assetsDir: \"assets\",\n    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */\n    productionSourceMap: false,\n    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */\n    filenameHashing: false,\n    /* 代码保存时进行eslint检测 */\n    lintOnSave: true,\n    /* webpack-dev-server 相关配置 */\n    devServer: {\n        /* 自动打开浏览器 */\n        open: true,\n        /* 设置为0.0.0.0则所有的地址均能访问 */\n        host: '0.0.0.0',\n        port: 8066,\n        https: false,\n        hotOnly: false,\n        /* 使用代理 */\n        proxy: {\n            '/api': {\n                /* 目标代理服务器地址 */\n                target: 'http://47.100.47.3/',\n                /* 允许跨域 */\n                changeOrigin: true,\n            },\n        },\n    },\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("git 相关操作")]),s._v(" "),e("blockquote",[e("p",[s._v("git checkout -b createComponents 创建分支并切换到新分支")]),s._v(" "),e("p",[s._v("git checkout createComponents 切换分支")]),s._v(" "),e("p",[s._v("git branch 查看分支")]),s._v(" "),e("p",[s._v("git log 查看操作记录")]),s._v(" "),e("p",[s._v("git merge createComponents  --no-ff 合并分支")]),s._v(" "),e("p",[s._v("git branch -d createComponents  删除分支")]),s._v(" "),e("p",[s._v("//撤销回滚")]),s._v(" "),e("p",[s._v("//git commit之前 未添加到暂存区的撤销(没有git add) 添加进暂存区的撤销(git add后)")]),s._v(" "),e("p",[s._v("git checkout -- filename来撤销修改")]),s._v(" "),e("p",[s._v("git checkout -- . 多个文件")]),s._v(" "),e("p",[s._v("git reset HEAD 从暂存区撤销所有\ngit reset HEAD new_src/app/Http/Controllers/Frontend/KyHome/KyHomeApp.php")]),s._v(" "),e("p",[s._v("//git commit之后")]),s._v(" "),e("p",[s._v("git  revert 2842c8065322085c31fb7b8207b6296047c4ea3")]),s._v(" "),e("p",[s._v("git reset --hard e377f60e28c8b84158 强制将缓存区和工作目录都同步到你指定的提交")]),s._v(" "),e("p",[s._v("git push -f origin master 强制提交")]),s._v(" "),e("p",[s._v("//忽略文件")]),s._v(" "),e("p",[s._v("touch .gitignore ，生成“.gitignore”文件。")]),s._v(" "),e("p",[s._v("bin/: 忽略当前路径下的bin文件夹，该文件夹下的所有内容都会被忽略，不忽略 bin 文件")]),s._v(" "),e("p",[s._v("/bin: 忽略根目录下的bin文件")]),s._v(" "),e("p",[s._v("/*.c: 忽略 cat.c，不忽略 build/cat.c")]),s._v(" "),e("p",[s._v("debug/*.obj: 忽略 debug/io.obj，不忽略 debug/common/io.obj 和 tools/debug/io.obj")]),s._v(" "),e("p",[s._v("**/foo: 忽略/foo, a/foo, a/b/foo等")]),s._v(" "),e("p",[s._v("a/**/b: 忽略a/b, a/x/b, a/x/y/b等")]),s._v(" "),e("p",[s._v("!/bin/run.sh: 不忽略 bin 目录下的 run.sh 文件")]),s._v(" "),e("p",[s._v("*.log: 忽略所有 .log 文件")]),s._v(" "),e("p",[s._v("config.php: 忽略当前路径的 config.php 文件")]),s._v(" "),e("p",[s._v(".gitignore只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。")]),s._v(" "),e("p",[s._v("git rm -r --cached .\ngit add .\ngit commit -m 'update .gitignore'")])])]),s._v(" "),e("li",[e("p",[s._v("router-link")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("css")]),s._v(" "),e("blockquote",[e("p",[s._v(".router-link-active vue-router特有css")])])])])]),s._v(" "),e("li",[e("p",[s._v("城市列表")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("ref ($refs)用法")]),s._v(" "),e("blockquote",[e("p",[s._v("ref 有三种用法：ref 被用来给DOM元素或子组件注册引用信息。引用信息会根据父组件的 $refs 对象进行注册。如果在普通的DOM元素上使用，引用信息就是元素; 如果用在子组件上，引用信息就是组件实例。只要想要在Vue中直接操作DOM元素，就必须用ref属性进行注册")]),s._v(" "),e("p",[s._v("var h2 = this.$refs.city_sort.getElementByTagName('h2')")]),s._v(" "),e("p",[s._v("this.$refs.city_sort.parentNode.ScrollTop = h2[index].offsetTop")])])])])]),s._v(" "),e("li",[e("p",[s._v("全局filter")]),s._v(" "),e("blockquote",[e("p",[s._v('Vue.filter("setWH", (url, arg)=>{')]),s._v(" "),e("p",[s._v("​\treturn url.replace(/w.h/, arg)")]),s._v(" "),e("p",[s._v("})")]),s._v(" "),e("p",[s._v("img :src=\"item.url | setWH('128.80')\"")])])]),s._v(" "),e("li",[e("p",[s._v("axios 多次请求")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const CancelToken = axios.CancelToken;\nlet cancel;\n\naxios.get('/user/12345', {\n  // 在options中直接创建一个cancelToken对象\n  cancelToken: new CancelToken(function executor(c) {\n    cancel = c;\n  })\n});\n\n// 取消上面的请求\ncancel();\n\n\n<script>\nimport axios from 'axios'\nimport qs from 'qs'\n\nexport default {\n    methods: {\n        request(keyword) {\n            var that = this;\n            var CancelToken = axios.CancelToken\n            var source = CancelToken.source()\n              \n            // 取消上一次请求\n            this.cancelRequest();\n            \n            axios.post(url, qs.stringify({kw:keyword}), {\n                headers: {\n                    'Content-Type': 'application/x-www-form-urlencoded',\n                    'Accept': 'application/json'\n                },\n                cancelToken: new axios.CancelToken(function executor(c) {\n                    that.source = c;\n                })\n            }).then((res) => {\n                // 在这里处理得到的数据\n                ...\n            }).catch((err) => {\n                if (axios.isCancel(err)) {\n                    console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message\n                } else {\n                    //handle error\n                    console.log(err);\n                }\n            })\n        },\n        cancelRequest(){\n            if(typeof this.source ==='function'){\n                this.source('终止请求')\n            }\n        },\n    }\n}\n<\/script>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("better_scroll")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("安装")]),s._v(" "),e("blockquote",[e("p",[s._v("cnpm i -S better-scroll")])])]),s._v(" "),e("li",[e("p",[s._v("nexttick: 需要在视图更新之后，基于新的视图进行操作。需要注意的是，在 created 和 mounted 阶段，如果需要操作渲染后的试图，也要使用 nextTick 方法")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("this.$nextTick(() => {\n        this.msg2 = this.$refs.msgDiv.innerHTML\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])])]),s._v(" "),e("li",[e("p",[s._v("Element-ui")]),s._v(" "),e("blockquote",[e("p",[s._v("npm i element-ui -S")])])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("beforeRouteEnter (to, from, next) {\n    next(vm =>{\n      vm.url = KZ.getUrlFromDifferentRoute(to);\n      vm.refer = KZ.getCurrentPageRefer(from);\n    })\n  },\n\nbeforeRouteEnter(to, from, next) {\n    if (from.name === 'feedbackDetail') {\n      sessionStorage.setItem('getInitInfoFlag', 'true');\n      next();\n    } else {\n      sessionStorage.setItem('getInitInfoFlag', 'false');\n      next();\n    }\n  }\n  \n  beforeRouteEnter (to, from, next) {\n    // 在渲染该组件的对应路由被 confirm 前调用\n    // 不能获取组件实例 `this`\n    // 因为当钩子执行前，组件实例还没被创建\n  },\n  beforeRouteUpdate (to, from, next) {\n    // 在当前路由改变，但是该组件被复用时调用\n    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，\n    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。\n    // 可以访问组件实例 `this`\n  },\n  beforeRouteLeave (to, from, next) {\n    // 导航离开该组件的对应路由时调用\n    // 可以访问组件实例 `this`\n  }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);