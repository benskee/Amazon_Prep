// Task Scheduler - Medium

const leastInterval = (tasks, n) => {
    let count = tasks.length
    let rest = Array(n).fill(null)
    let taskMap = {}
    for(const task of tasks){
        if(taskMap[task] === undefined) {
            taskMap[task] = 1
        } else {
            taskMap[task] += 1
        }
    }
    let taskSet = new Set(tasks)
    let taskCount = []
    for(const task of taskSet) {
        taskCount.push([task, taskMap[task]])
    }
    taskCount = taskCount.sort((a,b) => b[1] - a[1])
    
    while(taskCount.length) {
        taskCount = taskCount.sort((a,b) => b[1] - a[1])
        console.log(taskCount, rest)
        for(let i=0; i<taskCount.length; i++) {
            if(!rest.includes(taskCount[i][0])){
                rest.push(taskCount[i][0])
                if(taskCount[i][1] === 1) {
                    if(taskCount.length === 1) {
                        taskCount.pop()
                    } else {
                        taskCount.splice(i, 1)
                    }
                } else {
                    taskCount[i][1]--
                }
                break
            }
        }
        if(rest.length > n) {
            rest.shift()
        } else {
            rest.push(null)
            rest.shift()
            count++
        }
    }
    return count
}

tasks1 = ["A","A","A","B","B","B", "C","C","C", "D", "D", "E"], n1 = 2
console.log(leastInterval(tasks1, n1))