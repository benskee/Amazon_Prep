// Merge Intervals - Medium

const merge = intervals => {
    if(intervals.length <= 1) return intervals
    let ans = []
    intervals = intervals.sort((a,b) => a[0] - b[0])
    let prevStart = intervals[0][0]
    let prevEnd = intervals[0][1]
    console.log(intervals)
    for(let i=1; i<intervals.length; i++) {
        
        let inter = intervals[i]

        if(inter[0]<=prevEnd && inter[1] >= prevStart) {
            prevEnd = Math.max(prevEnd, inter[1])
            prevStart = Math.min(prevStart, inter[0])
        } else {
            ans.push([prevStart, prevEnd])
            prevStart = inter[0]
            prevEnd = inter[1]
        }
        if(i==intervals.length-1) {
            ans.push([prevStart, Math.max(prevEnd, inter[1])])
            break
        }
    }
    return ans
}

// let intervals1 = [[1,3],[2,6],[8,10],[15,18]]
// console.log(merge(intervals1))// [[1,6],[8,10],[15,18]

// let int1 = [[2,3],[4,5],[6,7],[8,9],[1,10]]
// console.log(merge(int1)) ///[1,10]
let int1 = [[1,4],[0,4]]
console.log(merge(int1)) ///[0,4]