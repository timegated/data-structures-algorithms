// Counting numbers x + 1 based on their occurence in an array

const nums = [17, 24, 9, 20, 9, 17, 9, 8, 11, 10, 20, 1, 14, 13, 9, 26, 15, 25, 8, 26, 8, 4, 5, 8, 4, 11, 7]


const countElements = (arr) => {
    const tempObj = {};
    let count = 0;
    const sortedArr = arr.sort()
    for (let ele in sortedArr) {
        if (tempObj[sortedArr[ele]]) {
            tempObj[sortedArr[ele]].occurs = tempObj[arr[ele]].occurs + 1;
        } else {
            tempObj[arr[ele]] = {
                occurs: 1,
            };
        }
    }
    console.log(tempObj)
    for (let key in tempObj) {
        if (tempObj[Number(key) + 1]) {
            count++
            if (tempObj[Number(key)].occurs >= 2) {
                count = count + (tempObj[Number(key)].occurs - 1)
            }
        }
    }
    return count;
};

console.log(countElements(nums))