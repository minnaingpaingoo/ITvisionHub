/* Write a function to convert queue data structure using two stacks.
queue.add(1);
queue.add(2);
queue.add(3);
queue.remove(); //1
queue.remove(); //2
queue.remove(); //3
*/
const Stack = require('./stack');
class Queue {
    constructor() {
        this.queue = [];
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    add(record) {
        this.stack1.data.push(record);
    }
    remove() {
        this.refill(this.stack1, this.stack2);
        if (this.stack2.peek()) {
            const record = this.stack2.data.pop();
            this.queue.unshift(record);
            //this.queue.unshift(this.stack2.data.pop()); //same as the above
        }
        this.refill(this.stack2, this.stack1);
    }
    refill(source, destination) {
        while (source.peek()) {
            destination.data.push(source.data.pop());
        }
    }
}
//Testing queue on two stacks
const numArray = [1, 2, 3, 4, 5];
queue = new Queue();
numArray.map((num) => queue.add(num));
numArray.map(() => queue.remove());
console.log("Queue data structure on two stacks", queue.queue);