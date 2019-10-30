export class Stack {
    private items: Array<any>;
    
    constructor(){
        this.items = [];
    }

    public push(element: any): void{
        this.items.push(element);
    }

    public pop(): void{
        this.items.pop();
    }

    public peek(): void{
        return this.items[this.items.length - 1];
    }

    public isEmpty(): boolean{
        return this.items.length == 0;
    }

    public size(): any{
        return this.items.length;
    }

    public clear(): void{
        this.items = [];
    }

    public print(): void{
        console.log(this.items.toString());
    }
}
