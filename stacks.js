function Stack(){
    let items = [];

    this.push = element => items.push(element);

    this.pop = () => items.pop();

    this.peek = () => items[items.length - 1];
}