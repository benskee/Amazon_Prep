// Number spiral diagonals

let grid = [[1]]
let count = 2
let total = 1
const right = () => {
    for(let x=0; x<grid.length; x++) {
        grid[x].push(count)
        count++
    }
    grid.push([count])
    count++
}
const bottom = () => {
    for(let x=0; x<grid[0].length; x++) {
        grid[grid.length-1].unshift(count)
        count++
    }
}
const left = () => {
    for(let x=2; x<=grid.length; x++) {
        grid[grid.length-x].unshift(count)
        count++
    }
    grid.unshift([count])
    count++
}
const top = () => {
    for(let x=1; x<grid[1].length; x++) {
        grid[0].push(count)
        count++
    }
}

let num = 1001

while(grid.length<num) {
    right();
    bottom();
    left();
    top();
}
let len = grid.length
for(let d=0; d<len/2-1; d++) {
    let r = len-d-1
    total+=grid[d][d] + grid[d][r] + grid[r][d] + grid[r][r]
}
console.log(total)