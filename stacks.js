function Stack(){
    let items = [];

    this.push = element => items.push(element);

    this.pop = () => items.pop();

    this.peek = () => items[items.length - 1];

    this.isEmpty = () => items.length == 0;

    this.clear = () => items = [];

    this.print = () => console.log(items.toString());
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