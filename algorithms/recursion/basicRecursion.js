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

populate(100, 1)
console.log(arr)