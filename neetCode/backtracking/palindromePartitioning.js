// Palindrome Partitioning - Medium

const partition = s => {
    let ans = []
    const isPalindrome = str => {
        for(let i=0; i<str.length/2; i++) {
            if(str[i] !== str[str.length-i-1]) return false
        }
        return true
    }

    const part = (str, current) => {
        if(!str.length) {
            ans.push([...current])
            return
        }
        let sub = ''
        for(let i=0; i<str.length; i++) {
            sub += str[i]
            if(isPalindrome(sub)) {
                current.push(sub)
                part(str.slice(i+1), current)
                current.pop()
            }
        }
    }

    part(s, [])
    return ans
}

let s1 = "aab"
console.log(partition(s1))