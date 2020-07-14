(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{358:function(t,v,e){"use strict";e.r(v);var a=e(42),i=Object(a.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1-移动端适配的目的："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-移动端适配的目的："}},[t._v("#")]),t._v(" 1.移动端适配的目的：")]),t._v(" "),e("p",[t._v("一般来说，我们在电脑上看到的页面都是比较大的，在我们的电脑上访问是正常的。但是我们如果将一个电脑端的页面直接放到手机端浏览，那么因为改变了访问的设备尺寸，就会出现自己写好的样式开始错乱，给每一个访问者带来并不友好的访问体验。所以，移动端适配的目的其实就是为了让每一个尺寸不同的显示设备能够以尽量友好舒服的方式展示给每一个访问者。")]),t._v(" "),e("h2",{attrs:{id:"_2-视口viewport："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-视口viewport："}},[t._v("#")]),t._v(" 2.视口viewport：")]),t._v(" "),e("p",[t._v("通常viewport是指视窗、视口，浏览器上(也可能是一个app中的webview)用来显示网页的那部分区域。在移动端和pc端视口是不同的，pc端的视口是浏览器窗口区域，而在移动端有三个不同的视口概念：布局视口、视觉视口、理想视口。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("布局视口(layoutviewport):大于实际屏幕，元素的宽度继承于layoutviewport，用于保证网站的外观特性与桌面浏览器一样。layoutviewport到底多宽，每个浏览器不同。iPhone的safari为980px，通过"),e("code",[t._v("document.documentElement.clientWidth")]),t._v("获取")])]),t._v(" "),e("li",[e("p",[t._v("视觉视口(visualport):当前显示在屏幕上的页面，即浏览器可视区域的宽度。")])]),t._v(" "),e("li",[e("p",[t._v("理想窗口(idealviewport):为浏览器定义的可完美适配移动端的理想viewport，固定不变，可以认为是设备视口宽度。比如iphone7为375px,iphone7p为414px。")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F441b43a6-7ebf-4f21-ade8-a98e1e60f479%2F5bbb4d3169605.jpg?table=block&id=f1baca58-9b54-47f9-b5de-3876ff7be964&width=1400&cache=v2",alt:"布局视觉口"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff9764e12-73d5-4322-b2e3-e1c4728fb06d%2F5bbb4d0d57b3d.jpg?table=block&id=64e39a1b-1a9c-4dc2-8b49-6ec040a75615&width=1340&cache=v2",alt:"视觉视口"}})]),t._v(" "),e("h2",{attrs:{id:"设置理想视口："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置理想视口："}},[t._v("#")]),t._v(" 设置理想视口：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(' <meta name="viewport"content="width=device-width,user-scalable=no,initial-scale=1.0,  maximum-scale=1.0,minimum-scale=1.0">\t\n')])])]),e("p",[t._v("加了这行代码，然后页面的宽度就会跟我的设备宽度一致。实际上，它就是设置了理想视口，将布局视口的宽度设置成了理想视口（浏览器/设备屏幕的宽度）。")]),t._v(" "),e("p",[t._v("通过对 meta 标签三个 viewport 的设置，最终使页面完美展示。下面详细的阐释其具体含义:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("含义")]),t._v(" "),e("th",[t._v("取值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("定义视口的宽度，单位为像素")]),t._v(" "),e("td",[t._v("正整数或设备宽度device-width")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("定义视口的高度，单位为像素")]),t._v(" "),e("td",[t._v("正整数或device-height")])]),t._v(" "),e("tr",[e("td",[t._v("initial-scale")]),t._v(" "),e("td",[t._v("定义初始缩放值")]),t._v(" "),e("td",[t._v("整数或小数")])]),t._v(" "),e("tr",[e("td",[t._v("minimum-scale")]),t._v(" "),e("td",[t._v("定义缩小最小比例，它必须小于或等于maximum-scale设置")]),t._v(" "),e("td",[t._v("整数或小数")])]),t._v(" "),e("tr",[e("td",[t._v("maximum-scale")]),t._v(" "),e("td",[t._v("定义放大最大比例，它必须大于或等于minimum-scale设置")]),t._v(" "),e("td",[t._v("整数或小数")])]),t._v(" "),e("tr",[e("td",[t._v("user-scalable")]),t._v(" "),e("td",[t._v("定义是否允许用户手动缩放页面，默认值yes")]),t._v(" "),e("td",[t._v("yes/no")])])])]),t._v(" "),e("p",[t._v("只要 layoutviewport === visualviewport，页面下面不会出现滚动条，默认只是把页面放大或缩小。")]),t._v(" "),e("h1",{attrs:{id:"_4-适配的几种方案："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-适配的几种方案："}},[t._v("#")]),t._v(" 4.适配的几种方案：")]),t._v(" "),e("p",[t._v("（1）css3 媒体查询:通过媒体查询的方式，编写适应不同分辨率设备的的css样式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("  @media screen and (max-width: 320px){\n        ....适配iphone4的css样式\n    }\n    @media screen and (max-width: 375px){\n         ....适配iphone6/7/8的css样式\n    }\n    @media screen and (max-width: 414px){\n}\n")])])]),e("p",[t._v("（2）vh,vw方案：")]),t._v(" "),e("p",[t._v("vh、vw方案即将视觉视口宽度 window.innerWidth和视觉视口高度 window.innerHeight 等分为 100 份。")]),t._v(" "),e("ul",[e("li",[t._v("vw(Viewport's width)：1vw等于视觉视口的1%")]),t._v(" "),e("li",[t._v("vh(Viewport's height) :1vh 为视觉视口高度的1%")]),t._v(" "),e("li",[t._v("vmin : vw 和 vh 中的较小值")]),t._v(" "),e("li",[t._v("vmax : 选取 vw 和 vh 中的较大值")])]),t._v(" "),e("p",[t._v("如果视觉视口为375px，那么1vw = 3.75px，这时UI给定一个元素的宽为75px（设备独立像素），我们只需要将它设置为75 / 3.75 = 20vw。")]),t._v(" "),e("p",[t._v("这里的比例关系我们也不用自己换算，我们可以使用PostCSS的 postcss-px-to-viewport 插件帮我们完成这个过程。写代码时，我们只需要根据UI给的设计图写px单位即可。")]),t._v(" "),e("p",[t._v("当然，没有一种方案是十全十美的，vw同样有一定的缺陷：")]),t._v(" "),e("ul",[e("li",[t._v("px转换成vw不一定能完全整除，因此有一定的像素差。")]),t._v(" "),e("li",[t._v("比如当容器使用vw，margin采用px时，很容易造成整体宽度超过100vw，从而影响布局效果。当然我们也是可以避免的，例如使用padding代替margin，结合calc()函数使用等等...")])]),t._v(" "),e("p",[t._v("（3）适配iphone x：")]),t._v(" "),e("p",[e("code",[t._v("viewport-fit")]),t._v("是专门为了适配iPhoneX而诞生的一个属性，它用于限制网页如何在安全区域内进行展示。")]),t._v(" "),e("p",[t._v("contain: 可视窗口完全包含网页内容")]),t._v(" "),e("p",[t._v("cover：网页内容完全覆盖可视窗口")]),t._v(" "),e("p",[t._v("默认情况下或者设置为auto和contain效果相同。")]),t._v(" "),e("p",[t._v("我们需要将顶部和底部合理的摆放在安全区域内，iOS11新增了两个CSS函数env、constant，用于设定安全区域与边界的距离。\n函数内部可以是四个常量：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("safe-area-inset-left")]),t._v("：安全区域距离左边边界距离")]),t._v(" "),e("li",[e("code",[t._v("safe-area-inset-right")]),t._v("：安全区域距离右边边界距离")]),t._v(" "),e("li",[e("code",[t._v("safe-area-inset-top")]),t._v("：安全区域距离顶部边界距离")]),t._v(" "),e("li",[e("code",[t._v("safe-area-inset-bottom")]),t._v("：安全区域距离底部边界距离")])]),t._v(" "),e("p",[t._v("注意：我们必须指定viweport-fit后才能使用这两个函数：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<meta name="viewport" content="viewport-fit=cover">\n')])])]),e("p",[e("code",[t._v("constant")]),t._v("在"),e("code",[t._v("iOS < 11.2")]),t._v("的版本中生效，"),e("code",[t._v("env")]),t._v("在"),e("code",[t._v("iOS >= 11.2")]),t._v("的版本中生效，这意味着我们往往要同时设置他们，将页面限制在安全区域内：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("body {\n  padding-bottom: constant(safe-area-inset-bottom);\n  padding-bottom: env(safe-area-inset-bottom);\n}\n\n当使用底部固定导航栏时，我们要为他们设置padding值：\n\n{\n  padding-bottom: constant(safe-area-inset-bottom);\n  padding-bottom: env(safe-area-inset-bottom);\n}\n")])])])])}),[],!1,null,null,null);v.default=i.exports}}]);