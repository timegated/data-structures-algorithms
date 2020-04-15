const array1 = [1, 5, 7, 8, 9]
const array2 = [2, 3, 10, 11, 12]

// we want [1,2,3,5,7,8,9,10,11,12]

// i only need to sort up to the median value, the rest do not matter
// this is a piece of the mergesort algorithm, taken here to merge these two arrays in a sorted way
const merge = (left, right) => {
    const results = [];
    // arr.length returns true if it is a positive integer, returns false if 0; truthy and falsy values in JS
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift())
        }
        else {
            results.push(right.shift())
        }
    }
    return results.concat(left, right)
}

console.log(merge(array1, array2))