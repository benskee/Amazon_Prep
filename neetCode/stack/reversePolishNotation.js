// Reverse Polish Notation - Medium

const evalRPN = tokens => {
    let stack = []
    let operands = "+-/*"
    for(let i=0; i<tokens.length; i++) {
        let t = tokens[i]
        if(!operands.includes(t)) {
            stack.push(parseInt(t))
        } else {
            let n2 = stack.pop()
            let n1 = stack.pop()
            if(t == "+") {
                stack.push(n1 + n2)
            }
            if(t == "-") {
                stack.push(n1 - n2)
            }
            if(t == "/") {
                stack.push(Math.trunc(n1 / n2))
            }
            if(t == "*") {
                stack.push(n1 * n2)
            }
        }
    }
    return stack.length ? stack[0] : 0
}

let t1 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
console.log(evalRPN(t1))