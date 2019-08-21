let evenNumbers = [];
for (let number = 0; number <= 1000; number++) {
    if (number % 2 == 0) {
        evenNumbers.push(number);
    }
    if (evenNumbers.length == 20) {
        break;
    }
}
console.log(evenNumbers);

