/**
 * 
 * 不管事件被调用多少次，函数调用总是按照规定的时间运行
 * 函数节流：间隔时间执行
 * 理解：函数节流就是 fps 游戏的射速，就算一直按着鼠标射击，也只会在规定的射速内射出子弹
 * 
 * 应用场景：
 *  鼠标不断点击触发，mousedown（单位事件内只触发一次）
 *  监听滚动事件，比如是否滑到底部自动加载更多，用 throttle 来判断
 * 
 */

const throttle = function (fn, ms) {
    let flag = true
    return function (...arg) {
        if (!flag) {
            return 
        }
        flag = false
        setTimeout(() => {
            fn.apply(this, arg)
            flag = true
        }, ms);
    }
}