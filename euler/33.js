// Digit cancelling fractions
let limit = 100
let ans = []

let checkFract = (num, denom) => {
    let f = num/denom
    let n1 = Math.floor(num/10)
    let n2 = num % 10
    let d1 = Math.floor(denom/10)
    let d2 = denom % 10
    if(n1 == d1 && n2/d2 == f) return true
    if(n1 == d2 && n2/d1 == f) return true
    if(n2 == d1 && n1/d2 == f) return true
    if(n2 == d2 && n1/d1 == f) return true
    
    return false
}


for(let i=11; i<limit; i++) {
    if(i % 10 != 0 && i % 11 != 0) {
        for(let j=i+1; j<limit; j++) {
            if(checkFract(i,j)) ans.push([i,j])
        }
    }
}
let num = 1
let denom = 1
ans.forEach(f=>{num*=f[0]; denom*=f[1]})

// GCD
const gcd = (x, y) => {
    while(x) {
        let t = x;
        x = y % x;
        y = t;
    }
    return y
}


console.log(ans)
console.log(denom/gcd(num, denom))