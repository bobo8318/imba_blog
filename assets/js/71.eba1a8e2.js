(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{417:function(s,n,a){"use strict";a.r(n);var t=a(43),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[s._v("#")]),s._v(" 前端")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("jquery")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("使用 jquery 获取一组或者单个 checkbox 的选中状态的值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var id_array=new Array();  \n$(\'input[name="id"]:checked\').each(function(){  \n    id_array.push($(this).val());//向数组中添加元素  \n});  \nvar idstr=id_array.join(\',\');//将数组元素连接起来以构建一个字符串  \nalert(idstr);  \n//判断单个是否选中\nif($("#id").is(":checked")){//选中  \n    alert($("#id").val());//打印选中的值  \n} \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("js")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("数字判断")]),s._v(" "),a("blockquote",[a("p",[s._v("Number()// 含有非数字就返回NaN")]),s._v(" "),a("p",[s._v("ParseInt()//从开头开始匹配数字 直到遇到非数字")])])]),s._v(" "),a("li",[a("p",[s._v("0 1 互换")]),s._v(" "),a("blockquote",[a("p",[s._v("1^0 = 1")]),s._v(" "),a("p",[s._v("1^1 = 0")]),s._v(" "),a("p",[s._v("function reverse(num){")]),s._v(" "),a("p",[s._v("​\treturn 1^num")]),s._v(" "),a("p",[s._v("}")])])]),s._v(" "),a("li",[a("p",[s._v("字符串替换")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var str = "wordwordwordword";\nvar strNew = str.replace("word","Excel");//只替换一个\nstr.replace(/word/g,"Excel") ;// /g表示全局替换\nalert(strNew); \n\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("js身份证号提取生日")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('getBirthdayFromIdCard : function(idCard) {  \n        var birthday = "";  \n        if(idCard != null && idCard != ""){  \n            if(idCard.length == 15){  \n                birthday = "19"+idCard.substr(6,6);  \n            } else if(idCard.length == 18){  \n                birthday = idCard.substr(6,8);  \n            }  \n          \n            birthday = birthday.replace(/(.{4})(.{2})/,"$1-$2-");  \n        }  \n          \n        return birthday;  \n      },\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("循环")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("for(var j=1;j<9;j++){\n    for(var i=0;i<j+1;i++){\n    document.write(\"*\");\n    }\n    document.write(\"<br>\");\n}\n\nvar arr = ['a', 'b', 'c', 'd'];\n\nfor (let a in arr) {\n\tconsole.log(a); // 0 1 2 3\n}\n\nfor (let a of arr) {\n\tconsole.log(a); // a b c d\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("获取浏览器相关信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("在IE中：\ndocument.body.clientWidth ==> BODY对象宽度\ndocument.body.clientHeight ==> BODY对象高度\ndocument.documentElement.clientWidth ==> 可见区域宽度\ndocument.documentElement.clientHeight ==> 可见区域高度\ndocument.documentElement.scrollTop =>窗口滚动条滚动高度\n在FireFox中：\ndocument.body.clientWidth ==> BODY对象宽度\ndocument.body.clientHeight ==> BODY对象高度\ndocument.documentElement.clientWidth ==> 可见区域宽度\ndocument.documentElement.clientHeight ==> 可见区域高度\ndocument.documentElement.scrollTop =>窗口滚动条滚动高度\n\n在chrome中：\ndocument.body.clientWidth ==> BODY对象宽度\ndocument.body.clientHeight ==> BODY对象高度\ndocument.documentElement.clientWidth ==> 可见区域宽度\ndocument.documentElement.clientHeight ==> 可见区域高度\ndocument.body.scrollTop =>窗口滚动条滚动高度\n\n在Opera中：\ndocument.body.clientWidth ==> 可见区域宽度\ndocument.body.clientHeight ==> 可见区域高度\ndocument.documentElement.clientWidth ==> 页面对象宽度（即BODY对象宽度加上Margin宽）\ndocument.documentElement.clientHeight ==> 页面对象高度（即BODY对象高度加上Margin高\n\n滚动到顶部 window.scrollTo(0,0)\n滚动到尾部 window.scrollTo(0,document.body.clientHeight)\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("URLSearchParams")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var paramsString = "q=URLUtils.searchParams&topic=api"\nvar searchParams = new URLSearchParams(paramsString);\n\nfor (let p of searchParams) {\n  console.log(p);\n}\n\nsearchParams.has("topic") === true; // true\nsearchParams.get("topic") === "api"; // true\nsearchParams.getAll("topic"); // ["api"]\nsearchParams.get("foo") === null; // true\nsearchParams.append("topic", "webdev");\nsearchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"\nsearchParams.set("topic", "More webdev");\nsearchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"\nsearchParams.delete("topic");\nsearchParams.toString(); // "q=URLUtils.searchParams"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("LocalStorage")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 设置\nlocalStorage.setItem('myCat', 'Tom');\n\n// 获取\nlet cat = localStorage.getItem('myCat');\n\n// 移除\nlocalStorage.removeItem('myCat');\n\n// 移除所有\nlocalStorage.clear();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("监听变化")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("window.addEventListener('storage', () => {\n  ...\n});\n\nwindow.onstorage = () => {\n  ...\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("数组相关内容")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("some：some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。")])]),s._v(" "),a("li",[a("p",[s._v("如果有一个元素满足条件，则表达式返回"),a("em",[s._v("true")]),s._v(" , 剩余的元素不会再执行检测。")]),s._v(" "),a("blockquote",[a("p",[s._v("array.some(function(currentValue,index,arr),thisValue)")]),s._v(" "),a("p",[s._v("function： 必选项，对数组中的每个值执行的回调函数。\nthisValue： 可选项，function中使用的this值。")]),s._v(" "),a("p",[s._v("let Arr = [15, 20, 25, 30]\nlet result = Arr.some((item,index,arr) => {\nreturn item > 20\n})\nconsole.log(result) //输出true\nconsole.log(Arr) //输出 [15, 20, 25, 30]")])])])])]),s._v(" "),a("li",[a("p",[s._v("webpack")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("安装")]),s._v(" "),a("blockquote",[a("p",[s._v("//全局安装\nnpm install -g webpack")]),s._v(" "),a("p",[s._v("//安装到你的项目目录")]),s._v(" "),a("p",[s._v("npm init // 初始化 生成package.json 文件")]),s._v(" "),a("p",[s._v("npm install --save-dev webpack //本地安装")])])]),s._v(" "),a("li",[a("p",[s._v("使用")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导出模块 ")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" greet "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  greet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("textContent "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hi there and greetings!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" greet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//es6")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引用模块")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" greeter "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./Greeter.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//es6")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./greeter'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("打包文件")]),s._v(" "),a("blockquote",[a("p",[s._v("//webpack非全局安装的情况\nnode_modules/.bin/webpack app/main.js public/bundle.js")])]),s._v(" "),a("p",[s._v("快捷打包：在package.json  中设置script")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改的是这里，JSON文件不支持注释，引用时请清除")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n运行 npm run start 进行打包\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])]),s._v(" "),a("li",[a("p",[s._v("配置 webpack.config.js")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('module.exports = {\n  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件\n  output: {\n    path: __dirname + "/public",//打包后的文件存放的地方\n    filename: "bundle.js"//打包后输出文件的文件名\n  }\n}\n\n//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。\n\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("css")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("网站变灰")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("* 特殊日子 全站灰色 */\n.site-gray, .site-gray *{\n\tfilter: gray !important;\n\tfilter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);\n\tfilter: grayscale(100%);\n\t-webkit-filter: grayscale(100%);\n\t-moz-filter: grayscale(100%);\n\t-ms-filter: grayscale(100%);\n\t-o-filter: grayscale(100%); \n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])])])])])}),[],!1,null,null,null);n.default=e.exports}}]);