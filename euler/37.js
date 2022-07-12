// Truncatable primes
let limit = 1000000;
let primes = {}
let array = Array(limit).fill(true)
let ans = 0

for(let i=2; i<Math.sqrt(limit); i++){
    for(let j=i*i; j<limit; j+=i){
        array[j] = false
    }
}

for(let i=2; i<limit; i++) {
    if(array[i]) primes[i] = true
}

const checkNum = num => {
    let len = num.toString().length
    let temp = num
    for(let i=len-1; i>=1; i--){
        if(primes[temp % 10**i] == undefined) return false
        temp %= 10**i
    }
    temp = num

    for(let i=1; i<len; i++){
        if(primes[Math.floor(temp/10)] == undefined) return false
        temp = Math.floor(temp/10)
    }
    return true
}

for(let i=10; i<limit; i++) {
    if(primes[i] != undefined) {
        if(checkNum(i)) ans += i
    }
}
console.log(ans)