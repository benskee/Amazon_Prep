//  Search Suggestions System - Medium

const suggestedProducts = (products, searchWord) => {
    let ans = []
    for(let i=0; i<searchWord.length; i++) {
        let q = searchWord.slice(0,i+1)
        let prods = products.filter(prod=> {
            return prod.slice(0,i+1) == q
        })
        prods.sort((a,b)=>a>b?1:-1)
        if(prods.length>3) {
            prods = prods.slice(0,3)
        }
        ans.push(prods)
    }
    return ans
}

let p1=["mobile","mouse","moneypot","monitor","mousepad"]
let s1="mouse"
console.log(suggestedProducts(p1,s1))
// [
// ["mobile","moneypot","monitor"],
// ["mobile","moneypot","monitor"],
// ["mouse","mousepad"],
// ["mouse","mousepad"],
// ["mouse","mousepad"]
// ]

