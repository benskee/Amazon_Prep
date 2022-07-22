// permutations - Medium

const permutations = (nums) => {
    let result = []

    if(nums.length == 1) return [[...nums]]
    
    for(let i=0; i<nums.length; i++) {
        let n = nums.shift()
        let perms = permutations(nums)

        perms.forEach(perm => {
            perm.push(n)
        })
        result.push(...perms)
        nums.push(n)
    }

    return result
}

console.log(permutations([1,2,3]))