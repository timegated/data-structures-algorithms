// Basic application of recursion
const container = document.querySelector('.container-one');
const containerTwo = document.querySelector('.container-two');
let wr = (msg = '--------') => container.innerHTML += `<span class="numbers">${msg}</span>`;
let wrFib = (msg = '-------') => containerTwo.innerHTML += `<span class="numbers">${msg}</span>`;

function basicRecursion(max, current) {
    if (current > max) return;


    basicRecursion(max, current + 1)
    wr(current)

};


basicRecursion(10, 0);
wr();

// Fibonacci

function fibonacci(n) {
    if (n <= 2) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)

    }
};

for (let i = 0; i <= 20; i++) {

    wrFib(`${i}. ${fibonacci(i)}`)

};