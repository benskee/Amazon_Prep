// Amicable numbers

const sumOfDivisors = n => {
    let sum = 1
    for(let j=2; j<=n/2; j++) {
        if(n % j == 0) sum += j;
    }
    return sum
}
let ans = 0;
let amicables = []
for(let i=3; i<10000; i++) {
    let s = sumOfDivisors(i)
    let si = sumOfDivisors(s)
    if(si == i && i != s) ans += i
}

console.log(ans)