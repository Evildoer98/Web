/**
 * 
 * 类数组是具有 length 属性，但不具有数组原型上的方法。常见的类数组有 arguments、DOM 操作方法返回的结果
 * 
 */

// 法一：Array.from
Array.from(document.querySelectorAll('div'))

// 法二：Array.prototype.slice.call()
Array.prototype.slice.call(document.querySelectorAll('div'))

// 法三：拓展运算符
// [...document.querySelectorAll('div')]

// 法四：利用concat()
Array.prototype.concat.apply([], document.querySelectorAll('div'))