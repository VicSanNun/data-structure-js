import { Stack } from './stacks';

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