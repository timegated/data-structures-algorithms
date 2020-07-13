// Node constructor
// this.value - head
// this.next = null - tail

// Constructor Function, takes value
// new Node(value)
// set head, node
// set tail, node

// Add to tail(value)
// set tail's next node
// update the LL tail to new node

// Remove node(node)
// set parent to head
// while parent's next is not null or node parent is parent.next
// when found, set parent.next to the child's/node's next
// LL's are iterative


function Node(value) {
    this.next = null;
    this.value = value;
}

function LinkedList(headValue) {
    if (headValue === undefined) console.log('Must provide value for first node');
    this.head = new Node(headValue);
    this.tail = this.head;
}

LinkedList.prototype.forEach = function (callback) {
    // implement me...
};

// Time complexity:

LinkedList.prototype.print = function () {
    // implement me...
};

// Time complexity:

LinkedList.prototype.insertAfter = function (node, value) {
    // implement me...
};

// Time complexity:

LinkedList.prototype.removeAfter = function (node) {
    // implement me...
};

// Time complexity:

LinkedList.prototype.insertHead = function (value) {
    // implement me...
};

// Time complexity:

LinkedList.prototype.removeHead = function () {
    // implement me...
}

LinkedList.prototype.findNode = function (value) {
    // implement me...
};

// Time complexity:

LinkedList.prototype.appendToTail = function (value) {
    // implement me...
};

// Time complexity:


// PART 2:

LinkedList.prototype.insertBefore = function (node, value) {
    // implement me...
};
// Time complexity:

LinkedList.prototype.removeBefore = function (node) {
    // implement me...
};