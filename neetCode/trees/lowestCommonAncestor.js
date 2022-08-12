// Lowest Common Anvestor - Easy 

const lowestCommonAncestor = (root, p, q) => {
    while (root !== null) {
        if (root.val < p.val && root.val < q.val) {
            root = root.right;
        } else if (root.val > p.val && root.val > q.val) {
            root = root.left;
        } else {
            return root;
        }
    }
};