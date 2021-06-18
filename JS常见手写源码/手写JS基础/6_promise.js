/**
 * 
 * 模拟实现 promise
 * Promise 利用三大手段解决回调地狱
 * 1. 回调函数延迟绑定
 * 2. 返回值穿透
 * 3. 错误冒泡
 * 
 */

// 定义三种状态
const PENDING = 'PENDING'  // 进行中
const FULFILLED = 'FULFILLED' // 已成功
const REJECTED = 'REJECTED'  // 已失效

class Promise {
    constructor(exector) {
        // 初始化状态
        this.status = PENDING
        // 将成功、失败结果放在 this 上，便于 then、catch 访问
        this.value = undefined
        this.reason = undefined
        // 成功态回调函数队列
        this.onFulfilledCallbacks = []
        // 失败态回调函数队列
        this.onRejectedCallbacks = []
        const resolve = value => {
            // 只有进行中状态才能改变状态
            if (this.status === PENDING) {
                this.status = FULFILLED
                this.value = value
                // 成功态函数依次执行
                this.onFulfilledCallbacks.forEach(fn => fn(this.value))
            }
        }
        const reject = reason => {
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
                // 失败态函数依次执行
                this.onRejectedCallbacks.forEach(fn => fn(this.reason))
            }
        }
        try {
            // 立即执行 executor
            // 把内部的 resolve 和 reject 传入 executor，用户可调用 resolve 和 reject
            exector(resolve, reject)
        } catch (e) {
            // executor 执行出错，将错误的内容 reject 抛出去
            reject(e)
        } 
    }
    then(onFullfilled, onRejected) {
        onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw new Error(reason instanceof Error ? reason.message : reason)
        }
        const self = this
        return new Promise ((resolve, reject) => {
            if (self.status === PENDING) {
                self.onFulfilledCallbacks.push(() => {
                    try {
                        // 模拟微任务
                        setTimeout(() => {
                            /**
                             * 两种情况：
                             *  1. 回调函数返回值是 Promise，执行 then 操作
                             *  2. 如果不是 Promise，调用新 Promise 的 resolve 函数
                             */
                           const result = onFullfilled(self.value)
                           result instanceof Promise ? result.then(resolve, reject) : resolve(result)
                        });
                    } catch (e) {
                        reject(e)
                    }
                })

                self.onRejectedCallbacks.push(() => {
                    try {
                        setTimeout(() => {
                            const result = onRejected(self.reason)
                            result instanceof Promise ? result.then(resolve, reject) : resolve(result)  
                        });
                    } catch (e) {
                        reject(e)
                    }
                })
            } else if (self.status === FULFILLED) {
                try {
                    setTimeout(() => {
                        const result = onFullfilled(self.value)
                        result instanceof Promise ? result.then(resolve, rejcet) : resolve(result)   
                    });
                } catch (e) {
                    reject(e)
                }
            } else if (self.status === REJECTED) {
                try {
                    setTimeout(() => {
                        const result = onRejected(self.reason)
                        result instanceof Promise ? result.then(resolve, reject) : resolve(result)
                    });
                } catch (e) {
                    reject(e)
                }
            }
        })
    }
    catch(onRejected) {
        return this.then(null, onRejected)
    }

    static resolve (value) {
        // 如果是 Promise 实例，直接返回
        if (value instanceof Promise) {
            return value
        } else {
            // 如果不是 Promise 实例，返回一个新的 Promise 对象，状态为 FULFILLED
            return new Promise((resolve, reject) => resolve(value))
        }
    }

    static reject (reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    static all (promiseArr) {
        const len = promiseArr.length
        const values = new Array(len)
        // 用于记录已经成功的 promise 个数
        let count = 0
        return new Promise((resolve, reject) => {
            for (let i = 0; i < len; i++) {
                // Promise.resolve() 处理，确保每一个都是 promise 实例
                Promise.resolve(promiseArr[i]).then(
                    val => {
                        values[i] = val
                        count++
                        // 如果全部执行完，返回 promise 的状态就可以改变了
                        if (count === len) {
                            resolve(values)
                        }
                    err => reject(err) 
                    }
                )
            }
        })
    }

    static race (promiseAll) {
        return new Promise((resolve, reject) => {
            promiseAll.forEach((resolve, reject) => {
                promiseArr.forEach(p => {
                    Promise.resolve(p).then(
                        val => resolve(val),
                        err => reject(err)
                    )
                })
            })
        })
    }
}