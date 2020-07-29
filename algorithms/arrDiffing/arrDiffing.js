// find and return the different in each array but not both


// naive
const findDiff = (arr1, arr2) => {
  const newArr = [];
  const onlyFirst = (first, second) => {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i])
      }
    }
  }
  onlyFirst(arr1, arr2);
  onlyFirst(arr2, arr1);

  return newArr;
}

console.log(findDiff([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// using arr.prototype.reduce to check for differences

const diffCheck = (arr1, arr2) => {
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
  };

  const valOne = arr1.reduce(reducer);
  const valTwo = arr2.reduce(reducer);

  if (valOne !== valTwo) {
    const diff = (a, b) => {
      return a.filter(item => b.indexOf(item) === -1)
    }
    return [...diff(arr1, arr2), ...diff(arr2, arr1)]
  } else {
    return `No differing values found`
  } 
}

console.log(diffCheck([1, 2, 3, 4], [1, 2, 3, 4]));
