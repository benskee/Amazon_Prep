// Highly divisible triangle number

const divTri = num => {
    const findFactors = n => {
        let factors = 2
        for(let j=2; j<=Math.sqrt(n); j++) {
            if(j == Math.sqrt(n)) {
                factors++
            } else if(n % j == 0) factors += 2
        }
        return factors
    }

    let current = 28
    let i = 8
    while(true) {
        current += i;
        if(findFactors(current) > 500) return current
        i++
    }
}

console.log(divTri(500))