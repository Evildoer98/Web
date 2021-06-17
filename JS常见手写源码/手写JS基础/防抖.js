/**
 * 
 * 触发高频时间后 n 秒内函数只会执行一次，如果 n 秒内高频时间再次触发，则重新计算时间
 * 
 */
const debounce = (fn, time) => {
    let timeout = null
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        }, time);
    }
}

const debounce = function (fn, ms) {
    let timer = null
    return function(...arg) {
        if (timer) {
            clearTimeout(timer)    
            timer = null
        }
        timer = setTimeout(() => {
            fn.apply(this, arg)
        }, ms)
    }
}