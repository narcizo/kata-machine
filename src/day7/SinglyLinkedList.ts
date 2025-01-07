type Node<T> = {
    value: T;
    next?: Node<T>;
}
export default class SinglyLinkedList<T> {
    public length: number;

    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode = this.newNode(item);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        let node = this.getNode(idx);
        node = node?.next;

        const newNode = this.newNode(item);

        newNode.next = node?.next;
        node ? node.next = newNode: this.head = newNode;

        this.length++;
    }

    append(item: T): void {
        const newNode = this.newNode(item);
        
        if (!this.head){
            this.head = newNode;
        }else {
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            node!.next = newNode;
        }
        
        this.length++;
    }

    remove(item: T): T | undefined {
        if(this.length === 0) return undefined;

        let node = this.head;
        if(!node) return undefined;

        if (node?.value === item) {
            this.head = node.next;
            this.length--;
            return node.value;
        }

        while (node?.next?.value !== item && node.next !== undefined) {
            node = node?.next;
        }

        if (!node?.next) return undefined;

        let deletedNode = node.next;
        node.next = deletedNode.next;
        deletedNode.next = undefined;
        this.length--;

        return deletedNode?.value;
    }

    removeAt(idx: number): T | undefined {
        if(this.length === 0) return undefined;
        
        let deletedNode: Node<T> | undefined;

        if (this.length === 1 || idx === 0) {
            deletedNode = this.head;
            this.head = this.head?.next;
        } else {
            let node = this.getNode(idx);
            deletedNode = node!.next;
            node!.next = deletedNode?.next;
        }

        this.length--;

        deletedNode!.next = undefined;
        return deletedNode?.value;
    }

    get(idx: number): T | undefined {
        if (idx > this.length) return undefined;

        let node = this.head;

        for (let i = 0; i < idx; i++) {
            node = node?.next;
        }

        return node?.value;
    }

    getNode(idx: number): Node<T> | undefined{
        if (idx > this.length) return undefined;

        let node = this.head;

        for (let i = 0; i < idx - 1; i++) {
            node = node?.next;
        }

        return node;
    }

    newNode(item: T): Node<T>{
        return {
            value: item
        } as Node<T>;
    }
}