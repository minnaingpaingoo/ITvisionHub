/*  1. Create Binary Search Tree with given number 5,2,8,1,7,3,9
    2. Insert number -3 and 11 to the BST.
    3. Check the given integer n contains in the BST. */

class Node {
    constructor(root) {
        this.root = root;
        this.left = null;
        this.right = null;
    }
    create(data) {
        if (data < this.root && this.left) {
            this.left.create(data);
        } else if (data < this.root) {
            this.left = new Node(data);
        } else if (data > this.root && this.right) {
            this.right.create(data);
        } else if (data > this.root) {
            this.right = new Node(data);
        }
    }
    find(data){
        if(data === this.root){
            return this;
        }
        if(data < this.root && this.left){
            return (this.left.find(data));
        }else if (data > this.root && this.right){
            return (this.right.find(data));
        }
        return null;
    }
}

const node = new Node(5);
node.create(2);
node.create(8);
node.create(1);
node.create(7);
node.create(3);
node.create(9);
node.create(-3);
node.create(11);
console.log("==========================");
console.log(node);
console.log("==========================");
console.log(node.find(8));