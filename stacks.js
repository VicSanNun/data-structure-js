class Stack {
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length == 0;
    }

    clear(){
        this.items = [];
    }

    print(){
        console.log(this.items.toString());
    }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(1);
stack.push(32);
stack.push(13);

console.log(stack.isEmpty());
stack.print();

stack.pop();
stack.print();

stack.clear();
console.log(stack.isEmpty());