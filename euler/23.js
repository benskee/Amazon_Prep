// Non-abundant sums

let abs = [];
let limit = 28123
let total = 0

const checkAbundance = n => {
    let sum = 1
    for(let x=2; x<=n/2; x++) {
        if(n % x == 0) {
            sum += x;
        }
    }
    return sum>n
}

for(let i=12; i<limit; i++) {
    if(checkAbundance(i)) abs.push(i)
}

let absums = new Array(limit).fill(false)

for(let j=0; j<abs.length; j++) {
    for(let m=0; m<abs.length; m++) {
        if(abs[j]+abs[m+j] >= limit) break;
        absums[abs[j]+abs[m+j]] = true
    }
}

for(let n=0; n<absums.length; n++) {
    if(!absums[n]) total += n
}

console.log(total)