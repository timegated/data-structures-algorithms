// the original version of quicksort
// complexity: O(n log n)
// choosing a pivot
// we pick 6 (last number in the array)
// so we pivot on 6
// [5,4] [7,9] pivot on 6: we have a division of smaller lists
// we call quicksort on both these lists

// Quicksort Logic:
// [4, 9, 3, 5] list
//     -
//     > 5 is made the pivot since it 's the last in the array -
//     > divide list into two lists, [4, 3] and[9] -
//     > call quicksort on those two lists

// [4, 3] -
// > 3 is pivot
//     -
//     > call quicksort on[] and[4] -
//     > those both
// return as is as they are the base
// case oflength 0 or 1
//     -
//     > concat[], 3, and[4] -
//     >
//     return [3, 4]

// [9] -
// > returns as this it is a base
// case oflength 1

//     (back into the original
//         function call) -
//     > call concat on[3, 4], 5, and[9] -
//     >
//     return [3, 4, 5, 9]

const nums = [5, 7, 4, 9, 6]

const quickSort = (nums) => {
    if (nums.length <= 1) {
        // Already sorted
        return nums;
    }
    // last element of the array
    const pivot = nums[nums.length - 1]; 
    console.log(pivot)
    const left = [];
    const right = [];

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i])
        }
        else {
            right.push(nums[i])
        }
    }
    return [...quickSort(left), pivot, ... quickSort(right)]
}

console.log(quickSort(nums))