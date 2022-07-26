// Combination Sum II - Medium

const combinationSum2 = (candidates, target) => {
    candidates = candidates.sort((a,b)=>a-b)
    let ans = []
    const combos = (idx, targ, current) => {
        if(targ < 0 || idx > candidates.length) return
        if(targ == 0) {
            ans.push([...current])
            return
        }
        let prev = -1
        for(let i=idx; i<candidates.length; i++) {
            if(candidates[i] === prev) continue
            prev = candidates[i]
            current.push(candidates[i])
            combos(i+1, targ - candidates[i], current)
            current.pop()
        }
    }
    combos(0,target,[])
    return ans
}

let c1=[10,1,2,7,6,1,5]
let t1=8
console.log(combinationSum2(c1,t1))


let c2 = [2,5,2,1,2]
let t2 = 5
console.log(combinationSum2(c2,t2))