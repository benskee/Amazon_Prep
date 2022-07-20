// Circular primes

let limit = 1000000
let arr = Array(limit).fill(true)
let sqrtLimit = Math.sqrt(limit)
let primes = {}
let ans = 0

for(let i=2; i<=sqrtLimit; i++) {
    if(arr[i]) {
        for(let j=i*i; j<limit; j+=i) {
            arr[j] = false
        }
    }
}

for(let i=2; i<limit; i++) {
    if(arr[i]) primes[i] = true
}

const s = num => {
    if(num.length == 1) return num
    let array = []
    for(let i=1; i<num.length; i++) {
        let perm = num.slice(i,num.length) + num.slice(0,i)
        array.push(perm)
    }
    return array
}

for(let i=2; i<limit; i++){
    if(primes[i] != undefined) {
        let isValid = true
        let perms = permutations(i.toString())
        for(let j=0; j<perms.length; j++) {
            if(primes[perms[j]] == undefined) {
                isValid = false
                break
            }
        }
        
        if(isValid) ans+=1
    }
}

console.log(ans);