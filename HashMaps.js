class HashMap {
    constructor(initialCapacity = 8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }
    hash(key) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode += hashCode + key.charCodeAt[i];
        }
        return hashCode % this.length;
    }

    assign(key, value) {
        const loadRatio = this.length + this._deleted + 1;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE.RATIO);
        }
        //find the slot where the key should be in
        const index = this._findSlot(key);

        if (!this._hashTable[index]) {
            this.length++;
        }
        this._hashTable[index] = {
            key,
            value,
            DELETED: false,
        };
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            throw new Error("Key error");
        }
        return this._hashTable[index].value;
    }

    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error("Key error");
        }
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }

    _findSlot(key) {
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;

        for (let i = start; i < start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index;
            }
        }
    }
    _resize(size) {
        const oldSlot = this._hashTable;
        this._capacity = size;
        //Reset the length. this will get rebuilt as you add the items back
        this.length = 0;
        this._deleted = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.assign(slot.key.slot.value);
            }
        }
    }
}

module.exports = HashMap;