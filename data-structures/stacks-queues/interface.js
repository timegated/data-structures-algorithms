// Stack interface
var Stack = function () {
    this.storage = '';
}

Stack.prototype.push = function (item) {
    this.storage = [...this.storage, item]

}
Stack.prototype.pop = function (item, index) {    
    this.storage.pop()
}

Stack.prototype.size = function () {    
    console.log(this.storage.length)
}

var myWeeklyMenu = new Stack();

myWeeklyMenu.push('RedBeans');
myWeeklyMenu.push('Beef Bourgignon');
myWeeklyMenu.size()
console.log(myWeeklyMenu);