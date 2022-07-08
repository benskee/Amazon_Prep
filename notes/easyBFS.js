var levelOrder = function(root) {
    if(!root) return []
    const res = []
    const queue = [root]
    while(queue.length){
        const size = queue.length
        const curlvl = []
		// we only want to run most recent length of queue which is "size"
		// and that consist only the same level of tree nodes
        for(let i = 0; i < size; i++){
            const node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            curlvl.push(node.val)
        }
        res.push(curlvl)
    }
    return res
};