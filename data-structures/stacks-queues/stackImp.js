// 

function Stack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
};

Stack.prototype.push = function (val) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = val;
    return this._count;
  }
  return val;
};

Stack.prototype.pop = function () {
  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
};

Stack.prototype.peek = function () {
  return this._storage[this._count - 1];
};

// indirect recursion
var newStack = new Stack();

function populate(val, item) {
  var nextVal = val - 1;
  if (nextVal > 0) {
    populate(nextVal, item);
    newStack.push(item);
  }
}

// newStack.push("CatOne")
// newStack.push("CatTwo")
// newStack.push("CatThree")
// console.log("Peek method on stack:", newStack.peek())
populate(100, "Cat")
// newStack.pop()
console.log(newStack);