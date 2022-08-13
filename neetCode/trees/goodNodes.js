// Count Good Nodes in Binary Tree - Medium

const goodNodes = root => {
    if(!root.length) return 0
    let count = 0
    const dfs = (root, max) => {
        if(!root) return
        if(root.val >= max) {
            count++
            max = root.val
        }
        dfs(root.left, max)
        dfs(root.right, max)
    }
    dfs(root, root.val)
    return count
}