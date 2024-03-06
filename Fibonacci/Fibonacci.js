function Fibonacci(n) {
    if (n < 2) {
        return n;
    }

    return (Fibonacci(n - 1) + Fibonacci(n - 2));
}

function showAll(n) {
    const array = [];
    for (let i = 0; i < n; i++) {
        array.push(Fibonacci(i));
    }
    return array;
}

console.log(showAll(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]