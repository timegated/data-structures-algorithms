/*
Implement a function that will reverse a string recursively.
reverse('abcdefg')
=> 'gfedcba'
*/
// Create temp array to push values into backwards
// Another way is to swap

function recursiveReverse([...arr]) {
    var temp = [];
    var addItems = function ([...orderedArr]) {
        if (orderedArr.length > 0) {
            temp.push(orderedArr.pop())
            addItems(orderedArr)
        }
        return
    }

    addItems([...arr])
    return temp;
}

// console.log(recursiveReverse('String'));

// recursive multiplier
// Write a function that takes two args, arr and num, and multiplies each arr value by num and returns an array of the values
// Arr values are multiplied in place and pushed back into the array;
function recursiveMultiply(arr, num) {
    if (arr.length === 0) {
        return arr;
    }
    var last = arr.pop();

    console.log(last);

    recursiveMultiply(arr, num);
    console.log(arr);

    arr.push(last * num);
    return arr;
}

console.log(recursiveMultiply([1,2,3], 3))