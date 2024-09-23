class Stack{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
    }
    remove(){
        this.data.pop();
    }
    peek(){
        return (this.data.length>0);
    }
}

stack = new Stack();
stack.add(5);
stack.add(6);
stack.add(1);
stack.add(4);
stack.add(7);
stack.add(9);
stack.add(2);
//console.log(stack);
//stack.remove();
//console.log(stack);
module.exports=Stack;