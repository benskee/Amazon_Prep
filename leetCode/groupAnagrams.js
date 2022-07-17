// Group Anagrams - Medium

const groupAnagrams = strs => {
    let ans = []
    let anagrams = {}
    for(let i=0; i<strs.length; i++) {
        let str = strs[i]
        let sorted = str.split('').sort((a,b)=>a>b?1:-1)
        if(anagrams[sorted] == undefined) {
            anagrams[sorted] = [i]
        } else {
            anagrams[sorted].push(i)
        }
    }
    for(ana in anagrams) {
        let grams = []
        anagrams[ana].forEach(gram => {
            grams.push(strs[gram])
        })
        ans.push(grams)
    }
    return ans
}

let strs1 = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs1))// [["bat"],["nat","tan"],["ate","eat","tea"]]