// Basic application of recursion
const container = document.querySelector('.container');

let wr = (msg = '--------') => container.innerHTML += `<span class="numbers">${msg}</span>`

function basicRecursion(max, current) {
    if (current > max) return;

    setTimeout(() => {
        basicRecursion(max, current + 1)
        wr(current)
    }, 500)
}


basicRecursion(10, 0)
wr()