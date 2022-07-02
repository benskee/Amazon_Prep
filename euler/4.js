// Largest palindrome product

const largestPal = num => {
    let highest = 0;
    for(let i=num; i>0; i--) {
        for(let j=num; j>0; j--) {
            let current = i*j
            if(current < highest) break

            let rev = parseInt(current.toString().split('').reverse().join(''))
            if(rev == current) {
                highest = rev;
                break
            }
        }
    }
    return highest
}

console.log(largestPal(999))