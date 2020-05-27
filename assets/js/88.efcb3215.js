(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{434:function(t,a,s){"use strict";s.r(a);var n=s(43),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[t._v("#")]),t._v(" Tomcat")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E8%BF%9E%E6%8E%A5%E5%99%A8connector%E4%BC%98%E5%8C%96"}},[t._v("连接器（Connector）优化")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E7%A6%81%E7%94%A8ajp%E8%BF%9E%E6%8E%A5%E5%99%A8"}},[t._v("禁用AJP连接器")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#http%E5%A4%B4%E7%9A%84%E9%AA%8C%E8%AF%81"}},[t._v("http头的验证")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#tomcat%E7%83%AD%E9%83%A8%E7%BD%B2"}},[t._v("Tomcat热部署")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#403accessdenied"}},[t._v("403AccessDenied")])])]),t._v(" "),s("h2",{attrs:{id:"执行器（线程池）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行器（线程池）"}},[t._v("#")]),t._v(" 执行器（线程池）")]),t._v(" "),s("blockquote",[s("p",[t._v("默认的tomcat没有启用线程池,在tomcat中每一个用户请求都是一个线程，所以可以使用线程池提高性能。\n这里前台其实有一个调度线程，然后调度线程会放入线程池内，然后到到一定的时候线程池的任务变成工作线程。")])]),t._v(" "),s("ul",[s("li",[t._v("找到以下位置代码")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/tomcat%E5%BC%80%E5%90%AF%E7%BA%BF%E7%A8%8B%E6%B1%A0.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("更改为以下代码")])]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Executor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tomcatThreadPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("namePrefix")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("catalina-exec-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("maxThreads")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("minSpareThreads")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("maxQueueSize")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("prestartminSpareThreads")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ul",[s("li",[t._v("参数说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("threadPriority")]),t._v(" "),s("td",[t._v("优先级")])]),t._v(" "),s("tr",[s("td",[t._v("daemon")]),t._v(" "),s("td",[t._v("守护进程")])]),t._v(" "),s("tr",[s("td",[t._v("namePrefix")]),t._v(" "),s("td",[t._v("名称前缀")])]),t._v(" "),s("tr",[s("td",[t._v("maxThreads")]),t._v(" "),s("td",[t._v("最大线程数")])]),t._v(" "),s("tr",[s("td",[t._v("minSpareThreads")]),t._v(" "),s("td",[t._v("最小活跃线程数")])]),t._v(" "),s("tr",[s("td",[t._v("maxIdleTime")]),t._v(" "),s("td",[t._v("空闲线程等待时间")])]),t._v(" "),s("tr",[s("td",[t._v("maxQueueSize")]),t._v(" "),s("td",[t._v("最大的等待队里数，超过则请求拒绝")])]),t._v(" "),s("tr",[s("td",[t._v("prestartminSpareThreads")]),t._v(" "),s("td",[t._v("是否在启动时就生成minSpareThreads个线程")])]),t._v(" "),s("tr",[s("td",[t._v("threadRenewalDelay")]),t._v(" "),s("td",[t._v("重建线程的时间间隔")])])])]),t._v(" "),s("ul",[s("li",[t._v("指定线程池")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/Tomcat%E5%90%AF%E7%94%A8%E7%BA%BF%E7%A8%8B%E6%B1%A0.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"连接器（connector）优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接器（connector）优化"}},[t._v("#")]),t._v(" 连接器（Connector）优化")]),t._v(" "),s("blockquote",[s("p",[t._v("Connector是连接器，负责接收客户的请求，以及向客户端回送响应的消息。所以 Connector的优化是重要部分。\n默认情况下 Tomcat只支持200线程访问，超过这个数量的连接将被等待甚至超时放弃，所以我们需要提高这方面的处理能力。")])]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("port")]),t._v(" 代表服务接口；")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("protocol")]),t._v(" 代表协议类型；")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("connectionTimeout")]),t._v(" 代表连接超时时间，单位为毫秒；")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("redirectPort")]),t._v(" 代表安全通信（https）转发端口，一般配置成443。")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/Tomcat%E8%BF%9E%E6%8E%A5%E5%99%A8%E4%BC%98%E5%8C%96.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("常用的参数如下")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("maxPostSize")]),t._v(" "),s("td",[t._v("参数形式处理的最大长度，默认值为2097152（2兆字节）。上传提交的时候可以用的")])]),t._v(" "),s("tr",[s("td",[t._v("acceptCount")]),t._v(" "),s("td",[t._v("请求的最大队列长度，当队列满时收到的任何请求将被拒绝")])]),t._v(" "),s("tr",[s("td",[t._v("acceptorThreadCount")]),t._v(" "),s("td",[t._v("用于接受连接的线程的数量")])]),t._v(" "),s("tr",[s("td",[t._v("disableUploadTimeout")]),t._v(" "),s("td",[t._v("此标志允许servlet容器在数据上传时使用不同的连接超时，通常较长。如果没有指定，该属性被设置为true，禁用上传超时。")])]),t._v(" "),s("tr",[s("td",[t._v("connectionUploadTimeout")]),t._v(" "),s("td",[t._v("上传数据过程中，指定的以毫秒为单位超时时间。只有在设置disableUploadTimeout为false有效。")])]),t._v(" "),s("tr",[s("td",[t._v("connectionTimeout")]),t._v(" "),s("td",[t._v("在将提交的请求URI行呈现之后，连接器将等待接受连接的毫秒数。使用值-1表示没有超时（即无限）。默认值是60000（60秒），但请注意，Tomcat的标准server.xml中，设置为20000（即20秒）。")])]),t._v(" "),s("tr",[s("td",[t._v("maxConnections")]),t._v(" "),s("td",[t._v("服务器接受并处理的最大连接数")])]),t._v(" "),s("tr",[s("td",[t._v("SSLEnabled")]),t._v(" "),s("td",[t._v("在连接器上使用此属性来启用SSL加密传输")])]),t._v(" "),s("tr",[s("td",[t._v("port")]),t._v(" "),s("td",[t._v("TCP端口号，连接器利用该端口号将创建一个服务器套接字，并等待传入的连接。")])]),t._v(" "),s("tr",[s("td",[t._v("protocol")]),t._v(" "),s("td",[t._v("设置协议来处理传入流量。默认值是 HTTP/1.1，将使用自动切换机制来选择阻塞的基于Java的连接器或APR /native 为基础的连接器。可用以下值：org.apache.coyote.http11.Http11Protocol -阻塞式的Java连接器;org.apache.coyote.http11.Http11NioProtocol -不阻塞Java连接器;org.apache.coyote.http11.Http11AprProtocol的 -的APR / native 连接器")])]),t._v(" "),s("tr",[s("td",[t._v("maxThreads")]),t._v(" "),s("td",[t._v("最多同时处理的连接数，Tomcat使用线程来处理接收的每个请求。这个值表示Tomcat可创建的最大的线程数。如果没有指定，该属性被设置为200。如果使用了execute将忽略此连接器的该属性，连接器将使用execute，而不是一个内部线程池来处理请求。")])]),t._v(" "),s("tr",[s("td",[t._v("minSpareThreads")]),t._v(" "),s("td",[t._v("始终保持运行最小线程数。如果没有指定，则默认为10。")])]),t._v(" "),s("tr",[s("td",[t._v("maxHttpHeaderSize")]),t._v(" "),s("td",[t._v("请求和响应的HTTP头的（以字节为单位的）最大尺寸。如果没有指定，该属性被设置为8192（8 KB）。")])]),t._v(" "),s("tr",[s("td",[t._v("tcpNoDelay")]),t._v(" "),s("td",[t._v("如果设置为true，TCP_NO_DELAY选项将被设置在服务器上的套接字上，在大多数情况下，这样可以提高性能。默认设置为true。")])]),t._v(" "),s("tr",[s("td",[t._v("compression")]),t._v(" "),s("td",[t._v("通常会在ngnix里面配置压缩开启压缩GZIP，当值是“off ”（禁用压缩），“on ”（允许压缩，这会导致文本数据被压缩），“force ”（强制在所有的情况下压缩），或者一个整数值（这是相当于为“on”，但指定了输出之前被压缩的数据最小量）。如果不知道内容长度但被设置为“on”或更积极的压缩，输出的数据也将被压缩。如果没有指定，该属性被设置为“off”。")])]),t._v(" "),s("tr",[s("td",[t._v("compressionMinSize")]),t._v(" "),s("td",[t._v("如果压缩被设置为“on”，那么该属性可以用于指定在输出之前被压缩的数据的最小量。如果未指定，此属性默认为“2048”。")])]),t._v(" "),s("tr",[s("td",[t._v("redirectPort")]),t._v(" "),s("td",[t._v("如果该连接器支持非SSL请求，并且接收到的请求为满足安全约束需要SSL传输， Catalina 将自动将请求重定向到指定的端口号。")])]),t._v(" "),s("tr",[s("td",[t._v("enableLookups")]),t._v(" "),s("td",[t._v("设置为false时跳过DNS查找，并返回字符串情势的IP地址（从而提高性能）。默认景象下，禁用DNS查找。")])]),t._v(" "),s("tr",[s("td",[t._v("URIEncoding")]),t._v(" "),s("td",[t._v("指定使用的字符编码，来解码URI字符。如果没有指定，ISO-8859-1将被使用。")])]),t._v(" "),s("tr",[s("td",[t._v("executor")]),t._v(" "),s("td",[t._v("指向Executor元素的引用。")])])])]),t._v(" "),s("ul",[s("li",[t._v("最好实例")])]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- maxPostSize 参数形式处理的最大长度，默认为2097152（2兆字节）,上传提交的时候可以用的,这里设置1GB\n            acceptCount 请求的最大队列长度，当队列满时收到的任何请求将被拒绝\n     acceptorThreadCount 用于接受连接的线程的数量\n     disableUploadTimeout 禁用上传超时\n     maxConnections 服务器接受并处理的最大连接数\n     SSLEnabled 在连接器上使用此属性来启用SSL加密传输 --\x3e")]),t._v("\n     \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Connector")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("executor")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tomcatThreadPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("connectionTimeout")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("20000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8080"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("protocol")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.apache.coyote.http11.Http11NioProtocol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("redirectPort")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8443"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("maxHttpHeaderSize")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8192"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("enableLookups")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("maxPostSize")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1048576000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("URIEncoding")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("acceptCount")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("acceptorTreadCount")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("disableUploadTimeout")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("maxConnections")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("SSLEnabled")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])]),s("h2",{attrs:{id:"禁用ajp连接器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁用ajp连接器"}},[t._v("#")]),t._v(" 禁用AJP连接器")]),t._v(" "),s("ul",[s("li",[t._v("如果是使用"),s("code",[t._v("Nginx")]),t._v("+"),s("code",[t._v("tomcat")]),t._v("的架构，所以用不着"),s("code",[t._v("AJP")]),t._v("协议，所以把"),s("code",[t._v("AJP")]),t._v("连接器禁用。")])]),t._v(" "),s("blockquote",[s("p",[t._v("AJPv13协议是面向包的。WEB服务器和Servlet容器通过TCP连接来交互；为了节省SOCKET创建的昂贵代价，\nWEB服务器会尝试维护一个永久TCP连接到servlet容器，并且在多个请求和响应周期过程会重用连接。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/Tomcat%E7%A6%81%E7%94%A8AJP.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"http头的验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http头的验证"}},[t._v("#")]),t._v(" http头的验证")]),t._v(" "),s("blockquote",[s("p",[t._v("Tomcat在 "),s("code",[t._v("7.0.73")]),t._v("、"),s("code",[t._v("8.0.39")]),t._v("、以及"),s("code",[t._v("8.5.7")]),t._v("版本后，添加了对于"),s("code",[t._v("http")]),t._v("头的验证。")])]),t._v(" "),s("ul",[s("li",[t._v("在"),s("code",[t._v("conf/catalina.properties")]),t._v("文件的末尾添加或者修改最后一行")])]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tomcat.util.http.parser.HttpParser.requestTargetAllow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("|{}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"tomcat热部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat热部署"}},[t._v("#")]),t._v(" Tomcat热部署")]),t._v(" "),s("ul",[s("li",[t._v("在"),s("code",[t._v("/conf/context.xml")]),t._v("的"),s("code",[t._v("Context")]),t._v("标签中配置会使全局生效")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://tomcat.apache.org/tomcat-9.0-doc/config/context.html#Defining_a_context",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/Tomcat%E9%85%8D%E7%BD%AE%E5%85%A8%E5%B1%80%E8%87%AA%E5%8A%A8%E5%8A%A0%E8%BD%BD.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("在"),s("code",[t._v("/conf/server.xml")]),t._v("的"),s("code",[t._v("Host")]),t._v("标签中配置")])]),t._v(" "),s("blockquote",[s("p",[t._v("替换"),s("code",[t._v("WEB-INF/lib")]),t._v("目录中的"),s("code",[t._v("jar")]),t._v("文件或"),s("code",[t._v("WEB-INF/classes")]),t._v("目录中的"),s("code",[t._v("class")]),t._v("文件时，\n"),s("code",[t._v('reloadable="true"')]),t._v("会让修改生效（但代价不小），该选项适合调试。")])]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Context")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("docBase")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("reloadable")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("在"),s("code",[t._v("webapps")]),t._v("目录中增加新的目录、"),s("code",[t._v("war")]),t._v("文件、修改"),s("code",[t._v("WEB-INF/web.xml")]),t._v("，"),s("code",[t._v('autoDeploy="true"')]),t._v("会新建或重新部署应用，该选项方便部署。")])]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Context")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("docBase")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autoDeploy")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"_403accessdenied"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_403accessdenied"}},[t._v("#")]),t._v(" 403AccessDenied")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("tomcat8")]),t._v("以上管理页面提示"),s("code",[t._v("403 Access Denied")]),t._v("问题")])]),t._v(" "),s("ul",[s("li",[t._v("修改"),s("code",[t._v("conf/tomcat-users.xml")])])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" conf/tomcat-users.xml\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("按"),s("code",[t._v("shift+g")]),t._v("跳到末尾,在"),s("code",[t._v("</tomcat-users>")]),t._v("前添加")])]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("role")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rolename")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("manager-gui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("role")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rolename")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("manager-script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("role")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rolename")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("admin-gui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("role")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rolename")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("admin-script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tomcat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("密码"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("roles")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("manager-gui,manager-script,admin-gui,admin-script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ul",[s("li",[t._v("修改"),s("code",[t._v("context.xml")])])]),t._v(" "),s("blockquote",[s("p",[t._v("打开"),s("code",[t._v("webapps")]),t._v("下的"),s("code",[t._v("host-manager")]),t._v("和"),s("code",[t._v("manager")]),t._v("，在"),s("code",[t._v("META-INF")]),t._v("里面都有"),s("code",[t._v("context.xml")])])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" webapps/manager/META-INF/context.xml\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" webapps/host-manager/META-INF/context.xml\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("blockquote",[s("p",[t._v("修改"),s("code",[t._v('<Context antiResourceLocking="false" privileged="true" >')]),t._v("节点")])]),t._v(" "),s("blockquote",[s("p",[t._v("这段代码的作用是限制来访IP的，"),s("code",[t._v("127.d+.d+.d+|::1|0:0:0:0:0:0:0:1")]),t._v("是正则表达式，表示"),s("code",[t._v("IPv4")]),t._v("和"),s("code",[t._v("IPv6")]),t._v("的本机环回地址")])]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Valve")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.apache.catalina.valves.RemoteAddrValve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("127\\.\\d+\\.\\d+\\.\\d+|::1|0:0:0:0:0:0:0:1|\\d+\\.\\d+\\.\\d+\\.\\d+"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);