class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return false;
        }
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        return this.head = this.head.next;
    }

    removeLast() {
        /*If linked list is empty */
        if (!this.head) {
            return;
        }
        /*If linked List has only one node */
        if (!this.head.next) {
            this.head = null;
        }
        let previous = this.head;
        let node = previous.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
        return this.head;
    }

    insertLast(data) {
        let last = this.getLast();
        if (last) {
            last.next = new Node(data);
            return last;
        }
        else {
            /*If Linked List is empty */
            this.head = new Node(data);
            return this.head;
        }
    }

    getAt(index) {
        /*If linked list is empty */
        if (!this.head) {
            return;
        }
        let counter = 0;
        let node = this.head;
        while(node){
            if(counter === index){
                return node;
            }
            counter++;
            node = node.next;
        }
        return null; //Index out of bound
    }

    removeAt(index){
        /*If linked list is empty */
        if (!this.head) {
            return;
        }
        /*If removed index is head? */
        if(index === 0){
            this.head = this.head.next;
        }
        /*If previous has value or previous.next has value*/
        let previous = this.getAt(index-1);
        if(!previous || !previous.next){
            return; //return "index out of bound"
        }
        previous.next = previous.next.next;
        return this.head;
    }

    insertAt(data, index){
        /*If linked list is empty */
        if (!this.head) {
            this.head = new Node (data);
            return;
        }
        if(index === 0){
            this.head = new Node(data, this.head); //Like insertFirst()
            return;
        }
        let previous = this.getAt(index-1) || this.getLast(); //For index out of bound, use the last one
        let node = new Node (data, previous.next);
        previous.next = node;
        return this.head;
    }

    createCircular(index){
        let last = this.getLast();
        if(last){
            last.next = this.getAt(index);
            return last;
        }
        return false;
    }

    clearLinkedList(){
        return(this.head = null);
    }
}

const linkedList = new LinkedList();
const node = new Node("Hey");
linkedList.head = node;
linkedList.insertFirst("Hi");
linkedList.insertFirst("No");
linkedList.insertFirst("Huh");
linkedList.insertFirst("Yes");

/* Yes,Huh,No,Hi,Hey */
/*Find Midpoint node of the linked list */
/*If the Linked list have an even number, return the node at the end of the first half of the list */
/*Rule: Do not use the counter variable. Do not use the size of the linked list. Only iterate through the list one time*/

function getMidPoint(linkedList){
    let slow = linkedList.getFirst();
    let fast = linkedList.getFirst();
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

/*Check whether linked list is circular? 
If circular return "true", if not return "false" */
function checkCircular(linkedList){
    let slow = linkedList.getFirst();
    let fast = linkedList.getFirst();
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true;
        }
    }
    return false;
}

/*fromLastNode(linkedList,n) */
/*Given a linkedList and integer n, return the node which is n spaces from the last node.*/
/*Rule: Do not call the size of the linkedList. Assume that n always less than the size of the linkedList. */
function fromLastNode(linkedList, n){
    let slow = linkedList.getFirst();
    let fast = linkedList.getFirst();
    for(let i=0; i<n; i++){
        fast = fast.next;
    }
    /** same as the above for loop
    while(n>0){
    fast = fast.next;
    n--;
    }
     */
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}


// console.log("============================");
// console.log("Linked List: ", linkedList);
// console.log("============================");
// console.log("Linked List Size is ", linkedList.size());
// console.log("============================");
// console.log("First Node is ", linkedList.getFirst());
// console.log("============================");
// console.log("Last Node is ", linkedList.getLast());
// console.log("============================");
// console.log("Remove Last Node: ", linkedList.removeLast());
// console.log("============================");
// console.log("Get Node at Index 1 : ", linkedList.getAt(1));
// console.log("============================");
// console.log("Remove Node at Index 1: ", linkedList.removeAt(1));
// console.log("============================");
// console.log("Insert Node at Index 1: ", linkedList.insertAt("Yes",1));
// console.log("============================");
// console.log("Midpoint Node is: ", getMidPoint(linkedList));
// console.log("============================");
// linkedList.createCircular(1);
// console.log("Is LinkedList circular? Answer is: ", checkCircular(linkedList));
// console.log("==================================");
// console.log("The index of node that is 2 from the last node is ", fromLastNode(linkedList,2));
linkedList.clearLinkedList();
console.log("Clearing the linkedList is ", linkedList);
