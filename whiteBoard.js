const findIslands = grid => {

let numIslands = 0



//mapping an island

	const mapIsland = (x,y) => {

		grid[y][x] = 'x'	

		if(y > 0 && grid[y-1][x] === "1") mapIsland(x, y-1)

		if(y < grid.length-1 && grid[y+1][x] === "1") mapIsland(x, y+1)

		if(x > 0 && grid[y][x-1] === "1") mapIsland(x-1, y)

		if(x < grid[y].length-1 && grid[y][x+1] === "1") mapIsland(x+1, y)

	}



//checking each coord

for(let i=0; i<grid.length; i++) {

	for(let j=0; j<grid[i].length; j++) {

		if(grid[i][j]=== "1") {

			numIslands++

			mapIsland(j,i)

		}	

	}

}



return numIslands

}

grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

console.log(findIslands(grid2)) // 3