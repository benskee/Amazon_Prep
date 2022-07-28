// Letter Combination of a Phone Number - Medium

const letterCombinations = digits => {
    if(!digits.length) return []
    const letters = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
    let ans = []

    const combos = (sub, nums) => {
        if(!nums.length) {
            ans.push(sub)
            return
        }
        let currentLetters = letters[parseInt(nums[0])]
        nums = nums.slice(1)
        for(let i=0; i<currentLetters.length; i++) {
            combos(sub+currentLetters[i], nums)
        }
    }
    combos('', digits)
    return ans
}

let d1 = '23'
console.log(letterCombinations(d1))