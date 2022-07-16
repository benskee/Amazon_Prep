// Word Search - Medium

const exist = (board, word) => {
    let ans = false
    const isValid = (x,y) => {
        return x>=0 && x<board[0].length && y>=0 && y<board.length
    }
    
    const checkAdjacent = (board, sub, y, x) => {
        if(!sub.length) return true
        if(!isValid(x,y) || board[y][x] !== sub[0]) return false

        const curChar = board[y][x];
        const newWord = sub.slice(1);

        board[y][x] = 0; // Disable the current character
        
        // Check if neighbors are fruitful
        const results = checkAdjacent(board, newWord, y + 1, x) ||
            checkAdjacent(board, newWord, y - 1, x) ||
            checkAdjacent(board, newWord, y, x + 1) ||
            checkAdjacent(board, newWord, y, x - 1);

        // Enable current character
        board[y][x] = curChar;

    return results;
    }

    for (let row = 0; row < board.length; row++) {
        for (let col  = 0; col < board[0].length; col++) {
            if (checkAdjacent(board, word, row, col)) ans = true;
        }
    }

    return ans
}



let b1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let w1 = "ABCCED"
console.log(exist(b1, w1))