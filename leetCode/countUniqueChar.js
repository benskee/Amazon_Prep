// Count Unique Characters of All Substings of a Given String - hard

const uniqueLetterString = s => {
    let ans = 0
    let subs = []
    const countUnique = sub => {
        let count = 0
        for(l of sub) {
            if(sub.indexOf(l) === sub.lastIndexOf(l)) {
                count++
            }
        }
        return count
    }
    // for(let i=0; i<s.length; i++) {
        let letters = {}
        let count = 0
        for(let j=0; j<s.length; j++) {
            console.log(s[j])
            if(letters[s[j]] == undefined) {
                count++
                ans+=count
                letters[s[j]] = 1
            } else {
                if(letters[s[j]] == 1) {
                    count--
                    letters[s[j]] = 2
                }
            }
        }
        ans += count
    // }
    // for(str of subs) {
    //     ans += countUnique(str)
    // }
    return ans
}

let s1 = "ABA"
console.log(uniqueLetterString(s1))