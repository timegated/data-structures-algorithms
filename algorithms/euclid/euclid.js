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
    var r = num1 % num2;
    return euclidNumber(num2, r)
};

// console.log(euclidNumber(9, 6))
// console.log(euclidNumber(8, 12))
// console.log(0 <= 0 < 3)

function gcd(m, n) {
    if (m === 0) {
        return n
    }
    if (n === 0) {
        return m
    }

    var r = m % n;

    return (gcd(n, r))
}

// console.log(gcd(2166, 6099))
// console.log(544 % 119)
// console.log(119%68)

// Extended Euclid's Algorithm

function xgcd(a, b) {
    a = +a;
    b = +b;
    if (a !== a || b !== b) {
        return [NaN, NaN, NaN]
    };
    if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
        return [Infinity, Infinity, Infinity]
    }
    if ((a % 1 !== 0) || (b % 1 !== 0)) {
        return false;
    }
    var signX = (a < 0) ? -1 : 1,
        signY = (b < 0) ? -1 : 1,
        x = 0,
        y = 1,
        u = 1,
        v = 0,
        q, r, m, n;
    a = Math.abs(a);
    b = Math.abs(b);

    while (a !== 0) {
        q = Math.floor(b / a);
        r = b % a;
        m = x - u * q;
        n = y - v * q;
        b = a;
        a = r;
        x = u;
        y = v;
        u = m;
        v = n;
    }
    return [b, signX * x, signY * y];
}

// console.log(xgcd(8, 12))
// console.log(1/1)
