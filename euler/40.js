// Champernowne's constant
let num = '0'
let limit = 1000000
let ans = 1
let current = 1
let indexes = [100, 1000, 10000, 100000, 1000000]

while(num.length<=limit) {
    num += current.toString()
    current++
}

indexes.forEach(idx=> ans *= parseInt(num[idx]))

console.log(ans)
