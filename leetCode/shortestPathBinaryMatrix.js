// BFS

const shortestPath = grid => {
    let ans = -1
    if(grid[0][0] == 1) return ans
    let visited = ['0,0'];
    let queue = [[0,0,1]];
    let len = grid.length;
    let moves = [-1, 0, 1]

    const checkLoc = (x,y) => 0 <= x && x < len && 0 <= y && y < len && grid[y][x] == 0 && !visited.includes(`${x},${y}`)

    while(ans < 0 && queue.length) {
        let coord = queue.shift()
        for(let i=0; i<3; i++) {
            for(let j=0; j<3; j++) {
                let dx = coord[0]+moves[i]
                let dy = coord[1]+moves[j]
                let dist = coord[2] + 1
                if(!checkLoc(dx,dy)) continue;
                if(dx == len-1 && dy == len-1) ans = dist
                queue.push([dx,dy,dist])
                visited.push(`${dx},${dy}`)
            }
        }
    }
    return ans

    // const validMoves = loc => {
    //     let y = loc[0]
    //     let x = loc[1]
    //     let moves = [-1, 0, 1]
    //     for(let i=0; i<3; i++) {
    //         for(let j=0; j<3; j++) {
    //             let dx = x+moves[i]
    //             let dy = y+moves[j]
    //             if(dy == height-1 && y == width-1) {ans = loc[2] + 1; console.log('loc', loc, ans)}
    //             if(dy >= 0 && dy < height) {
    //                 if(dx >= 0 && dx < width) {
    //                     if(!visited.filter(coord => coord[0] == dy && coord[1] == dx).length){
    //                        console.log(dy,dx)
    //                         if(grid[dy][dx] != 1){
    //                             queue.push([dy,dx,loc[2]+1])
    //                             visited.push([dy,dx])
    //                             console.log(queue)
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    
}

let grid1 = [[0,1], [1,0]]

console.log(shortestPath(grid1))