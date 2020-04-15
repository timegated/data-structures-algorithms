// Iterative Solutions for basic algorithms

// slice and splice

function frankenSplice(arr1, arr2, num) {
    let localArray = arr2.slice();
    console.log(localArray);
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(num, 0, arr1[i]);
        num++;
    }
    return localArray;
}

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 0))

// titleCasing
String.prototype.replaceAt = function (index, character) {
    return (
        this.substr(0, index) + character + this.substr(index + character)
    )
}

function titleCase(str) {
    var stringArray = str.split(' ');
    var subStringArray = [];
    for (let item in stringArray) {
        subStringArray[item] = stringArray[item].toLowerCase().replaceAt(0, stringArray[item].charAt(0).toUpperCase());
    }
    
    return subStringArray.join(' ');
}

console.log(titleCase('this string is all lowercase'))