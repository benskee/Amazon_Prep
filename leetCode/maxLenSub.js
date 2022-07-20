// Maximum Length of Subarray With Positive Product - Medium

const getMaxLen = nums => {
    let ans = 0
    let lens = []
    while(nums.indexOf(0) >= 0) {
        let zeroIndex = nums.indexOf(0)
        lens.push(nums.slice(0,zeroIndex))
        nums = nums.slice(zeroIndex+1)
    }
    if(nums.length) lens.push(nums)
    lens.sort((a,b)=>b.length - a.length)
    for(len of lens) {
        if(len.length<=ans) break
        let isNegative = false
        let firstNeg = null, lastNeg = null
        for(let i=0; i<len.length; i++) {
            if(len[i]<0) {
                isNegative = !isNegative
                if(firstNeg === null) firstNeg = i
                lastNeg = i
            }
        }
        if(isNegative) {
            let dropFirst = len.slice(firstNeg + 1).length
            let dropLast = len.slice(0,lastNeg).length
            ans = Math.max(ans, dropFirst, dropLast)
        } else {
            ans = len.length
        }
        
    }
    return ans
}

let n1 = [0,1,-2,-3,-4]

console.log(getMaxLen(n1))