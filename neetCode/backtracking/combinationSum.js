// Combination Sum - Medium 

const combinationSum = (candidates, target) => {
    let ans = []
    const dfs = (i, total, cur) => {
        if(total == target) {
            ans.push([...cur])
            return
        }
        if(total > target || i >= candidates.length) return

        cur.push(candidates[i])
        dfs(i, total + candidates[i], cur)
        cur.pop()
        dfs(i+1, total, cur )
    }

    dfs(0, 0, [])

    return ans
}

c1 = [2,3,6,7], t1 = 7
console.log(combinationSum(c1, t1))//[[2,2,3],[7]]