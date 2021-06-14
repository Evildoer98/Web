const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]

// 法一 Set集合
const unique1 = function (arr) {
    return Array.from(new Set(arr))
}

// 法二 两层 for 循环 + splice
const unique2 = function (arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1)
                len--
                j--
            }
        }
    }
    return arr
}

// 法三 indexOf
const unique3 = function (arr) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res
}
 
// 法四 includes
const unique4 = function (arr) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}

// 法五 filter
const unique5 = function (arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index
    });
}

// 法六 Map
const unique6 = function (arr) {
    const map = new Map()
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], true)
            res.push(arr[i])
        }
    }
    return res
}

console.log(unique1(arr));
console.log(unique2(arr));
console.log(unique3(arr));
console.log(unique4(arr));
console.log(unique5(arr));
console.log(unique6(arr));