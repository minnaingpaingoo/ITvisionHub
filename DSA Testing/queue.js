class Queue{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.unshift(data);
    }
    remove(){
        this.data.pop();
    }
}

queue = new Queue();
queue.add(1);
queue.add(4);
queue.add(7);
queue.add(6);
queue.add(13);
console.log(queue);
queue.remove();
console.log(queue);