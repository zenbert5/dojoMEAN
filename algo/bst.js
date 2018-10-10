
class BST {
    constructor() {
        this.root = null;
    }
    insert(val) {
        if (this.root == null) {
            this.root = new Node(val);
            return this;
        } else {
            let runner = this.root;
            while (runner != null) {
                if (runner.val > val) {
                    runner = runner.left;
                } else {
                    runner = runner.right
                }
            }
            runner = new Node(val);
            return this;
        }
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

