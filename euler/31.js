// Coin sums

let target = 200
let coins = [1, 2, 5, 10, 20, 50, 100, 200]

let stack = Array(target).fill(0)
stack.unshift(1)

coins.forEach(coin=>{
    for(let j=0; j<=target-coin; j++)
        stack[j + coin] += stack[j]
})

console.log(stack[stack.length-1])