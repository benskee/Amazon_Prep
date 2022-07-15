// Pairs of Songs WIth Total Durations Divisible by 60 - Medium

const numPairDivisibleBy60 = time => {
    let ans = 0
    let seen = {}
    for(let i=0; i<time.length; i++) {
        let r = time[i] % 60
        if(seen[r] != undefined) {
            seen[r]++
        } else {
            seen[r] = 1
        }
    }

    for(let t=1; t<30; t++) {
        if(seen[60-t] != undefined && seen[t] != undefined) {
            ans+= seen[60-t] * seen[t]
        }
    }
    let perms = num => {
        if(num<1) return 0
        let total = 0
        for(let n=0; n<num; n++) {
            total += num-n
        }
        return total
    }
    if(seen[0] != undefined) ans += perms(seen[0]-1)

    if(seen[30] != undefined) ans += perms(seen[30]-1)
    return ans
}

// console.log(numPairDivisibleBy60([30,20,150,100,40]))
console.log(numPairDivisibleBy60([60,60,60]))

// let t1 = [418,204,77,278,239,457,284,263,372,279,476,416,360,18]
// console.log(numPairDivisibleBy60(t1))
