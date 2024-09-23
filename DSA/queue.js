class Queue {
    constructor() {
        this.data = [];
    }
    add(record) {
        this.data.unshift(record);
    }
    remove() {
        this.data.pop();
    }
}

queue = new Queue();
for (let i = 1; i < 6; i++) {
    queue.add(i);
}
console.log("===========Adding item into an array using queue pattern=====");
console.log(queue);
console.log("===========Removing item from an array using queue pattern=====");
queue.remove();
console.log(queue);