// Last Stone Weight - Easy

const lastStone = stones => {
    while(stones.length>1) {
        stones.sort((a,b)=>a-b)
        let y = stones.pop()
        let x = stones.pop()
        if(x == y) continue
        stones.push(y-x)
    }
    return stones[0] || 0
}