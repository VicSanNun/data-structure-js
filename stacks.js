function Stack(){
    let items = [];

    this.push = element => items.push(element);

    this.pop = () => items.pop();

    this.peek = () => items[items.length - 1];

    this.isEmpty = () => items.length == 0;

    this.clear = () => items = [];

    this.print = () => console.log(items.toString());
}