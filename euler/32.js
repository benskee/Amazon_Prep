// Pandigital products
let limit = 10000
let products = []

for(let i=1; i<limit; i++){
    for(let j=1; j<=Math.sqrt(i); j++) {
        if(i % j == 0) {
            let s = `${j}${i}${i/j}`
            if(s.length == 9){
                if(s.split('').sort().join('') == '123456789' && !products.includes(i)) {
                    products.push(i)
                }
            }
        }
    }
}

console.log(products.reduce((a,b)=>a+b))