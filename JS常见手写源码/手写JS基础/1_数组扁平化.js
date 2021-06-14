const arr = [1, [2, [3, [4, 5]]], 6];
// => [1, 2, 3, 4, 5, 6]

// 法一 reduce
const flat1 = function (arr) {
    let res = []
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat1(cur) : cur)
    }, [])
}

// 法二 forEach 函数递归
const flat2 = function (arr) {
    let res = []
    arr.forEach(element => {
        if (Array.isArray(element)) {
            res.push(...flat2(element))
        } else {
            res.push(element)
        }
    });
    return res
}

// 法三
const flat3 = function (arr) {
    return arr.reduce((res, item) => res.concat(Array.isArray(item) ? flat3(item) : item), [])
}

// 法四
// const flat4 = arr.flat(Infinity)
console.log(arr.flat(Infinity));

// 法五 数据类型会变为字符串
// const flat5 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',')
console.log(JSON.stringify(arr).replace(/\[|\]/g, '').split(','));

// 法六
// const flat6 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']')
console.log(JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']'));


console.log(flat1(arr));
console.log(flat2(arr));
console.log(flat3(arr));
