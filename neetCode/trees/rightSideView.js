// Right Side View - Medium

const rightSideView = root => {
    let result = [];
    let queue = [];

    if (!root) return []

    queue.push(root);

    while (queue.length > 0) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (i === length - 1) {
                result.push(node.val);
            }
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    }
    return result;
};