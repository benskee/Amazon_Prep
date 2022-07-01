const evenFibs = cap => {
    let fibs = [2];
    let fibHash = {1:1, 2:2}
    let current = 0
    let n = 3
    while(current<cap) {
        fibHash[n] = fibHash[n-1] + fibHash[n-2]
        if(n % 3 == 2) fibs.push(fibHash[n])
        current = fibHash[n]
        n++
    }
    return fibs.reduce((a,b) => a + b)
}

console.log(evenFibs(4000000))