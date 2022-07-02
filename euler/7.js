// 10001th prime

const nthPrime = num => {
    let count = 1
    const isPrime = n => {
        for(let i=2; i<=Math.sqrt(n); i++) {
            if(n % i == 0) return false
        }
        return true
    }
    let j = 3
    while(true) {
        if(isPrime(j)) count++
        if(count == num) return j
        j++
    }
}

console.log(nthPrime(10001))