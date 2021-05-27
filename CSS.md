# CSS 属性
## 01. CSS 中定位的方式有那些？ position 属性的值有哪些以及之间的区别？
* 标准文档流：在不使用其他与排列和定位相关的特殊 CSS 规则时，元素的默认排列规则
* HTML 文档中元素可以分为两大类：行内元素和块级元素
    1. 行内元素：是 DOM 树中的一个节点，不单独占据空间，依赖于块级元素，行内元素没有自己的区域
    2. 块级元素：是 DOM 树中的一个节点，总是以块的形式表现出来，并且跟统计的兄弟块依次竖直排列，左右自动伸展，知道包含它的元素的边界，在水平方向上不能并排
* 遵循标准文档流
    1. static 定位：
        1. HTML 元素的默认值，即没有定位，遵循正常的文档流对象
        2. 静态定位的元素不会受到 top、bottom、left、right 影响
    2. relative 定位（相对定位）：
        1. 处于标准文档流中的位置，依据 left、top 进行定位（当然还可以使用 right、bottom）
        2. margin 和 padding 会改变相对定位的对象在标准文档流中的占位空间
        3. 相对定位元素的定位是相对其正常位置
        4. 移动相对定位元素，但它原本所占的空间不会改变
        5. 相对定位元素经常被用来作为绝对定位元素的容器块
* 脱离标准文档流
    1. fixed 定位（绝对定位）：
        1. 元素的位置相对于浏览器窗口是固定位置
        2. 即使窗口是滚动的，它也不会移动
        * 注意：
            1. fixed 定位使元素的位置与文档流无关，因此不占据空间
            2. fixed 定位的元素和其他元素重叠
    2. absolute 定位（绝对定位）：
        1. 相对于 static 定位以外的第一个父元素，使用 left、top（或者right、bottom）进行绝对定位（相对于最近的非 static 定位的祖先元素进行定位）
        2. 绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于 html 
        * 注意：
            1. absolute 定位使元素的位置与文档流无关，因此不占据空间
            2. absolute 定位的元素和其他元素重叠
* 其他定位
    1. sticky 定位（沾性定位）：
        1. 基于用户滚动的位置
        2. 未脱离文档流
    2. initial ：设置该属性为浏览器默认值
    3. inherit ：规定应该从父元素继承 position 属性的值

## 02. 设置元素浮动后，该元素的 display 值是多少
    自动变成 display:block
    absolute 和 float 都会隐式改变 display

## 03. 浮动
* 浮动（float）是 CSS 定位属性。浮动元素从网页的正常流动中移出，但是保持了部分的流动性，会影响其他元素的定位（比如文字会围绕着浮动元素）
* 浮动元素引起的问题：
    1. 父元素的高度无法被撑开，影响与父元素同级的元素
    2. 与浮动元素同级的非浮动元素会跟随其后
    3. 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构
* CSS 的 clear 属性通过使用 left、right、both，让该元素向下移动（清除浮动）到浮动元素的下面
* 如果父元素只包含浮动元素，那么该元素的高度将坍塌为0。我们可以通过清除（clear）从浮动元素后到父元素关闭前之间的浮动来修复这个问题

## 04. 清除浮动的方法
1. 父级 div 定义 height
    给父元素添加高度 height，防止父元素无法获取高度的问题（防止父元素高度变为0），只建议高度固定的布局
2. 结尾处加空 div 标签 clear:both
3. 父级 div 定义伪类 :after 和 zoom
4. 父级 div 定义 overflow:hidden 或 auto
5. 父级 div 也浮动，需要定义宽度
6. 父级 div 定义 display:table
* 常用1、2、3、4，了解 5、6

## 05. display 有那些值
1. none（隐藏） ：此元素不会被显示，隐藏后的元素不占据任何空间，该元素以及它的所有后代元素都会隐藏
2. block（块显示） ：此元素将显示为块级元素，此元素前后会带有换行符
3. inline（内嵌） ： 默认。此元素会被显示为内联元素，元素前后没有换行符
4. table（表格显示） ：此元素会作为块级表格来显示（类似 table 标签），表格前后带有换行符
5. inline-block : 元素既具有 block 元素可以设置宽高的特性，同时又具有 inline 元素默认不换行的特性
6. list-item ：像块元素一样显示，并添加样式列表标记
7. inherit ：规定应该从父元素继承 display 的值

## 06. display:none 和 visibility:hidden
* display:none
    1. 隐藏后的元素不占据任何空间
    2. 父级设置 none，子元素就显示不出来了
    3. 会引起渲染和回流，影响性能
* visibility:hidden
    1. 隐藏的元素空间依旧存在
    2. 父级设置 hidden，子元素也会继承这个属性
    3. 使用 visibility:visible 显示子元素，不会引起回流

## 07. CSS3 新特性
1. 新增各种 CSS 选择器（:not(.input)：所有不是“input”的节点）
2. 圆角（border-radius: 8px）
3. 多列布局（multi-column layout）
4. 阴影和反射（Shadow\Reflect）
5. 文字特效（text-shadow）
6. 文字渲染（Text-decoration）
7. 线性渐变（gradient）
8. 旋转（transform）
9. 增加了旋转、缩放、定位、倾斜、动画、多背景
10. transform:scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg) Animation // 旋转,缩放,定位,倾斜

## 08. before 和 after 中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用
* 单冒号（:）用于 CSS3 伪类；双冒号（::）用于 CSS3 伪元素
* 两者都是描述不在文本流中的东西
* 伪类用于向某些选择器添加特殊的效果
* 伪元素用于将特殊效果添加到某些选择器
* 伪类的效果可以通过添加一个实际的类来达到，而伪元素的效果则需要通过添加一个实际的元素才能达到

## 09. CSS 旋转属性，transform 的用法
* transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜
### 1. 旋转rotate
* 用法：transform:rotate(45deg)
    一个参数“角度”，单位 deg 为度，正数为顺时针旋转，负数为逆时针旋转
1. 水平翻转
    ```css
    transform:scale(-1, 1)
    filter:FlipH
    ```
2. 垂直翻转
    ```css
    transform:scale(1, -1)
    filter:FlipV
    ```
3. 顺时针旋转90度
    1. ```css
       -moz-transform:rotate(90deg); 
       -webkit-transform:rotate(90deg); 
       -o-transform:rotate(90deg); 
       transform:rotate(90deg); 
       ```
    2. ```css
       filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1)
       ```

### 2. 缩放 scale
* 用法：transform:scale(0.5) 或者 transform:scale(0.5, 2)
* 参数表示缩放倍数
    1. 一个参数时：表示水平和垂直同时缩放该倍率
    2. 两个参数时：第一个参数指定水平方向的缩放倍率，第二个参数指定垂直方向的缩放倍率
### 3. 移动 translate
* 用法：transform:translate(45px)或者transform:skew(45px, 150px)
* 参数表示移动距离，单位px
    1. 一个参数时：表示水平方向的移动距离
    2. 两个参数时：表示第一个参数表示水平方向的移动距离，第二个参数表示垂直方向的移动距离
### 4. 倾斜 skew
* 用法：transform: skew(30deg)  或者 transform: skew(30deg, 30deg);
* 参数表示倾斜角度，单位deg
    1. 一个参数时：表示水平方向的倾斜角度；
    2. 两个参数时：第一个参数表示水平方向的倾斜角度，第二个参数表示垂直方向的倾斜角度。
    * skew 的默认原点 transform-origin 是这个物件的中心点
### 5. 基准点 transform-origin
* 在使用 transform 方法进行文字或图像的变形时，是以元素的中心点为基准点。
* 使用 transform-origin 属性，可以改变变形的基准点
* 用法：transform-origin:10px 10px
* 共两个参数，表示相对于左上角原点的距离，单位px
    1. 第一个参数表示相对于左上角原点的水平方向的距离
    2. 第二个参数表示相对于左上角原点的垂直方向的距离
* 两个参数除了可以设置为具体的像素值，其中第一个参数可以指定为 left、center、right，第二个参数可以指定为 top、center、bottom
### 6. 组合变形
```css
transform: rotate(45deg) scale(0.5) skew(30deg, 30deg) translate(100px, 100px);
```
## 10. CSS 的权重和优先级
* 权重：
    行内样式（+1000）；
    id选择器（+100）；
    属性、class、伪类选择器（+10）；
    元素、伪元素、通配符（+0）
* 优先级：
    1. 权重相同，写在后面的覆盖前面的
    2. 使用 !important 达到最大优先级，都使用 !important 时，权重大的优先级高

# CSS 布局
## 01. CSS 那些属性脱离文档流
### 1. 什么是文档流
* 将窗体自上而下分为一行一行，并在每行中按从左到右依次排放元素，称为文档流，也称普通流
### 2. 什么是脱离文档流
* 脱离文档流，那么文档原本占据文档流的位置会被它后面的元素填不
### 3. CSS 哪些属性脱离文档流   
* 脱离文档流有两种方式：浮动和定位
1. 定位
    1. position:absolute
    2. position:fixed
2. 浮动
    1. float:left
    2. float:right

## 02. div+css的布局较table布局有什么优点？
1. 改版的时候更⽅便 只要改 css ⽂件。
2. ⻚⾯加载速度更快、结构化清晰、⻚⾯显示简洁。
3. 表现与结构相分离。
4. 易于优化（ seo ）搜索引擎更友好，排名更容易靠前。

## 03. 如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？
1. 宽高固定：css 指定样式
    1. top:50%; left:50%
    2. margin-top 和 margin-left 指定为负数，绝对值为自身宽高的一半
2. 有宽度
    使用margin:0 auto;可以实现居中（需要有宽度）
3. 居中一个浮动元素
    父元素和子元素同时左浮动，然后父元素相对左移动50%，再然后子元素相对右移动50%，或者子元素相对左移动-50%也就可以了。
4. 让绝对定位的div居中
    1. 先把外层的相对定位的大div用margin:0px auto;居中，
    2. 然后这个绝对定位的用left，top来定位。
    3. top属性值:（父元素的高度-子元素高度）/2；
    4. left属性值:（父元素宽度值-子元素宽度值）/2。

## 03. 三栏布局，中间自适应
* 左中右三栏布局，左右两栏宽度固定（要想不固定将宽度值改为百分值即可），中间栏宽度自适应
1. 绝对定位法
    左右两栏采用绝对定位，分别固定于页面的左右两侧，中间的主体栏用左右margin值撑开距离。于是实现了三栏自适应布局。
2. 自身浮动法
    应用了标签浮动跟随的特性。左栏左浮动，右栏右浮动，主体直接放后面，就实现了自适应。
3. margin负值法
    外层div宽度100%显示，并且浮动（本例左浮动，下面所述依次为基础），内层div为真正的主体内容，含有左右210像素的margin值。
    左栏与右栏都是采用margin负值定位的，左栏左浮动，margin-left为-100%，由于前面的div宽度100%与浏览器，所以这里的-100%margin值正好使左栏div定位到了页面的左侧； 右侧栏也是左浮动，其margin-left也是负值，大小为其本身的宽度即200像素。

## 04. 如果需要⼿动写动画，你认为最⼩时间间隔是多久，为什么？
    多数显示器默认频率是 60Hz ，即 1 秒刷新 60 次，所以理论上最⼩间隔为
    1⁄60*1000ms ＝ 16.7ms

## 05. 全屏滚动的原理是什么？用到了CSS的那些属性？
* 主要呈现方式有两种，
    1. 一种是整体的元素一直排列下去，假设有五个需要展示的全屏页面，那么高度是500%，只是展示100%，剩下的可以通过transform进行Y轴定位，也可以通过margin-top实现，
    2. 第二种就是所有的子元素和页面一样，都显示在当前页面。

## 06. 用纯CSS创建一个三角形的原理是什么？
* 均分原理
    1. 在矩形的直角，两条边的样式要均分
    2. 比如左上角 border-top 和 border-left 的样式要均分
    3. 如果border-left 无色透明， border-top有色， 就会出来一个45度的锐角
* 三角形
   1. 基础三角形
   ```css
    div {
        width: 0;
        height: 0;
        border-width: 20px;
        border-style: solid;
        border-color: transparent transparent red transparent
    }
    ```
    或者
    ```css
    div {
        width: 0;
        border: 100px solid transparent;
        border-bottom-color: #343434
    }
    ```
    2. 等边三角形
    ```css
        div {
            width: 0;
            border: 100px solid transparent;
            border-bottom: 173px solid #343434
        }
    ```
    3. 直角三角形
    ```css
        div {
            width: 0;
            border: 0 solid transparent;
            border-left: 100px solid transparent;
            border-bottom: 100px solid #343434
        } 
    ```

## 07. Flex 布局，Flex是什么属性的缩写
* 弹性盒布局，CSS3 的新属性， 是一种替代浮动布局的方案，用于方便布局，比如垂直居中
* flex 属性是 flex-grow、flex-shrink 和 flex-basis 的缩写

* 在 flex 布局中有两大概念：容器和轴：
    1. 轴分为主轴和与主轴垂直的交叉轴，可通过 flex-direction 来切换
    2. 然后就是容器，采用弹性盒的区域就是容器，将容器的 display 设为 flex，内部的元素就成为一个个项目，整体形成 flex 布局，容器可通过 justify-content 控制项目在主轴的排列方式，通过 align-items 控制项目在交叉轴的排列方式，还有 flex-wrap 控制项目的换行方式。针对项目，可以通过 flex-grow 来控制自身放大比例， flex-shrink 控制缩小比例，order 控制项目排列顺序

## 08. 水平垂直居中
1. 确定容器宽高：
    相对或绝对定位，设置外边距 margin
    ```css
    div {
        position: relative / fixed;
        width: 500px;
        height: 300px;
        top: 50%;
        left: 50%;
        margin: -150x 0 0 -250px;
        background-color: pink;
    }
    ```
2. 不确定容器宽高
    绝对定位，利用 transform 属性
    ```css
    div {
        position: absolute / fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    ```
3. flex布局
    高度可以确定，也可以不确定
    ```css
    .container {
        display: flex;
        align-items: center; 		/* 垂直居中 */
        justify-content: center;	/* 水平居中 */
    }
    .container div {
        width: 100px; /* 可省 */
        height: 100px; /* 可省 */
        background-color: pink;	/* 方便看效果 */
    }  
    ```
4. inline-block
    高度可以确定，也可以不确定
    水平居中：text-align
    垂直居中: 父元素 line-height 与 height 同值，子元素 vertical-align
    ```css
    .container {
        height: 200px; /* 垂直居中 */
        line-height: 200px; /* 垂直居中 */
        text-align: center; /* 水平居中 */
    }
    .container div {
        display: inline-block; /* 核心：宽度自适应，高度可居中 */
        line-height: 20px; /* 会自动继承，必须设置不同的值来覆盖 */
        vertical-align: middle; /* 垂直居中 */
    }  
    ```

# 性能优化
## 01. 雪碧图
*   雪碧图是把多张图片整合到一张上的图片。它被运用在众多使用了很多小图标的网站上（Gmail在使用）
*   实现方法：
    1. 使用生成器将多张图片打包成一张雪碧图，并为其生成合适的CSS
    2. 每张图片都有对应的CSS类，该类定义了background-image、background-position和background-size属性
    3. 使用图片时，将相应的类添加到元素中
*   好处：
    1. 减少加载多张图片的HTTP请求数（一张雪碧图只需要一个请求），但是对于HTTP2来说，加载多张图片不再是问题
    2. 提前加载资源，防止在需要时才在开始下载引发的问题，比如只出现在:hover伪类中的图片，不会出现闪烁