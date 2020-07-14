(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{361:function(e,v,t){"use strict";t.r(v);var _=t(42),s=Object(_.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"一、获取数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、获取数据"}},[e._v("#")]),e._v(" 一、获取数据")]),e._v(" "),t("p",[e._v("我们知道AJAX用来在项目中以阻止页面刷新的方式获取数据，那么数据从哪里来呢？我们又怎么知道如何获取这些数据？答案是我们通常使用"),t("strong",[e._v("API")]),e._v("与各式各样的数据库交互。")]),e._v(" "),t("p",[e._v("“API”是“Application Programming Interface”(即：应用程序接口)的缩写，你可以想象一些数据是开放的并且在等待被使用，而我们获取这些数据的方式便是使用API。API通常的形式是一个URL，并提供指定的参数名和参数值用来帮助你定位所要获取的数据。")]),e._v(" "),t("p",[e._v("还记得我们提过AJAX需要服务器端的相应设置吗？我们之后会再来谈这一点。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"二、ajax技术的核心-xmlhttprequest对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、ajax技术的核心-xmlhttprequest对象"}},[e._v("#")]),e._v(" 二、AJAX技术的核心 - XMLHttpRequest对象")]),e._v(" "),t("p",[e._v("让我们先把服务器端的设置抛在一边，聚焦AJAX技术的核心环节："),t("code",[e._v("XMLHttpRequest")]),e._v("对象。")]),e._v(" "),t("p",[t("code",[e._v("XMLHttpRequest")]),e._v("对象是浏览器提供的一个API，用来顺畅地向服务器发送请求并解析服务器响应，当然整个过程中，浏览器页面不会被刷新。它将是本文接下来的主角，让我们先站在较高的层次，对该对象有一个全局的概览：")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("XMLHttpRequest")]),e._v("只是一个JavaScript对象，确切的说，是一个"),t("strong",[e._v("构造函数")]),e._v("。换句话说，它一点也不神秘，它的特殊之处只在于它是由客户端(即浏览器)提供的（而不是JavaScript原生的），除此之外，它有属性，有方法，需要通过"),t("code",[e._v("new")]),e._v("关键字进行实例化，我们只需掌握它们就好；")]),e._v(" "),t("li",[t("code",[e._v("XMLHttpRequest")]),e._v("对象是不断被扩展的。随着XML对象被广泛的接收，W3C也开始着手制定相应的标准来规范其行为。目前，"),t("code",[e._v("XMLHttpRequest")]),e._v("有两个级别：1级提供了XML对象的实现细节，2级进一步发展了XML对象，额外添加了一些方法，属性和数据类型。但是，并不是所有浏览器都实现了XML对象2级的内容（并不意外，对吧？）；")])]),e._v(" "),t("p",[e._v("让我们先从剖析"),t("code",[e._v("XMLHttpRequest")]),e._v("实例的属性和方法开始，先创建一个XML对象的实例：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const xhr = new XMLHttpRequest()\n复制代码\n")])])]),t("p",[e._v("该实例的属性，方法有：")]),e._v(" "),t("h3",{attrs:{id:"方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[e._v("#")]),e._v(" 方法")]),e._v(" "),t("ul",[t("li",[t("code",[e._v(".open()")]),e._v("：准备启动一个AJAX请求；")]),e._v(" "),t("li",[t("code",[e._v(".setRequestHeader()")]),e._v("：设置请求头部信息；")]),e._v(" "),t("li",[t("code",[e._v(".send()")]),e._v("：发送AJAX请求；")]),e._v(" "),t("li",[t("code",[e._v(".getResponseHeader()")]),e._v(": 获得响应头部信息；")]),e._v(" "),t("li",[t("code",[e._v(".getAllResponseHeader()")]),e._v("：获得一个包含所有头部信息的长字符串；")]),e._v(" "),t("li",[t("code",[e._v(".abort()")]),e._v("：取消异步请求；")])]),e._v(" "),t("h3",{attrs:{id:"属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[e._v("#")]),e._v(" 属性")]),e._v(" "),t("ul",[t("li",[t("code",[e._v(".responseText")]),e._v("：包含响应主体返回文本；")]),e._v(" "),t("li",[t("code",[e._v(".responseXML")]),e._v("：如果响应的内容类型时"),t("code",[e._v("text/xml")]),e._v("或"),t("code",[e._v("application/xml")]),e._v("，该属性将保存包含着相应数据的XML DOM文档；")]),e._v(" "),t("li",[t("code",[e._v(".status")]),e._v("：响应的HTTP状态；")]),e._v(" "),t("li",[t("code",[e._v(".statusText")]),e._v("：HTTP状态的说明；")]),e._v(" "),t("li",[t("code",[e._v(".readyState")]),e._v("：表示“请求”/“响应”过程的当前活动阶段")])]),e._v(" "),t("p",[e._v("另外，浏览器还为该对象提供了一个"),t("code",[e._v("onreadystatechange")]),e._v("监听事件，每当XML实例的"),t("code",[e._v("readyState")]),e._v("属性变化时，就会触发该事件的发生。")]),e._v(" "),t("p",[e._v("至此，关于XMLHttpRequest实例对象的属性方法就全部罗列完毕了，接下来，我们将更进一步的探究如何使用这些方法，属性完成发送AJAX请求的流程。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"三、准备ajax请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、准备ajax请求"}},[e._v("#")]),e._v(" 三、准备AJAX请求")]),e._v(" "),t("p",[e._v("要想与服务器交互，我们首先需要回答以下问题：")]),e._v(" "),t("ul",[t("li",[e._v("我们是要获取数据还是存储数据？  --表现为请求方式的不同："),t("code",[e._v("GET")]),e._v("或"),t("code",[e._v("POST")]),e._v("；")]),e._v(" "),t("li",[e._v("向哪里发出请求？  --即相应API地址；")]),e._v(" "),t("li",[e._v("以何种方式等待响应？  --有“"),t("strong",[e._v("同步")]),e._v("”和“"),t("strong",[e._v("异步")]),e._v("”两种选择；（网络传输是一个过程，请求和响应不是同时发生的。）")])]),e._v(" "),t("p",[e._v("而XMLHttpRequest实例的"),t("code",[e._v(".open()")]),e._v("方法的作用就是用来回答以上三个问题。"),t("code",[e._v(".open()")]),e._v("方法接收三个参数："),t("strong",[e._v("请求方式")]),e._v("，"),t("strong",[e._v("请求URL地址")]),e._v("和"),t("strong",[e._v("是否为异步请求的布尔值")]),e._v("。")]),e._v(" "),t("p",[e._v("下面是一个"),t("code",[e._v(".open()")]),e._v("方法调用的例子：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 该段代码会启动一个针对“example.php”的GET同步请求。\nxhr.open("get", "example.php", false)\n复制代码\n')])])]),t("p",[e._v("相当于开始做饭前，将工具准备齐备，将菜洗好，"),t("code",[e._v(".open()")]),e._v("方法也同样出色地完成了发送AJAX请求的准备工作。")]),e._v(" "),t("p",[e._v("现在，让我们再深入聊聊一些准备工作的细节：")]),e._v(" "),t("h3",{attrs:{id:"（一）get请求-与-post请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#（一）get请求-与-post请求"}},[e._v("#")]),e._v(" （一）GET请求 与 POST请求")]),e._v(" "),t("ul",[t("li",[e._v("GET请求")])]),e._v(" "),t("p",[e._v("GET请求用于"),t("strong",[e._v("获取数据")]),e._v("，有时候我们需要获取的数据需要通过“查询参数”进行定位，在这种情况下，我们会将查询参数追加到URL的末尾，令服务器解析。")]),e._v(" "),t("p",[e._v("查询参数是指一个由"),t("code",[e._v("?")]),e._v("号起始，由"),t("code",[e._v("&")]),e._v("符号分割的包含相应键值对的字符串。用来告知浏览器所要查询的特定资源。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('const query = "example.php?name=tom&age=24" // "?name=tom&age=24"即是一个查询参数\n复制代码\n')])])]),t("p",[e._v("需要注意的是，查询字符串中每个参数的名和值都必须使用encodeURIComponent()进行编码（这是因为URL中有些字符会引起歧义，例如“&”）。")]),e._v(" "),t("ul",[t("li",[e._v("POST请求")])]),e._v(" "),t("p",[e._v("POST请求用于"),t("strong",[e._v("向服务器发送应该被保存的数据")]),e._v("，因此POST请求天然比GET请求多需要一份"),t("strong",[e._v("需要被保存的数据")]),e._v("。那么这些数据应该放在何处呢？毕竟，我们的"),t("code",[e._v(".open()")]),e._v("方法接收的三个参数都没有合适的位置。")]),e._v(" "),t("p",[e._v("答案是需要发送的数据会作为"),t("code",[e._v(".send()")]),e._v("方法的参数最终被发往服务器，该数据可以是任意大小，任意类型。")]),e._v(" "),t("p",[e._v("这里需要注意以下两点：")]),e._v(" "),t("ol",[t("li",[t("code",[e._v(".send()")]),e._v("方法的参数是不可为空的，也就是说，对于不需要发送任何数据的GET请求，也需要在调用"),t("code",[e._v(".send()")]),e._v("方法时，向其传入"),t("code",[e._v("null")]),e._v("值；")]),e._v(" "),t("li",[e._v("目前为止，我们知道了两种向服务器发送数据的方式："),t("strong",[e._v("表单提交")]),e._v("以及"),t("strong",[e._v("发送POST请求")]),e._v("，要注意服务器对待这两种方式并不一视同仁，这意味着服务器需要有相应的代码专门处理POST请求发送来的原始数据。")])]),e._v(" "),t("p",[e._v("但好在我们可以通过POST请求模拟表单提交，只需要简单两步：")]),e._v(" "),t("ol",[t("li",[e._v("设置请求头参数："),t("code",[e._v("Content-Type: application/x-www-form-urlencoded")]),e._v("（表单提交时的内容类型）；")]),e._v(" "),t("li",[e._v("将表单数据序列化为查询字符串形式，传入"),t("code",[e._v(".send()")]),e._v("方法；")])]),e._v(" "),t("h3",{attrs:{id:"（二）请求url地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#（二）请求url地址"}},[e._v("#")]),e._v(" （二）请求URL地址")]),e._v(" "),t("p",[e._v("这里需要注意若使用相对路径，请求URL是"),t("strong",[e._v("相对于执行代码的当前页面")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"（三）同步请求与异步请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#（三）同步请求与异步请求"}},[e._v("#")]),e._v(" （三）同步请求与异步请求")]),e._v(" "),t("p",[e._v("人们通常认为AJAX是异步的，实际上并非如此，AJAX是避免页面在获取数据后刷新的一种技术，至于等待服务器响应的方式是同步还是异步，需要开发人员结合业务需求进行配置（虽然通常是异步的）。")]),e._v(" "),t("p",[e._v("你可能会好奇，什么时候我们需要使用同步的AJAX？就我个人经验而言，似乎很难找到相应的场景。Stack Overflow上有一个类似的问题，有兴趣的不妨点击"),t("a",{attrs:{href:"https://stackoverflow.com/questions/4316488/when-is-it-appropriate-to-use-synchronous-ajax",target:"_blank",rel:"noopener noreferrer"}},[e._v("查看"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("最后我们再简单解释一下“同步”等待响应与“异步”等待响应的区别：“同步”意味着一旦请求发出，任何后续的JavaScript代码不会再执行，“异步”则是当请求发出后，后续的JavaScript代码会继续执行，当请求成功后，会调用相应的回调函数。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"四、设置请求头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、设置请求头"}},[e._v("#")]),e._v(" 四、设置请求头")]),e._v(" "),t("p",[e._v("每个HTTP请求和响应都会带有相应的头部信息，包含一些与数据，收发者网络环境与状态等相关信息。XMLHttpRequest对象提供的"),t("code",[e._v(".setRequestHeader()")]),e._v("方法为开发者提供了一个操作这两种头部信息的方法，并允许开发者自定义请求头的头部信息。")]),e._v(" "),t("p",[e._v("默认情况下，当发送AJAX请求时，会附带以下头部信息：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Accept")]),e._v("：浏览器能够处理的内容类型；")]),e._v(" "),t("li",[t("code",[e._v("Accept-Charset")]),e._v(": 浏览器能够显示的字符集；")]),e._v(" "),t("li",[t("code",[e._v("Accept-Encoding")]),e._v("：浏览器能够处理的压缩编码；")]),e._v(" "),t("li",[t("code",[e._v("Accept-Language")]),e._v("：浏览器当前设置的语言；")]),e._v(" "),t("li",[t("code",[e._v("Connection")]),e._v("：浏览器与服务器之间连接的类型；")]),e._v(" "),t("li",[t("code",[e._v("Cookie")]),e._v("：当前页面设置的任何Cookie；")]),e._v(" "),t("li",[t("code",[e._v("Host")]),e._v("：发出请求的页面所在的域；")]),e._v(" "),t("li",[t("code",[e._v("Referer")]),e._v("：发出请求的页面URI；")]),e._v(" "),t("li",[t("code",[e._v("User-Agent")]),e._v("：浏览器的用户代理字符串；")])]),e._v(" "),t("p",[t("strong",[e._v("注意")]),e._v("，部分浏览器不允许使用"),t("code",[e._v(".setRequestHeader()")]),e._v("方法重写默认请求头信息，因此自定义请求头信息是更加安全的方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 自定义请求头\nxhr.setRequestHeader("myHeader", "MyValue")\n复制代码\n')])])]),t("hr"),e._v(" "),t("h2",{attrs:{id:"五、发送请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、发送请求"}},[e._v("#")]),e._v(" 五、发送请求")]),e._v(" "),t("p",[e._v("到此为止，我们已经完全做好了发送请求的所有准备：利用"),t("code",[e._v(".open()")]),e._v("方法确定了请求方式，等待响应的方式和请求地址，甚至还通过"),t("code",[e._v(".setRequestHeader()")]),e._v("自定义了响应头，接下来就到了最激动人心的时刻：使用"),t("code",[e._v(".send()")]),e._v("方法，发送AJAX请求！")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 发送AJAX请求！\nconst xhr = new XMLHttpRequest()\nxhr.open("get", "example.php", false)\nxhr.setRequestHeader("myHeader", "goodHeader")\nxhr.send(null)\n复制代码\n')])])]),t("p",[e._v("呃，简单的有些令人尴尬不是吗？换个POST请求试试看：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 发送AJAX请求！\nconst xhr = new XMLHttpRequest()\nxhr.open("post", "example.php", false)\nxhr.setRequestHeader("myHeader", "bestHeader")\nxhr.send(some_data)\n复制代码\n')])])]),t("p",[e._v("额..，总觉得还是差点什么？放轻松伙计，因为我们只是发出了请求，还没有"),t("strong",[e._v("处理响应")]),e._v("，我们这就来看看它。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"六、处理响应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、处理响应"}},[e._v("#")]),e._v(" 六、处理响应")]),e._v(" "),t("p",[e._v("让我们直接看看如何处理一个同步的GET请求响应：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('const xhr = new XMLHttpRequest()\nxhr.open("get", "example.php", false)\nxhr.setRequestHeader("myHeader", "goodHeader")\nxhr.send(null)\n// 由于是同步的AJAX请求，因此只有当服务器响应后才会继续执行下面的代码\n// 因此xhr.status的值一定不为默认值\nif ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {\n    alert(xhr.responseText)\n} else {\n    alert("Request was unsuccessful: " + xhr.status)\n}\n复制代码\n')])])]),t("p",[e._v("上面的代码不难理解，我们通过之前提到的xhr"),t("code",[e._v(".status")]),e._v("属性（如果你忘记了，它存储着响应的HTTP状态）判断请求是否成功，如果成功的话，我们将读取xhr"),t("code",[e._v(".responseText")]),e._v("属性中存储的返回值。但是，当我们的请求为异步时，问题就稍微变得复杂了，由于是异步的请求，在"),t("code",[e._v("xhr.send(null)")]),e._v("语句被执行后，JavaScript引擎会紧接着执行下面的判断语句，而这时由于尚未来得及响应，我们注定会得到一个默认的xhr.status值，因此，我们永远都不可能获取请求的资源了。")]),e._v(" "),t("p",[e._v("如何解决这个问题？答案是通过为XMLHTTPRequest实例添加"),t("code",[e._v("onreadystatechange")]),e._v("事件处理程序（当然你也可以直接使用DOM2级规范规定的"),t("code",[e._v(".addEventListener()")]),e._v("方法，但是注意，IE8是不支持该方法的）。")]),e._v(" "),t("p",[e._v("xhr实例的"),t("code",[e._v("readystatechange")]),e._v("事件会监听xhr"),t("code",[e._v(".readyState")]),e._v("属性的变化，你可以将这个属性想象为一个计数器，随着AJAX流程的推进而不断累加，其可取的值如下：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("0")]),e._v("：未初始化 -- 尚未调用"),t("code",[e._v(".open()")]),e._v("方法；")]),e._v(" "),t("li",[t("strong",[e._v("1")]),e._v("：启动 -- 已经调用"),t("code",[e._v(".open()")]),e._v("方法，但尚未调用"),t("code",[e._v(".send()")]),e._v("方法；")]),e._v(" "),t("li",[t("strong",[e._v("2")]),e._v("：发送 -- 已经调用"),t("code",[e._v(".send()")]),e._v("方法，但尚未接收到响应；")]),e._v(" "),t("li",[t("strong",[e._v("3")]),e._v("：接收 -- 已经接收到部分响应数据；")]),e._v(" "),t("li",[t("strong",[e._v("4")]),e._v("：完成 -- 已经接收到全部响应数据，而且已经可以在客户端使用了；")])]),e._v(" "),t("p",[e._v("有了这个时间处理程序对AJAX进程做监听，剩下的事就简单多了，一个异步的GET请求代码如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('const xhr = new XMLHttpRequest()\nxhr.onreadystatechange = () => {\n    if (xhr.readystate == 4) {\n        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {\n            alert(xhr.responseText)\n        } else {\n            alert("Request was unsuccessful: " + xhr.status)\n        }\n    }\n}\nxhr.open("get", "example.php", true)\nxhr.send(null)\n复制代码\n')])])]),t("p",[t("strong",[e._v("注意")]),e._v("：为了确保跨浏览器的兼容性，必须要在调用"),t("code",[e._v(".open()")]),e._v("方法之前指定事件处理程序，仔细想想也有道理，毕竟"),t("code",[e._v(".open()")]),e._v("方法的执行也包含在该事件处理程序的监听范围之内对吧？")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"七、取消异步请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、取消异步请求"}},[e._v("#")]),e._v(" 七、取消异步请求")]),e._v(" "),t("p",[e._v("有时候，你可能需要在接收到响应之前取消异步请求，这时候，你需要调用"),t("code",[e._v(".abort()")]),e._v("方法。")]),e._v(" "),t("p",[e._v("该方法会令XHR对象实例停止触发事件，并且不再允许访问任何和响应有关的对象属性。没了监控器，我们再也没法判断响应了不是吗？")]),e._v(" "),t("p",[e._v("但是需要注意的是，当终止AJAX请求后，你需要手动对XHR对象实例进行解绑以释放内存空间。")])])}),[],!1,null,null,null);v.default=s.exports}}]);