(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{439:function(s,n,t){"use strict";t.r(n);var e=t(43),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"shiro"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shiro"}},[s._v("#")]),s._v(" shiro")]),s._v(" "),t("h3",{attrs:{id:"核心组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心组件"}},[s._v("#")]),s._v(" 核心组件")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Subject:当前操作主体")])]),s._v(" "),t("li",[t("p",[s._v("SecurityManager:安全管理器")])]),s._v(" "),t("li",[t("p",[s._v("Realm:应用与数据安全的桥梁")])])]),s._v(" "),t("h3",{attrs:{id:"spring-boot-引入shiro"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-引入shiro"}},[s._v("#")]),s._v(" spring boot 引入shiro")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("依赖")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<dependency>\n    <groupId>org.apache.shiro</groupId>\n    <artifactId>shiro-spring</artifactId>\n    <version>1.4.0</version>\n</dependency>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("配置类")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('@Configuration\npublic class ShiroConfig{\n  \n\t@Bean\n\tpublic ShiroFilterFactoryBean shiroFiler(@Qualifier("securityManager") SecurityManager securityManager){\n\t\tShiroFilterFactoryBean filter = new ShiroFilterFactoryBean()\n\t\tfilter.setSecurityManager(securityManager)\n\t\t/**\n\t\t* shiro 内置过滤器\n\t\t*\tanon:无需认证\n\t\t\tauthc:必须认证才能访问\n\t\t\tuser:使用remember me 可以访问\n\t\t\tperms:　该资源必须得到资源权限才可以访问\n\t\t\trole:该资源必须得到角色\n\t\t**/\n\t\t\n\t\tMap<String, String> filterMap = new LinkedHashMap<String, String>();\n\t\t\n\t\t//filterMap.put("/*", "authc");\n\t\tfilterMap.put("/add", "authc");\n\t\tfilterMap.put("/update", "authc");\n\t\t//filterMap.put("/login", "anon");\n\t\tfilter.setLoginUrl("/login")\n\t\tfilter.setFilterChainDefinitionMap(filterMap)\n\t\t// 授权过滤器 拦截后默认会自动跳转到未授权页面401\n\t\tfilterMap.put("/add", "perms[user:add]");\n\t\t// 设置未授权页面\n\t\tfilter.setUnauthorizedUrl("/unAuth")\n\t\treturn filter;\n\t}\n\t\n\t@Bean(name="")\n\tpublic SecurityManager securityManager(@Qualifier("userRealm") UserRealm realm){\n\t\tDefatultWebSecurityManager manager = new DefatultWebSecurityManager();\n\t\tmanager.setRealm(realm)\n\t\treturn manager;\n\t}\n\t\n\t@Bean(name="")\n\tpublic UserRealm getUserRealm(){\n\t\treturn new UserRealm();\n\t}\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("UserRealm.class")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('public class UserRealm extends AuthorizingRealm{\n\t\n\t@AutoWired\n\tprivate UserService userService\n\n\t//认证逻辑\n\t@Overwrite\n\tprotected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken arg0){\n\t\t// \n\t\t\n\t\tUsernamePasswordToken token = (UsernamePasswordToken)arg0;\n\t\t\n\t\tUserPo user = userService.getUser(token.getUsername())\n\t\t\n\t\tif(!token.getUsername().equals(name))(//　用户不存在\n\t\t\treturn null;//底层会抛出UnKnownAccountException\n\t\t)\n\t\treturn new SimpleAuthenticationInfo("", token.getPassword(), "");\n\t}\n\t//授权逻辑\n\t@Overwrite\n\tprotected AuthenticationInfo doGetAuthenticationInfo(PrincipalCollection pc){\n\t\tString username = (String) pc.getPrimaryPrincipal();\n\t\tUser user = new User();\n\t\tuser.serUsername(username);\n\t\tSimpleAuthenticationInfo info = new SimpleAuthenticationInfo();\n\t\tinfo.addStringPermission("delete");\n\t\tList roleList = userService.getRole(user);\n\t\tif(roleList != null){\n\t\t\tfor(String role : roleList){\n\t\t\t\tinfo.addRole(role);\n\t\t\t}\n\t\t\treturn info;\n\t\t}\n\t\treturn null;\n\t}\n\t\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("LoginController")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('@RequestMapping("/login")\npublic String doLogin(String username, String password){\n\t//　获取subject类\n\tSubject subject = SecurityUtils.getSubject();\n\t// 封装用户数据\n\tUsernamePasswordToken token = new UsernamePasswordToken(username, password);\n\ttry{\n\t\t// 执行登陆逻辑\n\t\tsubject.login(token);\n\t}catch(){\n\t\t\n\t}\n\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("controller添加")]),s._v(" "),t("blockquote",[t("p",[s._v('@RequiresPermissions("user:add")')]),s._v(" "),t("p",[s._v("//编程方式")]),s._v(" "),t("p",[s._v("Subject subject = SecurityUtils.getSubject();")]),s._v(" "),t("p",[s._v('if(subject.hasRole("admin")){')]),s._v(" "),t("p",[s._v("​\t//有权限")]),s._v(" "),t("p",[s._v("}")])])]),s._v(" "),t("li",[t("p",[s._v("thymeleaf & shiro")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("impoty thymeleaf")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("com.github.theborakompanioni\nthtmeleaf-extras-shiro\n2.0.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("ShiroConfig 添加　ShiroDialect")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("@Bean\npublic ShiroDialect getShiroDialect(){\n\treturn new ShiroDialect();\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("使用")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<div　shiro:hasPermission="user:add">添加</div>\n<div　shiro:hasPermission name"add">添加</div>\n<div　shiro:hasAnyRoles name="user">添加</div>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])])])])])])])}),[],!1,null,null,null);n.default=a.exports}}]);