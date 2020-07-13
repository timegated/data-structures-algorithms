// Min-Stack
// Implement a stack that keeps track of its minimum value;
// "Blueprints" for the instantiation of this structure
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

MinStack.prototype.push = function (value) {
    if (this._count < this._capacity) {
        if (this._min.peek() < value) {
            this._min.push(this._min.peek());
        } else {
            this._min.push(value);
        }
        this._storage[this._count++] = value;
        return this._count;
    }
    return 'Max capacity already reached. Remove element before adding a new one.';
};

// O(1)
MinStack.prototype.pop = function () {
    this._min.pop();
    var value = this._storage[--this._count];
    delete this._storage[this._count];
    if (this._count < 0) {
        this._count = 0;
    }
    return value;
};

// O(1)
MinStack.prototype.peek = function () {
    return this._storage[this._count - 1];
};

// O(1)
MinStack.prototype.count = function () {
    return this._count;
};

// O(1)
MinStack.prototype.min = function () {
    return this._min.peek();
};




function Queue_TwoStacks() {
    this._stackIn = new Stack();
    this._stackOut = new Stack();
}

Queue_TwoStacks.prototype.enqueue = function (val) {
    this._stackIn.push(val);
};

Queue_TwoStacks.prototype._transferStacks = function () {
    while (this._stackIn.count() > 0) {
        this._stackOut.push(this._stackIn.pop());
    }
};

Queue_TwoStacks.prototype.dequeue = function () {
    if (this._stackOut.count() === 0) this._transferStacks();
    return this._stackOut.pop();
};

Queue_TwoStacks.prototype.count = function () {
    return this._stackIn.count() + this._stackOut.count();
};

Queue_TwoStacks.prototype.peek = function () {
    if (this._stackOut.count() === 0) this._transferStacks();
    return this._stackOut.peek();
};
