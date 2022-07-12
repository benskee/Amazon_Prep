// Pandigital prime

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

const isPrime = num => {
    if(num <= 1) return false
    if(num <= 3) return true
    if(num % 2 == 0) return false
    for(let x=3; x<=Math.sqrt(num); x+=2) {
        if(num % x == 0) return false
    }
    return true
}

let digits = "123456789"
let max = 0
for(let i=digits.length; i>=4; i--) {
    let arr = permutations(digits.slice(0,i).split('')).map(a => a.join(''))
    for(let j=0; j<arr.length; j++) {
        let num = parseInt(arr[j])
        if(isPrime(num) && num>max) max = num
    }
}

console.log(max)