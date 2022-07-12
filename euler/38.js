let pan = '123456789'
let limit = 10000
let max = 0

for(let i=1; i<limit; i++) {
    let combined = i.toString()
    let setStr = new Set(combined)
    let t = 2
    while(combined.length<9 && setStr.size == combined.length) {
        combined += (i*t).toString()
        t++
    }
    if(combined.length != 9) continue
    if(combined.split('').sort().join('') == pan && parseInt(combined)>max) max = parseInt(combined)
}

console.log(max)