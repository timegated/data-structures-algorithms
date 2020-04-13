const simpleArray = [1, 2, 3, 4, {
    name: "Person"
}, 'string', ['Other Array', 'Value', 'Value']]

const simpleObj = {
    name: 'Person',
    age: 35,
    friends: [{
        name: 'Peter',
        age: 30
    },
    {
        name: 'Jess',
        age: 40
    }
    ],
    car: {
        name: 'Honda',
        model: 'Civic',
        year: 1999
    }

};

console.dir(Array.prototype);
console.dir(Object);
console.log('Simple Array:', simpleArray);
console.log('Simple Object', simpleObj);