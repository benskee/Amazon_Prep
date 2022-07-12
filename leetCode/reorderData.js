// Reorder data in log files

const reorderLogFiles = logs => {
    let ans = []
    let nums = []
    let words = []
    logs.forEach(log => {
        let tag = log.split(' ', 2)
        if(parseInt(tag[1]) || tag[1] == 0){
            nums.push(log)
        } else {
            words.push(log)
        }
    })
    words.sort((a,b)=> {
        let aTag = a.split(' ',1)[0]
        let aText = a.slice(aTag.length)
        let bTag = b.split(' ',1)[0]
        let bText = b.slice(bTag.length)
        if(aText == bText) return aTag>bTag ? 1 : -1
        return aText.localeCompare(bText)
    })
    ans = [...words, ...nums]
    return ans
}

const log3 = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]

console.log(reorderLogFiles(log3))

const log1 = ["7 96", "d 0 5", "r 439", "1 bw", "6 dkf"]
//["1 bw","6 dkf","7 96","d 0 5","r 439"]
console.log(reorderLogFiles(log1))

const log2 = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
//["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
console.log(reorderLogFiles(log2))