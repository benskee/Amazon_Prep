// N-Queens -Hard

const solveNQueens = n => {
    let ans = []
    let start = Array(n).fill(Array(n).fill('.'))

    const checkBoard = (board, x0, y0) => {
        let x = x0, y = y0
        while(x>=0 && y>=0) {
            if(board[y][x] === 'Q') return false
            x--
            y--
        }
        x = x0, y = y0
        while(x<n && y>=0) {
            if(board[y][x] === 'Q') return false
            x++
            y--
        }
        x = x0, y = y0
        while(y>=0) {
            if(board[y][x] === 'Q') return false
            y--
        }
        return true
    }    

    const placeQs = (board, row) => {
        if(row === n) {
            let arr = []
            board.forEach(answer => arr.push(answer.join('')))
            ans.push(arr)
            return
        }
        for(let col=0; col<n; col++) {
            if(checkBoard(board, col, row)) {
                let tempBoard = [...board]
                let tempRow = [...board[row]]
                tempRow[col] = 'Q'
                tempBoard[row] = tempRow
                placeQs(tempBoard, row+1)
            }
        }
    }

    placeQs(start, 0)

    return ans
}

let n1=4
console.log(solveNQueens(4))