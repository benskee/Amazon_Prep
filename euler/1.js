const multiples = n => {
    let sum = 0

    for (let x=1; x<n; x++) {
        if (x % 3 == 0) {
            sum = sum + x
        } else if (x % 5 == 0) {
            sum = sum + x
        }
    }
    return sum
}

console.log(multiples(1000))