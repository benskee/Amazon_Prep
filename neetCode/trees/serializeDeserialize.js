// Serialize and Deserialize a binary search tree - hard

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let ans = ''
    let queue = [root]
    while(queue.length) {
        let node = queue.shift()
        if(node === null) {
            ans += 'null,'
        } else {
            ans += JSON.stringify(node.val) + ','
            queue.push(node.left)
            queue.push(node.right)
        }
    }
    ans = ans.slice(0, ans.length-1)
    while(ans.slice(ans.length-5, ans.length) === ',null') {
        ans = ans.slice(0, ans.length-5)
    }
    return ans
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data == null) return null
    let arr = data.split(',')
    let levels = [1]
    let count = 0
    for(let i=0; i<arr.length; i++) {
        if(count == levels[levels.length-1] * 2) {
            levels.push(count)
            count = 0
        }
        if(arr[i] !== null) count++
    }
    let prev = new Array(levels[levels.length-1]).fill(null)
    while(arr.length>1) {
        let temp = []
        let curr = arr.slice(arr.length-levels.pop())
        arr = arr.slice(0,arr.length-curr.length)
        curr.forEach(value => {
            let node = new TreeNode(value)
            node.left = prev.shift()
            node.right = prev.shift()
            temp.push(node)
        })
        prev = temp
    }
    return prev[0]
};
