// Quadratic primes
let max = 0
let ans = 0

const isPrime = num => {
    if(num <= 1) return false
    if(num <= 3) return true
    for(let x=3; x<=Math.sqrt(num); x+=2) {
        if(num % x == 0) return false
    }
    return true
}

for(let i=-1000; i<1000; i++){
    for(let j=-1000; j<1000; j++) {
        let count = 0
        let n = 0
        while(true){
            let m = n*n + i*n + j
            if(isPrime(Math.abs(m))) {
                count++
                n++
            } else {
                break
            }
        }
        if(count>max) {
            ans = i*j
            max = count
        }
    }
}

console.log(ans)