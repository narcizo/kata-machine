type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {
            value: item,
        } as Node<T>;

        this.length++;
        
        if(this.head && this.tail){
            this.tail.next = node;
            this.tail = node;
            return;
        }
        
        this.head = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if(this.length === 0) return undefined;

        const node = this.head;

        if(this.length === 1){
            this.head = undefined;
            this.tail = undefined;
        } else {
            this.head = this.head?.next;    
        }
        node!.next = undefined;
        
        this.length--;

        return node!.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }  
}