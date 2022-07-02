// Pythagorian triplet

const pyTrip = num => {
    let [a, b, c] = [1, 2, 3];
    while(true) {
        while(true) {
            c = num - (a+b)
            if(c<=b) break
            if(a**2 + b**2 == c**2) return a*b*c
            b++
        }
        a++
        b = a+1
        c = a+2
    }
}

console.log(pyTrip(1000))