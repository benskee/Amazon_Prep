
// Sieve of Eratosthenes - find all primes under n
const eratosthenes = n => {
    let array = Array(n).fill(true)
    let upperLimit = Math.sqrt(n)
    let output = [];

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
        if(array[i]) output.push(i);
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

console.log('GCD', greatestCommonDenominator(54, 99))

const permutations = (array, n, results = []) => {
    const swap = (array, pos1, pos2) => {
        let temp = array[pos1];
        array[pos1] = array[pos2];
        array[pos2] = temp;
    };
    n = n || array.length;
    if (n === 1) {
        results.push(array.slice());
    } else {
        for (let i = 1; i <= n; i += 1) {
        permutations(array, n - 1, results);
        let j = n % 2 ? 1 : i
        swap(array, j - 1, n - 1);
        }
    }
    return results;
};

console.log('permutations', permutations(['a', 'b', 'c', 'd']).map(a => a.join(' ')));


const isPrime = num => {
    if(num <= 1) return false
    if(num <= 3) return true
    if(num % 2 == 0) return false
    for(let x=3; x<=Math.sqrt(num); x+=2) {
        if(num % x == 0) return false
    }
    return true
}