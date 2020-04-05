// Sorting numbers very useful in CS
// Bubble sort generally not useful -- It is a useful learning tool
// Great to model the way humans think of sorting numbers in our heads

const array = [1, 3, 56, 534, 2, 6, 7, 8, 19, 5]

const bubbleSort = (arr) => {
    do {
        var swapped = false;
        for (let i = 0; i < arr.length; i++) {
            console.log(arr)
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr
}

console.log(bubbleSort(array))
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
//     for (let j = 0; j < array.length; j++) {
//         if (array[i] > array[j]) {
            
//        }
//     }
// }