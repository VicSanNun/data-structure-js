"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
    print() {
        console.log(this.items.toString());
    }
}
exports.Stack = Stack;
