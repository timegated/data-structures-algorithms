// Our data structure;

function Building(type, floors, ribs) {
    this.type = type;
    this.floors = floors;
    this.ribs = ribs;
};

// Generally have many methods on an DS prototype;

Building.prototype.getTypeAndFloors = function () {
    console.log(`This building is a ${this.type} and has ${this.floors} floors and ${this.ribs} ribs`)
};
Building.prototype.getOptimalFloors = function () {
    if (this.floors > 5) {
        console.log(`This structure has the optimal number of floors at ${this.floors} floors`)
    }
}
const yurt = new Building('yurt', 6, 5);

yurt.getTypeAndFloors()
yurt.getOptimalFloors()