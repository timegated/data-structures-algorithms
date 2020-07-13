// Creating a stack interface
// Trees/Graphs/Linked Lists don't come out of the box for JS
var Stack = function () {
  this.storage = "";
};

Stack.prototype.push = function (val) {
  this.storage = this.storage.concat(",",val);
};

Stack.prototype.pop = function (val) {
  var str = this.storage.slice(this.storage.lastIndexOf("," + 3));
  this.storage = this.storage.substring(0, this.storage.lastIndexOf(","));
  return str;
};

var newStack = new Stack();

newStack.push("Eggs");
newStack.push("Onions");
newStack.push("Potatoes");
newStack.push("Rosemary");
newStack.pop();
newStack.pop();
newStack.push("Jam");
console.dir(newStack);