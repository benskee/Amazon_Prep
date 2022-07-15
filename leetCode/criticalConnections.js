// Critical Connections in a Network

const criticalConnections = (n, connections) => {
    // create edge map which has list of connections for each node
    let edgeMap = {}
    for (let i = 0; i < n; i++)
        edgeMap[i] = []
    for (let [a,b] of connections)
        edgeMap[a].push(b), edgeMap[b].push(a)

    // array for when node is discovered
    let disc = new Array(n)
    // array for lowest reachable node without going through current node
    let low = new Array(n)
    let time = 1 
    let ans = []
    const dfs = (curr, prev) => {
        disc[curr] = low[curr] = time++
        for (let next of edgeMap[curr]) {
            if (!disc[next]) {
                dfs(next, curr)
                low[curr] = Math.min(low[curr], low[next])
            } else if (next !== prev)
             // set low to lowest discovery point of adjacent nodes
                low[curr] = Math.min(low[curr], disc[next])
            if (low[next] > disc[curr])
                ans.push([curr, next])
        }
    }
    dfs(0, -1)
    return ans
}

let n1 = 4
let conn1 = [[0,1],[1,2],[2,0],[1,3]]

// console.log(criticalConnections(n1, conn1)) //[[1,3]]

let n2 = 2
let conn2 = [[0,1]]
// console.log(criticalConnections(n2, conn2)) //[[0,1]]

let n3 = 6
let conn3 = [[0,1],[1,2],[2,0],[1,3],[3,4],[4,5],[5,3]]
console.log(criticalConnections(n3, conn3)) //[[1,3]]