class Stack {
    constructor() {
        this.data = [];
    }
    add(record) {
        this.data.push(record);
    }
    remove() {
        this.data.pop();
    }
    peek() {
        return this.data.length > 0;
    }
}
//Testing Stack 
// stack = new Stack();
// for (let i = 1; i < 6; i++) {
//     stack.add(i);
// }
// console.log("==========Adding item into an array using stack pattern===============")
// console.log(stack);
// console.log("==========Removing item from an array using stack pattern===============")
// stack.remove();
// console.log(stack);
module.exports = Stack;