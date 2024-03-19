

function numberReverse(num = 1234): string {

    const str = num.toString()

    if (str.length === 1) {
        return str
    }

    let res : String = numberReverse( parseInt(str.substring(1)) )

    let first : String = str.substring(0, 1)
    return res + "" + first
}

console.log(numberReverse(1234))

// function IntReverse(num: number, Index: number = 0) : Number {
// 
//     let _index = Index + 1
//     let strNum = num + ''
//     let first = strNum[0]
//     strNum = strNum.slice(1, strNum.length)
// 
//     let res = parseInt(`${strNum}${first}`)
// 
//     console.log('index', _index, res);
// 
//     if (_index == strNum.length) {
//         return res
//     } else {
//         return IntReverse(res, _index)
//     }
// }

