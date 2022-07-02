
// Sieve of Eratosthenes - find all primes under n
const eratosthenes = n => {
    let array = []
    let upperLimit = Math.sqrt(n)
    let output = [];

    for (let i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (let i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (let j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (let i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};



const greatestCommonDenominator = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {let temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
         b %= a;
    }
}

console.log(greatestCommonDenominator(54, 99))