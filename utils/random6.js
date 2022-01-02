let arr = [1, 2, 3] // 保证六位随机码包含数字+大写字母+小写字母
let code = ''
function getRandom (min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function randomsort (a, b) {
    return Math.random() > 0.5 ? -1 : 1
    // 用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}
for (let i = 0; i < 3; i++) {
    arr.push(getRandom(1, 3)) // 补成六位
}
arr.sort(randomsort) // 打乱数组
for (let i = 0; i < 6; i++) {
    let type = arr[i]
    switch (type) {
        case 1:
            code += String.fromCharCode(getRandom(48, 57)) // 数字
            break
        case 2:
            code += String.fromCharCode(getRandom(65, 90)) // 大写字母
            break
        case 3:
            code += String.fromCharCode(getRandom(97, 122)) // 小写字母
            break
    }
}
console.log(code)