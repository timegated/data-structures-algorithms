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

console.log(recursiveReverse('String'));