// given an array containing two numbers, find the sum of the range of the numbers such that findSum([1,4]) = 10;

function findSum(arr) {
  const start = arr[0];
  const end = arr[1];

  const count = Math.abs(start - end) + 1;

  const sum = ((start + end) * count) / 2;
  console.log(sum);
  return sum;
};

findSum([2, 40]);

// generating a range of numbers;

const generateRange = (size, startAt) => {
  const range = [...Array(size).keys()].map(i => i + startAt);
  return Array.isArray(range);
}


console.log(generateRange(4, 2))