// Sum of Subarray Ranges - Medium

const subArrayRanges = nums => {
    let ans = 0
    // let perms = []
    for(let i=0; i<nums.length; i++) {
        let min = nums[i]
        let max = nums[i]
        for(let j=i; j<nums.length; j++) {
            if(nums[j]<min) min = nums[j]
            if(nums[j]>max) max = nums[j]
            ans += max-min
        }
    }
    // perms.forEach(num=> {
    //     if (num.length != 1) {
    //         num.sort((a,b)=>a-b)
    //         ans+= num[num.length-1] - num[0]
    //     }
    // })
    return ans
}

let nums1 = [1,2,3]
console.log(subArrayRanges(nums1)) //4