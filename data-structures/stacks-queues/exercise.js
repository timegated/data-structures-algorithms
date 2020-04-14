// Min-Stack
// Implement a stack that keeps track of its minimum value;
function Stack(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
}

// O(1)
Stack.prototype.push = function (value) {
    if (this._count < this._capacity) {
        this._storage[this._count++] = value;
        return this._count;
    }
    return 'Max capacity already reached. Remove element before adding a new one.';
};

// O(1)
Stack.prototype.pop = function () {
    if (this._count === 0) {
        return 'No element inside the stack. Add element before poping.'
    }

    var value = this._storage[--this._count];
    delete this._storage[this._count];
    if (this._count < 0) {
        this._count = 0;
    }
    return value;
};

// O(1)
Stack.prototype.peek = function () {
    return this._storage[this._count - 1];
}

// O(1)
Stack.prototype.count = function () {
    return this._count;
};

function MinStack() {
    this._storage = {};
    this._count = 0;
    this._min = new Stack();
}

// O(1)
MinStack.prototype.push = function (value) {
    if (this._count < this._capacity) {
        if (this._min.peek() < value) {
            this._min.push(this._min.peek())
        } else {
        this._min.push(value);
        }
    this._storage[this._count++] = value;
    return this._count
    }
    return 'Max capacity already reached. Remove element before adding a new one.';
}

var stack = new MinStack()

console.log(stack._storage)
console.log(stack._count)
console.log(stack._min)