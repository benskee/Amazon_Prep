let terms = {}

let count = 0
let num = 100

for(let i=2; i<=num; i++){
    for(let j=2; j<=num; j++) {
        if(terms[i**j] == undefined) {
            terms[i**j] = (i,j)
            count++
        }
        if(terms[j**i] == undefined) {
            terms[j**i] = (j,i)
            count++
        }
    }
}

console.log(count)