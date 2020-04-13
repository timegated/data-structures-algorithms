function Building(floors) {
    this.what = 'building';
    this.floors = floors;
}
function Words(words) {
    this.words = words;
}

Building.prototype.countFloors = function () {
    console.log(`I have ${this.floors} floors`)
}
Words.prototype.randomizeWords = function () {
    console.log(this.words[Math.floor(Math.random() * this.words.length - 1)])
}

var words = new Words(['turtle','iguana','sheep','shrimp'])
var building = new Building(4)
var buildingTwo = new Building(5)

console.log(words)
console.log(building)
console.log(buildingTwo)
building.countFloors()
buildingTwo.countFloors()
words.randomizeWords()