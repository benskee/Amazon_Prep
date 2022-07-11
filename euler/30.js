// Digit fifth powers

let limit = 1000000
let ans = []

for(let i=10; i<limit; i++) {
    let str = i.toString()
    let digits = str.split('')
    let total = 0
    digits.forEach(d=> total += parseInt(d)**5)
    if (total == i ) ans.push(i)
}

console.log(ans.reduce((a,b)=> a+b))