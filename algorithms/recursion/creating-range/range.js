// First Solution
var range = [];
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
        return [startNum]
    } else {
        var numbers = rangeOfNumbers(startNum, endNum - 1)
        numbers.push(endNum)
        return numbers
    }
}
console.log('First Solution', rangeOfNumbers(1, 10))

// Second Solution

function shorterFunction(startNum, endNum) {
    return startNum === endNum ? [startNum] : shorterFunction(startNum, endNum - 1).concat(endNum);
};

console.log('Shorter Solution', shorterFunction(1, 10))
// Shortest Solution 
function shortestFunction(startNum, endNum) {
    return startNum === endNum ? [startNum] : [...shortestFunction(startNum, endNum - 1), endNum]
}
console.log('Shortest Solution', shortestFunction(1, 10))