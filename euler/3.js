const largestPrime = num => {
    const findFactor = n => {
        for(let x=2; x<=parseInt(Math.sqrt(n)); x++) {
            if (n % x == 0) return x
        }
        return n
    }

    while(true) {
        let factor = findFactor(num)
        if(factor >= num) return factor
        num = num/factor
    }
}

console.log(largestPrime(600851475143))