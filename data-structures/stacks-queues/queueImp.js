// basic queue implementation: FIFO
// Differs from stack with head and tail counts
function Queue(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._head = 0;
  this._tail = 0;
};

Queue.prototype.enqueue = function (val) {
  if (this.count() < this._capacity) {
    this._storage[this._tail++] = val;
    return this.count();
  }
  return "Max capacity already reached. Remove element before adding a new one.";
};

Queue.prototype.dequeue = function () {
  var element = this._storage[this._head];
  delete this._storage[this._head];
  if (this._head < this._tail) this._head++;
  return element;
};

Queue.prototype.peek = function () {
  return this._tail - this._head;
};

Queue.prototype.count = function (val) {
  for (var i = this._head; i < this._tail; i++) {
    if (this._storage[i] === val) return i - this._head + 1;
  }
  return null;
};

var newQ = new Queue(100);

newQ.enqueue('Dog');
newQ.enqueue('Dog');
newQ.enqueue('Dog');
newQ.enqueue('Dog');
newQ.dequeue('Dog');
console.log(newQ.peek());
console.log(newQ);