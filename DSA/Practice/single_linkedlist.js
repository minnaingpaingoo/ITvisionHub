class Node{
    constructor (data, next = null){
        this.data = data;
        this.next = next;
    }
}

class SingleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(data){

    }
}

const singleLinkedList = new SingleLinkedList();
const node = new Node("1");
singleLinkedList.head = node;