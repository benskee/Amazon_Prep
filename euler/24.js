// Lexicographic permutations

let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let target = 999999
let ans = ''

const perms = len => {
    let total = 1
    for(let n=0; n<len; n++) {
        total *= len-n
    }
    return total
}

for(let i=9; i>=0; i--) {
    let x = Math.floor(target/perms(i)) || 0
    ans += digits[x].toString()
    digits = digits.filter(d=> d != digits[x])
    target %= perms(i)
}

console.log(parseInt(ans))