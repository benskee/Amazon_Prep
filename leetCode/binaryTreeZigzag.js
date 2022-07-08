var zigzagLevelOrder = function(root) {
    if(!root) return []
    let isEven = false
    let ans = []
    let queue = [root]
    while(queue.length) {
        queue = queue.reverse()
        let current = []
        let size = queue.length
        for(let i=0; i<size; i++) {
            let node = queue.shift()
            current.push(node.val)
            if(!isEven) {
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            } else {
                if(node.right) queue.push(node.right)
                if(node.left) queue.push(node.left)
            }
        }
        ans.push(current)
        isEven = !isEven
    }
    return ans
};