// Create a new index104.js file
// Define a fibonacci variable and assign a function value
// When executing the fibonacci function it will print the 10 first fibonacci sequence numbers as output
// Execute this function 3 times
let fibonacci = function () {
    let f = 0;
    let f1 = -1;
    let f2 = 1;

    const n = 55;

    while (f < n) {
        f = f1 + f2;
        f1 = f2;
        f2 = f;
        console.log(f)
    }
}
fibonacci();
fibonacci();
fibonacci(); 