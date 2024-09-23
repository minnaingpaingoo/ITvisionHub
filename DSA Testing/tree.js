/*Tree Instruction */
/*1. Create a node class. The constructor should accept an argument that get the 
assigned to the data property and initialize an empty array for storing
children. The node class should have methods 'add' and 'remove' */
/*2. Create a tree class. The tree constructor should initialize a 'root' property
to null. */
/*3. Implement 'traverseBFS' and 'traverseDFS' on the tree class */

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        this.children.push(new Node(data));
    }
    remove(data) {
        this.children = this.children.filter((node) => {
            return (node.data !== data);
        })
    }
}

class Tree {
    constructor() {
        this.root = null
    }
    traverseBFS() {
        let arr = [this.root];
        let bfsResult = [];
        while (arr.length) {
            let node = arr.shift();
            if (node.children) {
                arr.push(...node.children);
            }
            bfsResult.push(node.data);
        }
        return bfsResult;
    }
    traverseDFS() {
        let arr = [this.root];
        let dfsResult = [];
        while (arr.length) {
            let node = arr.shift();
            if (node.children) {
                arr.unshift(...node.children);
            }
            dfsResult.push(node.data);
        }
        return dfsResult;
    }
}

/*Given the root node of a tree, return an array where
each element with the width of the tree at each level  */
/*
        Given Tree:
            5
        /   |   \
        10  -3  8
    /   |   \   |
    7   6   14  2
    arr = [1,3,4];

*/
function getTreeLevelWidth(root) {
    let counter = [0];
    let arr = [root, 's'];
    while (arr.length > 1) {
        let node = arr.shift();
        if (node === 's') {
            arr.push('s');
            counter.push(0);
        } else {
            if (node.children.length) {
                arr.push(...node.children);
            }
            counter[counter.length - 1]++;
        }
    }
    return counter;
}

const node = new Node(5);
node.add(10);
node.add(-3);
node.add(8);
node.children[0].add(7);
node.children[0].add(6);
node.children[0].add(14);
node.children[2].add(2);

const tree = new Tree();
tree.root = node;
// console.log("============================");
// console.log("BFS Traversal: ", tree.traverseBFS());
// console.log("============================");
// console.log("DFS Traversal: ", tree.traverseDFS());
// console.log("============================");
// console.log("Tree Level Width: ", getTreeLevelWidth(tree.root));