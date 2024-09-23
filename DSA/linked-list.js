//Creating Node Class
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
//Creating LinkedList Class
class LinkedList {
    constructor() {
        this.head = null;
    }

    //Insert First Node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        return this.head;
    }

    //Size
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    //Get First Node
    getFirst() {
        return this.head;
    }

    //Get Last Node
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

    //Remove First Node
    removeFirst() {
        /*If LinkedList is empty */
        if (!this.head) {
            return;
        }
        return (this.head = this.head.next);
    }

    //Remove Last Node
    removeLast() {
        /*If LinkedList is empty */
        if (!this.head) {
            return;
        }
        /*If LinkedList has only one node */
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

    //Insert Last Node
    insertLast(data) {
        let last = this.getLast();
        if (last) {
            last.next = new Node(data);
            return last;
        }
        else {
            /*if linked list is empty */
            this.head = new Node(data);
            return this.head;
        }
    }

    //Get At
    getAt(index) {
        /* If Linkedlist is empty */
        if (!this.head) {
            return;
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter == index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null; //For index out of bound. Default return null
    }

    //Remove At
    removeAt(index) {
        /* If Linkedlist is empty */
        if (!this.head) {
            return;
        }
        /*If removed index is head?. Like removeFirst() */
        if (index == 0) {
            this.head = this.head.next;
        }
        /*If previous has value or previous.next has value */
        let previous = this.getAt(index - 1)
        if (!previous || !previous.next) { //
            return; //return "index out of bound";
        }
        previous.next = previous.next.next;
        return this.head;
    }

    //Insert At: If index is out of bound, insert node to the end of the linkedlist.
    insertAt(data, index) {
        /* If Linkedlist is empty */
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        /*If index is 0. Like insertFirst */
        if (index == 0) {
            this.head = new Node(data, this.head);
            return;
        }
        let previous = this.getAt(index - 1) || this.getLast();
        let node = new Node(data, previous.next);
        previous.next = node;
        return this.head;
    }
    //Create Circular Linked List
    createCircular(index) {
        let lastNode = this.getLast();
        while (lastNode) {
            lastNode.next = this.getAt(index);
            return lastNode;
        }
        return false;
    }

    //Clear LinkedList
    clear() {
        this.head = null;
    }
}

const linkedList = new LinkedList();
const node = new Node("Hey");
linkedList.head = node;
linkedList.insertFirst("Hi");
linkedList.insertFirst("Huh");
linkedList.insertFirst("No");
linkedList.insertFirst("Yes");

/* Yes, No, Huh, Hi, Hey */
/*Find Midpoint node of the linked list */
/*If the Linked list have an even number, return the node at the end of the first half of the list */
/*Rule: Do not use the counter variable. Do not use the size of the linked list. Only iterate through the list one time*/

function getMidPoint(linkedList) {
    let slow = linkedList.getFirst();
    let fast = linkedList.getFirst();
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

/*Check whether linked list is circular? 
If circular return "true", if not return "false" */
function checkCircular(linkedList) {
    let slow = linkedList.getFirst();
    let fast = linkedList.getFirst();
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

/*fromLastNode(linkedList,n) */
/*Given a linkedList and integer n, return the node which is n spaces from the last node.*/
/*Rule: Do not call the size of the linkedList. Assume that n always less than the size of the linkedList. */
function fromLastNode(linkedList, n) {
    let slow = linkedList.getFirst();
    let fast = linkedList.getFirst();
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}

//console.log("==================================");
//console.log("1. Linked List: ", linkedList);
//console.log("==================================");
//console.log("2. Linked List Size is ", linkedList.size());
//console.log("==================================");
//console.log("3. First Node is ", linkedList.getFirst());
//console.log("==================================");
//console.log("4. Last Node is ", linkedList.getLast());
//console.log("==================================");
//console.log("5. Remove First Node: ", linkedList.removeFirst());
//console.log("==================================");
//console.log("6. Remove Last Node: ", linkedList.removeLast());
//console.log("==================================");
//console.log("7. Insert Last Node: ", linkedList.insertLast("Yes"));
//console.log("==================================");
//console.log("8. Last Node is ", linkedList.getLast());
//console.log("==================================");
//console.log("9. Get Node at index 1 is ", linkedList.getAt(1));
//console.log("9. Get Node at index 5 is ", linkedList.getAt(5));
//console.log("==================================");
//console.log("10. Remove Node at index 1 is ", linkedList.removeAt(3));
//console.log("==================================");
//console.log("11. Insert Node At Index 1 is ", linkedList.insertAt("Yes",1));
//console.log("==================================");
//console.log("12. Midpoint Node is ", getMidPoint(linkedList));
//linkedList.createCircular(1);
//console.log("==================================");
//console.log("13. Is linked list circular? Answer is: ", checkCircular(linkedList));
//console.log("==================================");
//console.log("14. The index of node that is 2 from the last node is ", fromLastNode(linkedList,2));
// console.log("==================================");
// linkedList.clear();
// console.log("Clearing the linkedList is ", linkedList);
//console.log("==================================");