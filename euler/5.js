// Smallest multiple

const smallestMult = num => {
    let ans = 1

    const gcd = (a, b) => {
        if(b>a) {
            let temp = a;
            a = b;
            b = temp;
        }
        while (true) {
            if (b == 0) return a;
            a %= b;
            if (a == 0) return b;
            b %= a;
        }
    }

    for(let i=1; i<num; i++) {
        ans *= Math.floor(i/gcd(ans, i)) 
    }
    
    return ans
}

console.log(smallestMult(20)) 