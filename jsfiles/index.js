"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stacks_1 = require("./class/stacks");
const stack = new stacks_1.Stack();
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
