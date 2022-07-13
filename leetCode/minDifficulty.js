// Minimum Difficulty of a Job Schedule

const minDifiiculty = (jobDifficulty, d) => {
    let memo = {}
    let numJobs = jobDifficulty.length

    if(numJobs < d) return -1


    // Use dynamic programming to check every possible combination
    // and find the best answer
    const dp = (day, cut) => {
        if(memo[[day, cut]] != undefined) return memo[[day, cut]]
        if(day == 1) {
            return Math.max(...jobDifficulty.slice(cut))
        }

        let maxSoFar = 0
        let answer = Infinity
        for(let j=cut; j<numJobs-day+1; j++) {
            maxSoFar = Math.max(maxSoFar, jobDifficulty[j])
            answer = Math.min(answer, maxSoFar + dp(day-1, j+1))
        }
        memo[[day, cut]] = answer
        return answer
    }
    return dp(d,0)
}

let dif1 = [6,5,4,3,2,1]
let d1 = 2
// console.log(minDifiiculty(dif1, d1)) //7


let dif2 = [380,302,102,681,863,676,243,671,651,612,162,561,394,856,601,30,6,257,921,405,716,126,158,476,889,699,668,930,139,164,641,801,480,756,797,915,275,709,161,358,461,938,914,557,121,964,315]
let d2 =10
console.log(minDifiiculty(dif2, d2))