// Generate Parenthesis - Medium

const generateParenthesis = n => {
    let ans = []
    const pairs = (open, num, stack) => {
        if(open === 0 && num === 0) {
            ans.push(stack)
            return
        }
        if(open > num) return
        if(open === 0) {
            pairs(1, num, stack + '(')
            return
        } else {
            pairs(open+1, num, stack + '(')
            pairs(open-1, num-1, stack + ')')
        }
    }
    pairs(1, n, '(')

    return ans
}