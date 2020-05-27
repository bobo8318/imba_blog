(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{405:function(s,a,t){"use strict";t.r(a);var n=t(43),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"shell脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell脚本"}},[s._v("#")]),s._v(" Shell脚本")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#flag"}},[s._v("flag")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E6%B8%85%E7%90%86%E5%86%85%E5%AD%98"}},[s._v("清理内存")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E6%B8%85%E7%90%86%E6%97%A5%E5%BF%97"}},[s._v("清理日志")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#linux%E4%B9%8B%E9%97%B4%E4%BC%A0%E8%BE%93%E6%96%87%E4%BB%B6"}},[s._v("Linux之间传输文件")])])]),s._v(" "),t("h2",{attrs:{id:"flag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flag"}},[s._v("#")]),s._v(" flag")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("Shell")]),s._v("脚本（"),t("code",[s._v("shell script")]),s._v("），是一种为"),t("code",[s._v("Shell")]),s._v("编写的脚本程序。\n"),t("code",[s._v("Shell")]),s._v("脚本文件的名称可以任意，但为了避免被误以为是普通文件，建议将"),t("code",[s._v(".sh")]),s._v("后缀加上，以表示是一个脚本文件。")])]),s._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://www.runoob.com/linux/linux-shell.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Shell 教程"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/3782970dec75",target:"_blank",rel:"noopener noreferrer"}},[s._v("Shell命令脚本初步认识，Shell脚本入门"),t("OutboundLink")],1)])])]),s._v(" "),t("h2",{attrs:{id:"清理内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清理内存"}},[s._v("#")]),s._v(" 清理内存")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取到的内存配置信息若为0的话，则表示开启了缓存机制")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/sys/vm/drop_caches\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# drop_caches是让系统清理内存页的缓存，从而得到更多的可用内存")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 释放网页缓存(To free pagecache)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/vm/drop_caches\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 释放目录项和索引(To free dentries and inodes)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/vm/drop_caches\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 释放网页缓存，目录项和索引（To free pagecache, dentries and inodes）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/vm/drop_caches\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清理/var/cache/yum的headers")]),s._v("\nyum clean headers\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清理/var/cache/yum下的软件包")]),s._v("\nyum clean packages\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清理软件源")]),s._v("\nyum clean metadata\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h2",{attrs:{id:"清理日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清理日志"}},[s._v("#")]),s._v(" 清理日志")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除定时任务记录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/cron\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除ftp记录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/xferlog\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除数据库日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50'")]),s._v(" /var/log/mariadb/mariadb.log\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除sshd信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/secure\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/firewalld\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/httpd/access_log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/httpd/ssl_access_log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/httpd/ssl_error_log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/httpd/ssl_request_log\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除系统开机发生的错误")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/messages\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/tuned/tuned.log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/hawkey.log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/yum.log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/dnf.log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/dnf.rpm.log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/ntp.log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,50d'")]),s._v(" /var/log/audit/audit.log\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除历史执行命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.bash_history\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除系统登录成功的记录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/log/wtmp\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除系统登录失败的记录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/log/btmp\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除最近登录信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/log/lastlog\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -fr /var/log/*\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])]),t("h2",{attrs:{id:"linux之间传输文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux之间传输文件"}},[s._v("#")]),s._v(" Linux之间传输文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程IP")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("des_ip")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("des_port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("des_user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("des_pass")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程文件或文件夹路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("des_path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/www/wwwroot/file\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地文件或文件夹路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("local_path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/www/wwwroot/file\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检索expect是否安装")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("is_expect")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果没有安装")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$is_expect")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n# 设置拷贝的时间，超时时间-1为永不超时\nset timeout -1\n\n# 本地路径在前，远程在后，是从本地上传到远端\n# spawn scp -P '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${des_port}")]),s._v(" -p -r "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${local_path}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${des_user}")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${des_ip}")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${des_path}")]),s._v("\n# 远程在前，本地路径在后，的是从远端下载到本地\nspawn scp -P "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${des_port}")]),s._v(" -p -r "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${des_user}")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${des_ip}")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${des_path}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${local_path}")]),s._v("\n\nexpect {\n  "),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("*yes/no*"),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" {send "),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("yes"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("; exp_continue}\n  "),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("*password*"),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" {send "),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${des_pass}")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(';}\n}\n\n"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);