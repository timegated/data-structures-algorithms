// given two positive integers, find the greatest common divisor
// the GCD is the largest positive integer that evenly divides both positive integers

// num1, num2, remainder

function euclidNumber(num1, num2) {
    // Base cases
    // If the remainder of num1 % num2  = 0  for any value, algorithm terminates.
    if (num1 === 0) {
        return num2
    }
    if (num2 === 0) {
        return num1
    }
    
    return euclidNumber(num2, num1 % num2)
};

// console.log(euclidNumber(9, 6))
// console.log(euclidNumber(8, 12))
// console.log(0 <= 0 < 3)

function gcd(m, n) {
    
}

// console.log(gcd(119, 544))
console.log(544/119)