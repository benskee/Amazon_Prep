// Integer right triangles
let limit = 1001
let arr = Array(limit).fill(0)
let max = 3
let ans = 120

for(let p=1; p<=limit; p++) {
    let count = 0
    for(let a=1; a<=p; a++) {
        // ensure c >= b
        let bLimit = Math.floor((p-a)/2)+1
        for(let b=a; b<bLimit; b++) {
            let c = p - a - b
            if(a*a + b*b == c*c) {
                count++
            }
        }
    }
    if(count>max) {
        ans = p;
        max = count
    }
}


console.log(ans)
