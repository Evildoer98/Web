Array.prototype.map = function (callback, thisArg) {
    if (this == undefined) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof callback) {
        throw new TypeError(callback + 'is not a function')
    }
    const res = []
    const O = Object(this)
    const len = O.length >>> 0
    for (let i = 0; i < len; i++) {
        if (i in O) {
            // 调用回调函数并传入新数组
            res[i] = callback.call(thisArg, O[i], i, this)
        }
    }
    return res
}