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

Array.prototype.filter = function (callback, thisArg) {
    if (this == undefined) {
        throw new TypeError('this is null or not undefined')
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function')
    }
    const res = []
    // 让 O 成为回调函数的对象传递（强制转换对象）
    const O = object(this)
    // >>> 0，保证 len 为 number，且为正整数
    const len = O.length >>> 0
    for (let i = 0; i < len; i++) {
        // 检查 i 是否在 O 的属性（会检查原型链）
        if (i in O) {
            // 回调函数调用传参
            if (callback.call(thisArg, O[i], i, O)) {
                res.push(O[i])
            }
        }
    }
    return res
}

/**
 * 
 * >>> 移位运算符
 * 
 */

// 在 lodash 的源码中 slice 这个函数中有
// lenth = start > end ? 0 : ((end - start) >>> 0)
// start >>>= 0

// >> 和 >>> 的区别
// 1. >>> 是无符号右移
// 2. >> 是有符号移位

// >> 有符号移位：该操作会将第一个操作数向右移动指定的位数。向右被移出的位被丢弃，拷贝最左侧的位以填充左侧
// eg：-9 >> 2
