// Digit factorials

let limit = 10000000
let ans = 0

let factorial = num => {
    let total = 1
    while(num>1) {
        total*=num
        num--
    }
    return total
}
let facts = {
    0:1,
    1:1,
    2:2
}
for(let i=3; i<10; i++) {
    facts[i] = factorial(i)
}

for(let x=3; x<limit; x++) {
    let sum = 0
    let digits = x.toString().split('')
    digits.forEach(d => sum += facts[d])
    if(sum == x) ans+=x
}
console.log(ans)