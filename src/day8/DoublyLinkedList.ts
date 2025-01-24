type Node<T> = {
    value: T,
    next?: Node<T>,
    prev?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;

    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        const newNode = this.newNode(item);
        if (!this.head){
            this.head = newNode;
        } else {
            let node = this.head;
            this.head = newNode;
            newNode.next = node;
            node.prev = newNode;
        }

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx === 0) return this.prepend(item);
        else if (idx === this.length) return this.append(item);

        const newNode = this.newNode(item);
        let node = this.getNode(idx);

        newNode.next = node?.next;
        newNode.prev = node;

        node!.next = newNode;

        this.length++;
    }

    append(item: T): void {
        if (this.length === 0) return this.prepend(item);

        const newNode = this.newNode(item);
        let node = this.head;

        while(node?.next){
            node = node.next;
        }
        
        newNode.prev = node;
        node!.next = newNode;

        this.length++;
    }

    remove(item: T): T | undefined {
        if(this.length === 0) return undefined;

        let node = this.head;

        while (node?.value !== item && node?.next !== undefined) {
            node = node.next;
        }

        if(node?.value !== item ) return undefined;

        const deletedNode = node;

        if(this.length === 1){
            this.head = undefined;
        } else{
            if(deletedNode?.prev === undefined){
                this.head = deletedNode?.next;
                node!.prev = undefined;
            } else {
                node = node?.prev;
                node!.next = deletedNode.next;
                deletedNode.next!.prev = node;
            }
        }

        deletedNode!.next = undefined;
        deletedNode!.prev = undefined;

        this.length--;

        return deletedNode?.value;
    }

    removeAt(idx: number): T | undefined {
        if(this.length === 0) return undefined;

        let node = this.getNode(idx);

        const deletedNode = node;

        if(this.length === 1){
            this.head = undefined;
        } else{
            if(deletedNode?.prev === undefined){
                this.head = deletedNode?.next;
                node!.prev = undefined;
            } else {
                node = node?.prev;
                node!.next = deletedNode.next;
                deletedNode.next!.prev = node;
            }
        }

        deletedNode!.next = undefined;
        deletedNode!.prev = undefined;

        this.length--;
        
        return deletedNode?.value;
    }

    get(idx: number): T | undefined {
        if(idx > this.length) return undefined;

        let node = this.head;

        for(let i = 0; i < idx; i++){
            node = node?.next;
        }

        return node?.value;
    }

    private getNode(idx: number): Node<T> | undefined {
        if(idx > this.length) return undefined;

        let node = this.head;

        for(let i = 0; i < idx; i++){
            node = node?.next;
        }

        return node;
    }

    private newNode(item: T): Node<T> {
        return {
            value: item,
            next: undefined,
            prev: undefined,
        } as Node<T>;
    }
}