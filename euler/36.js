// Double-base palindromes

let limit = 1000000
let ans = 0

for(let i=1; i<limit; i++) {
    let str = i.toString()
    let strRev = i.toString().split('').reverse().join('')
    if(str == strRev) {
        let bin = i.toString(2)
        let binRev = i.toString(2).split('').reverse().join('')
        if(bin == binRev) ans += i
    }
}

console.log(ans)