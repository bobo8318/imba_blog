(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{455:function(v,_,e){"use strict";e.r(_);var i=e(43),t=Object(i.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"hypev使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hypev使用"}},[v._v("#")]),v._v(" HypeV使用")]),v._v(" "),e("h3",{attrs:{id:"hyperv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hyperv"}},[v._v("#")]),v._v(" HyperV")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("介绍")]),v._v(" "),e("p",[e("em",[v._v("Hyper-V")]),v._v("是微软的一款虚拟化产品，是微软第一个采用类似Vmware和Citrix开源Xen一样的基于"),e("em",[v._v("hyperv")]),v._v("isor的技术")])]),v._v(" "),e("li",[e("p",[v._v("安装")]),v._v(" "),e("ul",[e("li",[v._v("win10,win2008,2012以上系统，通过添加windows组件进行添加")]),v._v(" "),e("li",[v._v("win7只有hyperv管理器可以安装， 我们要先从微软的官网上下载Windows 7远程服务器管理工具，这个工具简称RSAT，是一个Windows更新补丁包")])])]),v._v(" "),e("li",[e("p",[v._v("使用")]),v._v(" "),e("ul",[e("li",[v._v("创建虚拟机可以在创建时选在需要安装的镜像文件就可以安装了")]),v._v(" "),e("li",[v._v("可以在媒体dvd驱动器中选择插入磁盘")])])]),v._v(" "),e("li",[e("p",[v._v("网络设置")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("桥接")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("新建虚拟交换机，选择外部，选择访问外网的网卡，勾选”允许管理操作系统共享此网络适配器“")])]),v._v(" "),e("li",[e("p",[v._v("设置虚拟机，网络 在虚拟交换机中选择刚才新建的虚拟交换机")])])])]),v._v(" "),e("li",[e("p",[v._v("nat：就是提供一个类似路由器的功能")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("新建虚拟交换机，选择内部")])]),v._v(" "),e("li",[e("p",[v._v("设置网络共享，点击连网的物理网卡，共享，在家庭网络连接中选择虚拟交换机，把两个允许也都勾上")])]),v._v(" "),e("li",[e("p",[v._v("ip地址设置：操作完后虚拟交换机的ip地址为192.168.137.1 子网掩码255.255.255.0，虚拟机色设置ip把这个设置成网关就可以了。虚拟机访问外网别忘了设置dns")]),v._v(" "),e("blockquote",[e("p",[v._v("阿里： 223.5.5.5  223.6.6.6")])])])])])]),v._v(" "),e("blockquote",[e("p",[v._v("谷歌： 8.8.8.8")])]),v._v(" "),e("ul",[e("li",[e("p",[v._v("设置端口映射：完成上述步骤后主机和虚拟机可以相互访问了，但是外部计算机无法访问虚拟机内容，需要做个端口映射：")]),v._v(" "),e("blockquote",[e("p",[v._v("netsh interface portproxy add v4tov4 listenport=8081 listenaddress=192.168.123.236 connectaddress=192.168.137.6  connectport=80")])])])])]),v._v(" "),e("li",[e("p",[v._v("常见问题")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("windows无网卡驱动")]),v._v(" "),e("p",[v._v("在媒体中选择插入系统集成服务光盘文件（2012可以直接选择插入系统集成服务，win10没有）文件位置在 C:\\Windows\\System32\\vmguest.iso win没有 可以上网下一个，运行安装完后重启就可以了。")]),v._v(" "),e("blockquote",[e("p",[v._v("https://pan.baidu.com/s/1T5E72bFlM4YbMTTrOZCtcQ 提取码：pjsd")])])]),v._v(" "),e("li",[e("p",[v._v("ctrl+shift+delete冲突")]),v._v(" "),e("p",[v._v('点击连接虚拟机，”文件“下行第一个图标，或“操作"中第一个可以向虚拟机发送 ctrl+shift+delete')])]),v._v(" "),e("li",[e("p",[v._v("远程桌面鼠标无法捕获")]),v._v(" "),e("p",[v._v("点击连接虚拟机，”操作“，选取【插入集成服务安装盘】。会出现下列的安装，记住一定要等系统安装完成后，进入系统后，再点击这个，不然会安装失败。  等安装完成后，提示重启， 点击【是】重启后，即可使用鼠标。")])]),v._v(" "),e("li",[e("p",[v._v("win7 hyperv管理器无法管理2012的hyperv 还是老老实实用远程桌面吧")])]),v._v(" "),e("li",[e("p",[v._v("加载本地磁盘或u盘")]),v._v(" "),e("ul",[e("li",[v._v("可以把文件打包成ISO 然后当成光盘")]),v._v(" "),e("li",[v._v("加载vhd：我的电脑 管理 磁盘管理 附加VHD 使用完后 右键点击解除附加VHD")])])]),v._v(" "),e("li",[e("p",[v._v("ctrl+alt+左方向键 退出虚拟机鼠标捕获")])]),v._v(" "),e("li",[e("p",[v._v("vdi 转 vdh")]),v._v(" "),e("blockquote",[e("p",[v._v("VBoxManage clonehd D:\\resource\\Mac OSX Yosemite.vdi D:\\resource\\MacOSXYosemite.vhd --format vhd")])])])])])])])}),[],!1,null,null,null);_.default=t.exports}}]);