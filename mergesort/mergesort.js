// Merge Sort: divide and conquer algorithm;
// What array.sort uses under the hood in most cases: very consistent/dependable what you get out of it;
// "Stitching algorithm";
// Merge and stitch;
// Sublists are always going to come back sorted;
const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

function mergeSort(nums) {
    // base case
    if (nums.length < 2) {
        return nums
    }
    // splitting the array into sub arrays
    const length = nums.length;
    const middle = Math.floor(length / 2);
    // Create two smaller arrays
    // slice returns a shallow copy of the array
    const left = nums.slice(0, middle);
    // Length always gets you to the end of the array
    const right = nums.slice(middle);
    
    // At this point we have a left and right array
    // verbose way
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return stitch(sortedLeft, sortedRight)
    // return stitch(mergeSort(left), mergeSort(right))
};

// helper function for mergesort

const stitch = (left, right) => {
    // returned at the end of this function
    const results = [];
    console.log('Right:', right)
    console.log('Left:',left)
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            // attach results of shifted left array values to the end of results array
            results.push(left.shift())
        }
        else {
            // attach results to the end of the results array, shifted
            results.push(right.shift())
        }
    }
    return results.concat(left, right)
}

console.log(mergeSort(nums))