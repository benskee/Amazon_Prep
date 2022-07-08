var levelOrderBottom = function(root) {
    if(!root) return []
    let queue = [root]
    let ans = []
    while(queue.length) {
        let size = queue.length
        let current = []
        while(size--) {
            let node = queue.shift()
            current.unshift(node.val)
            if(node.right) queue.push(node.right)
            if(node.left) queue.push(node.left)
        }
        if(current.length) ans.unshift(current)
    }
    return ans
};