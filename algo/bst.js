/*
*   MEAN algo - BST
*   shawn chen
*   oct 10, 2018
*   codingDojo
*
*/

class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

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
                    if (runner.left == null) {
                        runner.left = new Node(val);
                        return this;
                    } else {
                        runner = runner.left;
                    }
                } else {
                    if (runner.right == null) {
                        runner.right = new Node(val);
                        return this;
                    } else {
                        runner = runner.right;
                    }
                }
            }
        }
    }
}

var stree = new BST();
stree.insert(30).insert(10);

