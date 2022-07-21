// Word Break - Medium

const wordBreak = (s, wordDict) => {
    let ans = false
    let maxWord = 0
    let seen = Array(s.length).fill(false)
    wordDict.forEach(word => maxWord = Math.max(maxWord, word.length))

    const wB = s => {
        if(seen[s.length]) return
        if(wordDict.includes(s)) {ans = true; return true}
        let i = maxWord
        while(i>=0){
            let str = s.slice(0,i)
            if(wordDict.includes(str)) {
                if(wB(s.slice(i))) return true
            }
            i--
        }
        seen[s.length] = true
    }

    wB(s)
    return ans
}

let s1="leetcode", w1 =['leet','code']
console.log(wordBreak(s1,w1))

let s2 = "catsandog", w2 = ["cats","dog","sand","and","cat"]
console.log(wordBreak(s2,w2))

let s3="goalspecial"
let w3=["go","goal","goals","special"]
console.log(wordBreak(s3,w3))