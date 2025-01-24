export default class ArrayList<T> {
    public length: number;

    private capacity:number;
    private arr: Array<T>;
    
    constructor(capacity: number) {
        this.length = 0;
        this.capacity = capacity;
        this.arr = new Array(this.capacity);
    }

    prepend(item: T): void {
        this.shiftForward(this.length);
        this.arr[0] = item;

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        this.shiftForward(idx);
        this.arr[idx] = item;

        this.length++;
    }

    append(item: T): void {
        this.doubleIfNeeded();

        this.arr[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        if (this.length === 0) return;
        let idx = -1;

        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] === item) {
                idx = i;
                break;
            }
        }

        if (idx === -1) return;

        return this.removeAt(idx);
    }

    get(idx: number): T | undefined {
        if(idx >= this.length) return undefined;

        return this.arr[idx];
    }

    removeAt(idx: number): T | undefined {
        if (this.length === 0) return;

        const removedValue = this.arr[idx];
        this.shiftBackward(idx);

        this.length--;

        return removedValue;
    }

    private shiftBackward(idx: number): void {
        for (let i = idx; i <= this.length; i++){
            this.arr[i] = this.arr[i+1];
        }
    }

    private shiftForward(idx: number): void {
        this.doubleIfNeeded();

        for (let i = idx; i > 0; i--) {
            this.arr[i] = this.arr[i-1];
        }
    }

    private copyAndDouble(): Array<T> {
        this.capacity *= 2;
        const newArr = new Array(this.capacity);

        for (let i = 0; i < this.length; i++){
            newArr[i] = this.arr[i];
        }
        
        return newArr;
    }

    private doubleIfNeeded(): void {
        if(this.length >= this.capacity)
            this.arr = this.copyAndDouble();
    }
}