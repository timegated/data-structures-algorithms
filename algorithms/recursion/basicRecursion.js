var callMe = function (n, m) {
    console.log(n)
    console.log(m)
    if (n <= 0) {
        return 'done'
    }
    return callMe(n - 1, m)
}

// console.log(callMe(100, 'message'));

// Populate an array recursively

const arr = [];

var populate = function (n, entry) {
    arr.push(entry);
    if (n <= 1) {
        return 'done'
    }
    return populate(n - 1, entry + 1)
};

// populate(100, 1)
// console.log(arr)

// Finding factorials recursively

var factorialize = function (n) {
    if (n <= 1) {
        return n
    }
    return n * factorialize(n - 1)
}

console.log(factorialize(4))
// console.log(factorialize(1))
// 4 * 4-1 * 3-1 * 2 - 1 -- stop = 24

// greatest common denominator attempt

var gcd = function (m, n) {
    if (m % n === 0) {
        return m
    }
    return gcd(m, m % n)
}

// console.log(gcd(5, 2))


