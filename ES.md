# ES6 新特性
* 类
* 模块化
* 函数参数默认值
* 模板字符串
* 解构赋值
* 延展操作符
* 对象属性缩写
* Promise
* let 和 const

## 1. 类
* ES6 引入了 class（类），让 JavaScript 的面向对象变得更加简单和易于理解
1. 不使用 class（类）
```javascript

    function Phone(brand, price) {
        this.brand = brand
        this.price = price
    }
    // 在原型上添加方法
    Phone.prototype.call = function () {
        console.log('我可以打电话')
    }
    // 实例化对象
    let Huawei = new Phone('华为', 5000)
    Huawei.call()
    console.log(Huawei)
```
![1_1](./src/image/ES_images/ES6_images/1_1.jpg)

2. 不使用 class（类）继承
```javascript
    //手机
        function Phone(brand, price){
            this.brand = brand;
            this.price = price;
        }

        Phone.prototype.call = function(){
            console.log("我可以打电话");
        }

        //智能手机
        function SmartPhone(brand, price, color, size){
            Phone.call(this, brand, price);
            this.color = color;
            this.size = size;
        }

        //设置子级构造函数的原型
        SmartPhone.prototype = new Phone;
        SmartPhone.prototype.constructor = SmartPhone;

        //声明子类的方法
        SmartPhone.prototype.photo = function(){
            console.log("我可以拍照")
        }

        SmartPhone.prototype.playGame = function(){
            console.log("我可以玩游戏");
        }

        const chuizi = new SmartPhone('锤子',2499,'黑色','5.5inch');

        console.log(chuizi);
        chuizi.call()
        chuizi.photo()
        chuizi.playGame()

```
![1_2](./src/image/ES_images/ES6_images/1_2.jpg)

3. 使用class（类）
    * 构造函数在实例化的时候将会被调用，如果不指定，那么就会有一个不带参数的默认构造函数
```javascript
    Class Shouji {
        //构造方法 名字不能修改
        constuctor (brand, price) {
            this.brand = brand
            this.price
        }
        call () {
            console.log('我可以打电话')
        }
    }
    let onePlus = new Shouji("1+", 1999);
    console.log(onePlus);
    console.log(onePlus.call());
```
![1_3](./src/image/ES_images/ES6_images/1_3.jpg)

4. 使用类继承
    * 子类必须要在 constructor 中指定 super 函数，否则在新建实例的时候会报错
    * 如果没有置顶 constructor，默认带 super 函数的 constructor 将会被添加
```javascript
    class vivo extends Shouji{
        constructor(brand, price, dosome) {
            super(brand, price)
            this.dosome = dosome
        }
        toString () {
            console.log('hello');
        }
    }

    let vivox = new vivo('x21',2000,'拍照')
    console.log(vivox);
    console.log(vivox.toString());
```
![1_4](./src/image/ES_images/ES6_images/1_4.jpg)

5. class 的 get 和 set 
```javascript
    class Phone {
        get price () {
            console.log('价格属性被读取了')
            return '价格是....'
        }
        set price(newValue) {
            console.log('价格属性被修改了')
        }
    }
    let oppo = new Phone()
    console.log(oppo.price)
    oppo.price = 'free'
```
![1_5](./src/image/ES_images/ES6_images/1_5.jpg)

6. class 的静态成员
```javascript
    class Phone{
        //静态属性
        static name = '手机';
        static change(){
            console.log("我可以改变世界");
        }
    }

    let nokia = new Phone();
    console.log(nokia.name);
    console.log(Phone.name);
```
![1_6](./src/image/ES_images/ES6_images/1_6.jpg)

## 2. 模块化
* ES5 不支持原生的模块化，在 ES6 中模块作为重要的组成部分被添加进来。模块的功能主要由 export 和 import 组成。每一个模块都有自己单独的作用域，模块之间的相互调用关系是通过 export 来规定模块对外暴露的接口，通过 import 来引用其他模块提供的接口。同时还为模块创造了命名空间，防止函数的命名冲突
1. 导出（export）
    * ES6 允许在一个模块中使用 export 来导出多个变量或函数
2. 导出变量
```javascript
    // test.js
    export var name = 'test'
```
ES6 将一个文件视为一个模块，上面的模块通过 export 向外输出了一个变量。一个模块也可以同时向外输出多个变量
```javascript
    var name = 'test'
    var age = 18
    export {name, age}
```
3. 导出函数
```javascript
    // myModule.js
    export function myModule (someArg) {
        return someArg
    }
```
4. 导入（import）
定义好模板的输出以后就可以在另外一个模块通过 import 引用
```javascript
    import {myModule} form 'myModule' // main.js
    import {name, age} form 'test' // test.js
```

## 3. 箭头(Arrow)函数
* => 不只是关键字 function 的缩写，它还带来了其他好处。箭头函数与包围它的代码共享同一个 this，能很好的解决 this 的指向问题。比如 var self = this 或 var that = this 这种引入外围 this 的模式，但是使用 => ，就不需要这么麻烦了
### 箭头函数的结构
* 箭头函数的箭头 => 之前是一个括号、单个的参数名、或用括号括起来的多个参数名，而箭头之后可以是一个表达式（作为函数的返回值），或者是用花括号括起的函数体（需要自行通过 return 来返回值，否则返回的是 undefined）
```javascript
    () => 1
    v => v + 1
    (a, b) => a + b
    () => {
        alert('test')
    }
    e => {
        if (e == 0) {
            return 0
        }
        return 100
    }
```

* 注意：不论是箭头函数还是 bind，每次被执行都返回的是一个新的函数引用，因此如果需要函数的引用去做一些别的事情（比如卸载监听器），那么就需要保存这个引用

### 特性
1. this 是静态的，this 始终指向函数声明时所在作用域下的 this 的值，箭头函数的 this 只取决于定义时的环境
2. 不能作为构造实例化对象
3. 不能使用 arguments 变量
4. 箭头函数的缩写
    1. 省略小括号，当形参有且只有一个的时候
    2. 省略花括号，当代码体只有一条语句的时候，此时 return 必须省略，而且语句的执行结果就是函数的返回值
5. 因为箭头函数没有 this，所以一切改变箭头函数 this 指向都是无效的
*  比如 fn 箭头函数在 window 环境下定义的，无论如何调用，this 都指向 window  

## 4. 函数参数默认值
* ES6 允许给函数参数赋值初始值
    1. 形参初始值，具有默认值的参数，一般位置都要靠后（潜规则）
        ```javascript
            function foo (height = 50, width = 100, color = 'red') {
                ...
            }
        ```
        * 不使用默认值
        ```javascript
            function foo (hight, color) {
                var height = height || 50
                var color = color || 'red'
                return height + '+' + color
            }
        ```
        * 当参数的布尔值为 false 时，就会出现问题
        * 比如：foo(0, "")  // 50 + red
            * 因为 0 的布尔值为 false，这样 height 的取值将是 50，同理 color 的取值为 'red' 

    2. 与解构赋值结合
        ```javascript
            function connect({host="127.0.0.1", username,password, port}){
            console.log(host)
            console.log(username)
            console.log(password)
            console.log(port)
            }
            connect({
                // host: 'Evildoer98.com',
                username: 'root',
                password: '123456',
                port: 3306
            })
        ```
        ![3_1](./src/image/ES_images/ES6_images/3_1.jpg)![3_2](./src/image/ES_images/ES6_images/3_2.jpg)
    
## 5. 模板字符串

