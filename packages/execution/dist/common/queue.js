'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class Queue {
    constructor() {
        this._store = [];
    }
    enqueue(val) {
        this._store.push(val);
    }
    dequeue() {
        return this._store.shift();
    }
    get length() {
        return this._store.length;
    }
    clear() {
        this._store = [];
    }
    dequeueMultiple(batch) {
        batch = (batch | 0) > 0 ? batch | 0 : 1;
        const buffer = [];
        for (let i = 0; i < batch; i++) {
            const value = this.dequeue();
            if (typeof value === 'undefined') {
                break;
            }
            buffer.push(value);
        }
        return buffer;
    }
}

exports.Queue = Queue;
