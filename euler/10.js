// Summation of primes

const sumPrimes = num => {
    let arr = [];
    let upperLimit = Math.sqrt(num);
    let primes = [];

    for(let i=0; i<num; i++) {
        arr.push(true);
    }

    for(let i=2; i<upperLimit; i++) {
        if(arr[i]) {
            for(let j=i**2; j<num; j+=i) {
                arr[j] = false
            }
        }
    }

    for(let i=2; i<num; i++) {
        if(arr[i]) primes.push(i);
    }

    return primes.reduce((a,b) => a + b)
}

console.log(sumPrimes(2000000))