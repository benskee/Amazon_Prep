// Lattice paths

const lattice = (height, width) => {
    let facts = {}
    let count = 0
    const fact = n => {
        console.log('n', n)
        if(n==1) return 1
        if(facts[n] != undefined) return facts[n]
        facts[n] = fact(n-1) * n
        console.log(facts)
    }
    console.log(fact(5))
    const move = (h, w) => {
        if(h + 1 <= height) { 
            move(h+1, w)
        }
        if(w + 1 <= width) { 
            move(h, w+1)
        }
        if(h == height && w == width) count++
    }
    move(0,0)
    return count
}

console.log(lattice(2,2))