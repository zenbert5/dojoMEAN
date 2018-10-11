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
    inOrder(node) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.val);
            this.inOrder(node.right);
        }
    }
    preOrder(node) {
        if (node) {
            console.log(node.val);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    postOrder(node) {
        if (node) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.val);
        }
    }
    findMinNode(node) {
        // if left of a node is null 
        // then it must be minimum node 
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }
    removeNode(node, val) {
        if (node === null)
            return null;
        else if (val < node.val) {
            node.left = this.removeNode(node.left, val);
            return node;
        }
        else if (val > node.val) {
            node.right = this.removeNode(node.right, val);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            // Deleting node with two children 
            // minumum node of the rigt subtree 
            // is stored in aux 
            var aux = this.findMinNode(node.right);
            node.val = aux.val;
            node.right = this.removeNode(node.right, aux.val);
            return node;
        }
    }
}



var stree = new BST();
stree.insert(30).insert(10).insert(20).insert(15).insert(42).insert(9);
console.log('\nperforming in order traversal');
stree.inOrder(stree.root);
console.log('\nperforming in prerder traversal');
stree.preOrder(stree.root);
console.log('\nperforming in postorder traversal');
stree.postOrder(stree.root);

