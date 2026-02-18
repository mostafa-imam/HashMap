import { Node, LinkedList } from "./linked-list.js";

class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.size = 0;
        this.buckets = new Array(this.capacity).fill(undefined);
    }

    hash(key) {
        if (typeof key !== "string") {
            throw new TypeError("Keys must be strings");
        }

        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        const hash = this.hash(key);

        if (this.buckets[hash] === undefined) {
            const node = new Node();
            node.key = key;
            node.value = value;

            this.buckets[hash] = new LinkedList();
            this.buckets[hash].head = node;
            this.size++;
            return;
        }

        let temp = this.buckets[hash].head;

        while (temp !== null) {
            if (temp.key === key) {
                temp.value = value;
                return;
            }

            if (temp.nextNode === null) {
                const node = new Node();
                node.key = key;
                node.value = value;

                temp.nextNode = node;
                this.size++;
                return;
            }

            temp = temp.nextNode;
        }
    }

    get(key) {
        const hash = this.hash(key);
        const bucket = this.buckets[hash];

        if (bucket === undefined) {
            return null;
        }

        let temp = bucket.head;

        while (temp !== null) {
            if (temp.key === key) {
                return temp.value;
            }

            temp = temp.nextNode;
        }

        return null;
    }

    has(key) {
        const hash = this.hash(key);
        const bucket = this.buckets[hash];

        if (bucket === undefined) {
            return false;
        }

        let temp = bucket.head;

        while (temp !== null) {
            if (temp.key === key) {
                return true;
            }

            temp = temp.nextNode;
        }
        return false;
    }

    remove(key) {
        const hash = this.hash(key);
        const bucket = this.buckets[hash];

        if (bucket === undefined || bucket.head === null) return false;

        if (bucket.head.key === key) {
            bucket.head = bucket.head.nextNode;
            this.size--;
            return true;
        }

        let temp = bucket.head;

        while (temp.nextNode !== null) {
            if (temp.nextNode.key === key) {
                temp.nextNode = temp.nextNode.nextNode;
                this.size--;
                return true;
            }

            temp = temp.nextNode;
        }

        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(undefined);
        this.size = 0;
    }

    keys() {
        let arr = [];
        const buckets = this.buckets;

        buckets.forEach(item => {

            if (!item || item.head === null) return;

            let temp = item.head;

            while (temp !== null) {
                arr.push(temp.key);
                temp = temp.nextNode;
            }

        });

        return arr
    }

    values() {
        let arr = [];
        const buckets = this.buckets;

        buckets.forEach(item => {

            if (!item || item.head === null) return;

            let temp = item.head;

            while (temp !== null) {
                arr.push(temp.value);
                temp = temp.nextNode;
            }


        });

        return arr
    }
}

/* Tests */

const hash = new HashMap();
hash.set("Rama", "Value 1");
// console.log(hash.buckets[3].head);

hash.set("Rama", "Value 2");
// console.log(hash.buckets[3].head);

hash.set("Sita", "Value 3");
// console.log(hash.buckets[3].head);

console.log(hash.keys());
// console.log(hash.remove("Rama"));
// console.log(hash.buckets[3]);
// console.log(hash.clear());
// console.log(hash);
