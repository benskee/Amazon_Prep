const numIslands = grid => {
    let h = grid.length
    let w = grid[0].length
    let ans = 0;

    const isLand = (x,y) => {
        if(x>=w || x<0 || y>=h || y<0 || grid[y][x] !== '1') return;
        grid[y][x] = '2'
        
        isLand(x-1, y)
        isLand(x, y-1)
        isLand(x+1, y)
        isLand(x, y+1)
    }

    for(let y=0; y<h; y++) {
        for(let x=0; x<w; x++){
            if(grid[y][x] == '1')
            ans++
            isLand(x, y)
        }
    }

    return ans
}

 grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

console.log(numIslands(grid1)) // 1
console.log(numIslands(grid2)) // 3