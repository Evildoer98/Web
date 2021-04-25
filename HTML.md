# HTML5
## HTML5 的新特性以及移除的元素
### 01. 新特性
*    新增语义化标签：nav、header、footer、aside、section、article、details、summary、dialog

*   音频、视频标签：audio、video

*   数据存储：localStorage(持久保存)、sessionStorage(临时存储)

*   canvas（画布）、Geolocation（地理定位）、websocket（通信协议）

*   input标签新增属性：placeholder、autocomplete、autofocus、required

*   拖拽释放：drag、drop
    
*   webworker(创建子线程)、websocket(长连接)

*   history API
        go、forward、back、pushstate
        应用：vue编程式导航的灵感来源；vue-router的history模式。

### 2. 移除的元素
*   纯表现的元素：basefont、big、center、font、s、strike、tt、u
*   对可用性产生负面影响的元素：frame、frameset、noframes

## 02. DOCTYPE标签
    DOCTYPE声明于文档最前面，告诉浏览器以何种方式来渲染页面。
    HTML5中的声明方式如下：

    <!DOCTYPE html> 使用最新的HTML5标准来解析渲染页面
    如果不写，就会进入混杂模式

* 严格模式：标准模式，指浏览器按照 W3C 标准解析代码
* 混杂模式：怪异模式、兼容模式，指浏览器用自己的方式解析代码，混杂模式通常模拟老式浏览器的行为，以防止老站点无法工作

## 03. 行内元素、块级元素、空(void)元素有哪些
*   常用的块状元素有：
    <div>、<p>、<h1>...<h6>、<ol>、<ul>、<dl>、<table>、<address>、<blockquote> 、<form>
*   常用的内联元素有：
    <a>、<span>、<br>、<i>、<em>、<strong>、<label>、<q>、<var>、<cite>、<code>
*   常用的内联块状元素有：
    <img>、<input>
*   知名的空元素：
    <br/> <hr/> <img/> <input/> <link/><meta/> 
*   鲜为人知的是：
    <area> <base> <col> <command> <embed>
    <keygen> <param> <source> <track> <wbr>

## 04. Doctype 类型
*   该标签可声明三种 DTD 类型，分别表示严格版本、过渡版本以及基于框架的 HTML 文档
*   HTML 4.01 规定了三种文档类型：Strict、Transitional以及Frameset
*   XHTML 1.0 规定了三种文档类型：Strict、Transitional以及Frameset
*   Standards 标准模式（严格模式）
*   Quirks 包容模式（怪异、兼容模式）

## 05. canvas是什么？ 怎样写Canvas
1. 概念：Canvas 是 HTML5 的一个元素，它使用 JavaScript 在网页上绘制图形。Canvas 是一个矩形区域，它的每一个像素都可以由 HTML5 语言来控制。
2. 使用方式：添加 canvas 标签 

## 06. 最新的 HTML5 标准的API是什么
* Canvas：Canvas 由 HTML 代码中定义的具有高度和宽度属性的可绘制区域组成。JavaScript代码可以通过一组完整的绘图函数访问该区域，这与其他常见的 2D API 类似，因此允许动态生成图形。Canvas 的一些预期用途包括构建图形、动画、游戏和图像合成
* 媒体定时回访
* 离线存储数据库
* 文档编辑
* 拖放
* 跨文档消息传递
* 浏览器历史管理
* MIME 类型和协议处理程序注册

# 属性问题
## 01. src和href的区别
*   href 是超文本引用，它是指向资源的位置，建立与目标文件的联系；
*   src 目的是把资源下载到页面中；
    浏览器解析 href 不会阻塞对文档的处理（这就是官方建议使用 link 引入而不是 @ import 的原因），src 会阻塞对文档的处理。

## 02. script 标签为什么要放在body标签的底部（defer、async）
*   因为浏览器在渲染html的时候是从上到下执行的，当遇到js文件的时候就会停止当前页面的渲染，转而去下载js文件，
*   如果将script标签放在头部，在文件很大的情况下将导致首屏加载时间延长，影响用户体验。
    
*   解决办法：
    1. 将script标签放在body的底部
    2. 通过defer、async属性将js文件转为异步加载

*   注意：
        defer和async的区别：首先都是实现js文件的异步加载，不阻塞页面的渲染；
        区别就是defer必须等到整个文档渲染完成后才执行，而async在加载完成后，会暂停html的解析，转去执行js

## 03. 页面导入样式时，使用 link 和 @import 有什么区别
1. link 属于 HTML 标签，而 @import 是 CSS 提供的
2. 页面被加载时，link 会同时被加载，而 @import 引用的 CSS 会等到页面被加载完后再加载
3. @import 只在 IE5 以上才能被识别，而 link 属于 HTML 标签，无兼容问题
4. link 方式的样式的权重高于 @import 的权重

## 04. 锚点的作用是什么？如何设置锚点
*   锚点是文档中某行的一个记号，类似于书签，用于链接到文档中的某个位置
*   定义锚点后，可以创建直接跳到该锚点（页面中的某个小节）的链接，这样使用者就无需不停的滚动页面来寻找信息
*   在使用 <a> 元素创建锚点，可以使用 name 属性为其命名
    对其他元素，可以使用 id 属性为其命名

# 标签问题
## 01. table 和 div + css 的区别
1. 核心：速度和加载方式方面的区别
2. div：<div> 加载方式是即读即加载，遇到 <div> 没有遇到 </div> 的时候一样加载 <div> 中的内容，读多少加载多少
3. table：加载方式是完成后加载，遇到 <table> 后，在读到 </table> 之前，<table> 中的内容不加载

## 02. 语义化标签的理解
1. 用正确的标签做正确的事情！
2. html 语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；
3. 在没有样式 CCS 情况下也以一种文档格式显示，并且是容易阅读的。
4. 搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 SEO。
5. 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

## 03. iframe
*   iframe是一种框架，也是一种很常见的网页嵌入方式
*   iframe的优点：
    1. iframe能够原封不动的把嵌入的网页展现出来。
    2. 如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷。
    3. 网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用。
    4. 如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决。
*   iframe的缺点：
    1. iframe 会阻塞主页面的 Onload 事件。
    2. iframe 和主页面共享连接池，而浏览器对相同域的链接有限制，所以会影响页面的并行加载
    如果需要使用 iframe，最好是通过 javascript 动态给 iframe 添加 src 属性值，这样可以可以绕开以上两个问题。
    3. 会产生很多页面，不容易管理。
    4. iframe框架结构有时会让人感到迷惑，如果框架个数多的话，可能会出现上下、左右滚动条，会分散访问者的注意力，用户体验度差。
    5. 代码复杂，无法被一些搜索引擎索引到，这一点很关键，现在的搜索引擎爬虫还不能很好的处理iframe中的内容，所以使用iframe会不利于搜索引擎优化。
    6. 很多的移动设备（PDA 手机）无法完全显示框架，设备兼容性差。
    7. iframe框架页面会增加服务器的http请求，对于大型网站是不可取的。
    现在基本上都是用Ajax来代替iframe，所以iframe已经渐渐的退出了前端开发。

## 04. label 的作用是什么
    label 元素不会向用户呈现任何特殊效果。
    在 label 元素内点击文本，就会触发此控件。
    就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。

## 05. tite 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？
### title 与 h1
1. h1 标签写在网页的 body 中
2. title 标签写在网页的 head 中
3. h1 标签控制一段文字

### b 与 strong
1. <b> 为了加粗而加粗，<strong> 为了标明重点而加粗
2. 区别：一个是物理元素，一个是逻辑元素
    1. 物理元素所强调的是一种物理行为，比如把一段文字用 b 标记加粗了，浏览器加粗了这段文字，单纯的加粗，没有其他任何作用
    2. Strong 是强调，向浏览器传递强调某段文字的信息，而这个 Strong 就是逻辑元素，强调文档逻辑的，并非是通知浏览器应该如何显示

### i 与 em
1. i 是 Italic（斜体），而 em 是 emphasize（强调）

### 综上
    物理元素是告诉浏览器以何种格式显示文字
    逻辑元素是告诉浏览器有怎么样的重要性

## 06. display:inline、block、inline-block 的区别
01. display:block 就是将元素显示为块级元素
    * block 元素的特点
        1. 总是在新行上开始
        2. 高度、行高以及顶和底边距可控制
        3. 宽度缺省是它的容器的100%，除非设定一个宽度
        4. <div>、<p>、<h1>、<from>、<ul>、<li>都是块元素
02. display:inline 就是将元素显示为行内元素
    * inline 元素的特点
        1. 和其他元素在一行上
        2. 高、行高及顶和底边距不可改变
        3. 宽度就是它的文字或图片的宽度，不可改变
        4. <span>、<a>、<label>、<input>、<img>、<strong>、<em>都是行内元素
03. display:inline-block 将对象呈递为内联对象，但是对象的内容作为块对象呈递。旁边的内联对象会被呈递在同一行，允许空格
    * inline-block 元素的特点
        1. 将对象呈递为内联对象，但是对象的内容作为块对象呈递
        2. 旁边的内联对象会被呈递在同一行内，允许空格
        （应用此特性的元素呈现为内联对象，周围元素保持在同一行，但可以设置宽度和高度的块元素的元素）

## 07. 实现一个圆形的可点击区域
1. map + area 或者 svg
2. border-radius
3. 纯js

## 08. meta标签
1. 核心：提供给页面一些元信息（名称 / 值对），有助于 SEO
2. 属性值：
    1. name ：名称 / 值对中的名称。author、description、keyword、generator、revised、others。把 content 属性关联到一个名称
    2. http-equiv ：没有 name 时，会采用这个属性的值。content-type、expires、refresh、set-cookie。把 content 属性关联到 http 头部
    3. content ：名称 / 值对中的值， 可以是任何有效的字符串。 始终要和 name 属性或 http-equiv 属性一起使用
    4. scheme ：用于指定要用来翻译属性值的方案

## 09. SVG
* SVG 表示（scalable vector graphics）可缩放矢量图形。一个基于文本的图形语言，可以绘制文本、线、点等的图形，因此可以轻松又快速的渲染
* SVG 使用 XML 格式定义图像
* SVG 可以成为任何复杂的组合图形。SVG 支持渐变、旋转、滤镜效果、JavaScript 接口等等功能，但是所有这些额外的语言特性，都需要在一个定义好的图形区域内实现。

# 缓存
## 01. cookie
1. cookie 是网站为了标识用户身份而存储在本地终端的数据
2. cookie 的作用是与服务器进行交互
3. cookie 的大小是受限的（4k）
4. 每次请求一个新的页面时，cookie 都会被发送过去，这样无形之中浪费了带宽
5. cookie 需要指定作用域，不可以跨域调用

## 02. sessionStorage
1. sessionStorage 用于本地保存一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且会话结束后数据也随之销毁
2. sessionStorage 不是一种持久化的本地存储，仅仅是会话级别

## 03. localStorage
1. 用于持久化本地存储，除非主动删除数据，否则数据永远不会过期的
2. 相当于一个轻量级的数据库
3. 在断网情况下读取本地缓存的 cookie
    1. 使用 localStorage 保存数据：localStorage.setItem(key, value)
    2. 使用 localStorage 获取保存的数据: localStorage.getItem(key);
    3. 清除 localStorage 保存的数据： localStorage.removeItem(key);
    4. 清除全部 localStorage 对象保存的数据: localStorage.clear();