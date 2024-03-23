
```javascript
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
```

