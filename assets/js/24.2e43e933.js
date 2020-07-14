(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{370:function(t,e,v){"use strict";v.r(e);var a=v(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"watch和computed区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#watch和computed区别"}},[t._v("#")]),t._v(" watch和computed区别")]),t._v(" "),v("p",[t._v("watch 是监听属性,computed 是计算属性。watch 没有缓存,computed 有缓存。")]),t._v(" "),v("h2",{attrs:{id:"你对mvvm的理解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#你对mvvm的理解"}},[t._v("#")]),t._v(" 你对MVVM的理解")]),t._v(" "),v("p",[t._v("MVVM 模式，顾名思义即 Model-View-ViewModel 模式。它萌芽于2005年微软推出的基于 Windows 的用户界面框架 WPF ，前端最早的 MVVM 框架 knockout 在2010年发布。")]),t._v(" "),v("p",[t._v("Model 层: 对应数据层的域模型，它主要做域模型的同步。通过 Ajax/fetch 等 API 完成客户端和服务端业务 Model 的同步。在层间关系里，它主要用于抽象出 ViewModel 中视图的 Model。")]),t._v(" "),v("p",[t._v("View 层:作为视图模板存在，在 MVVM 里，整个 View 是一个动态模板。除了定义结构、布局外，它展示的是 ViewModel 层的数据和状态。View 层不负责处理状态，View 层做的是 数据绑定的声明、 指令的声明、 事件绑定的声明。")]),t._v(" "),v("h3",{attrs:{id:"你对vue声明周期的理解？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#你对vue声明周期的理解？"}},[t._v("#")]),t._v(" 你对Vue声明周期的理解？")]),t._v(" "),v("p",[t._v("Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载Dom -> 渲染、更新 -> 渲染、卸载等一系列过程，我们称这是Vue的生命周期。")]),t._v(" "),v("h3",{attrs:{id:"各个生命周期的作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#各个生命周期的作用"}},[t._v("#")]),t._v(" 各个生命周期的作用")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("生命周期")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("beforeCreate")]),t._v(" "),v("td",[t._v("组件实例被创建之初，组件的属性生效之前")])]),t._v(" "),v("tr",[v("td",[t._v("created")]),t._v(" "),v("td",[t._v("组件实例已经完全创建，属性也绑定，但真实dom还没有生成，"),v("code",[t._v("$el")]),t._v("还不可用")])]),t._v(" "),v("tr",[v("td",[t._v("beforeMount")]),t._v(" "),v("td",[t._v("在挂载开始之前被调用：相关的 render 函数首次被调用")])]),t._v(" "),v("tr",[v("td",[t._v("mounted")]),t._v(" "),v("td",[t._v("el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子")])]),t._v(" "),v("tr",[v("td",[t._v("beforeUpdate")]),t._v(" "),v("td",[t._v("组件数据更新之前调用，发生在虚拟 DOM 打补丁之前")])]),t._v(" "),v("tr",[v("td",[t._v("update")]),t._v(" "),v("td",[t._v("组件数据更新之后")])]),t._v(" "),v("tr",[v("td",[t._v("activited")]),t._v(" "),v("td",[t._v("keep-alive专属，组件被激活时调用")])]),t._v(" "),v("tr",[v("td",[t._v("deadctivated")]),t._v(" "),v("td",[t._v("keep-alive专属，组件被销毁时调用")])]),t._v(" "),v("tr",[v("td",[t._v("beforeDestory")]),t._v(" "),v("td",[t._v("组件销毁前调用")])]),t._v(" "),v("tr",[v("td",[t._v("destoryed")]),t._v(" "),v("td",[t._v("组件销毁后调用")])])])]),t._v(" "),v("h3",{attrs:{id:"生命周期示意图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生命周期示意图"}},[t._v("#")]),t._v(" 生命周期示意图")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/232282/1594565126784-6738e5b4-081e-46a7-a0cd-e04aed1197bf.png?x-oss-process=image%2Fresize%2Cw_1500",alt:"image.png"}})]),t._v(" "),v("h2",{attrs:{id:"异步请求适合在哪个生命周期调用？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异步请求适合在哪个生命周期调用？"}},[t._v("#")]),t._v(" 异步请求适合在哪个生命周期调用？")]),t._v(" "),v("p",[t._v("官方实例的异步请求是在mounted生命周期中调用的，而实际上也可以在created生命周期中调用。")]),t._v(" "),v("h2",{attrs:{id:"vue组件如何通信？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue组件如何通信？"}},[t._v("#")]),t._v(" Vue组件如何通信？")]),t._v(" "),v("p",[t._v("Vue组件通信的方法如下:")]),t._v(" "),v("ul",[v("li",[t._v("props/$emit+v-on: 通过props将数据自上而下传递，而通过$emit和v-on来向上传递信息。")]),t._v(" "),v("li",[t._v("EventBus: 通过EventBus进行信息的发布与订阅")]),t._v(" "),v("li",[t._v("vuex: 是全局数据管理库，可以通过vuex管理全局的数据流")])]),t._v(" "),v("h2",{attrs:{id:"vuex是什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vuex是什么？"}},[t._v("#")]),t._v(" Vuex是什么？")]),t._v(" "),v("p",[t._v("Vuex是一个专门为Vue.js应用程序开发的状态管理模式。")]),t._v(" "),v("h2",{attrs:{id:"vue双向绑定，vue的数据响应式是什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue双向绑定，vue的数据响应式是什么？"}},[t._v("#")]),t._v(" Vue双向绑定，Vue的数据响应式是什么？")]),t._v(" "),v("p",[t._v("响应式系统简述:")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("任何一个 Vue Component 都有一个与之对应的 Watcher 实例。")])]),t._v(" "),v("li",[v("p",[t._v("Vue 的 data 上的属性会被添加 getter 和 setter 属性。")])]),t._v(" "),v("li",[v("p",[t._v("当 Vue Component render 函数被执行的时候, data 上会被 触碰(touch), 即被读, getter 方法会被调用, 此时 Vue 会去记录此 Vue component 所依赖的所有 data。(这一过程被称为依赖收集)")])]),t._v(" "),v("li",[v("p",[t._v("data 被改动时（主要是用户操作）, 即被写, setter 方法会被调用, 此时 Vue 会去通知所有依赖于此 data 的组件去调用他们的 render 函数进行更新。")])])]),t._v(" "),v("h2",{attrs:{id:"vue-set-怎么用的？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-set-怎么用的？"}},[t._v("#")]),t._v(" Vue.set 怎么用的？")]),t._v(" "),v("h2",{attrs:{id:"vuerouter-怎么用的？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vuerouter-怎么用的？"}},[t._v("#")]),t._v(" VueRouter 怎么用的？")]),t._v(" "),v("h2",{attrs:{id:"路由守卫是什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#路由守卫是什么？"}},[t._v("#")]),t._v(" 路由守卫是什么？")]),t._v(" "),v("h2",{attrs:{id:"路由懒加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#路由懒加载"}},[t._v("#")]),t._v(" 路由懒加载")])])}),[],!1,null,null,null);e.default=r.exports}}]);