// Koko Eating Bananas - Medium

const minEatingSpeed = (piles, h) => {
    const checkSpeed = speed => {
        let count = 0
        piles.forEach(pile => {
            count += Math.ceil(pile / speed)
        })
        return count
    }
    let l = 1
    let r = Math.max(...piles)
    let ans = r
    while (l <= r) {
        let mid = Math.ceil((l+r)/2)
        let cS = checkSpeed(mid)
        if(cS <= h) {
            if(mid < ans) ans = mid
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return ans
}

let piles1 = [3,6,7,11], h1 = 8
console.log(minEatingSpeed(piles1, h1))