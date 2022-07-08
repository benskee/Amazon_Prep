// factorial digit sum
let x=100
let fact=[1]
while(x>1) {
    let overflow = 0
    let len = fact.length
    for(let i=0; i<len; i++) {
        let current = (fact[i] * x) + overflow
        fact[i] = current % 10;
        overflow = Math.floor(current / 10)
        if(i==fact.length-1) {
            if(overflow < 10) {
                fact.push(overflow)
            } else {
                let digits = overflow.toString()
                digits = digits.split('')
                for(let j=0; j<digits.length; j++) {
                    fact.push(parseInt(digits[digits.length - (j+1)]))
                }
            }
            overflow = 0
        }
    }
    x -= 1
}

let ans = fact.reduce((a,b) => parseInt(a) + parseInt(b))

console.log(ans)

// 100
// 9900
// 970200
// 94109400