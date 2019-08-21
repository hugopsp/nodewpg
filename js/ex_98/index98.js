let sum = 0;
for (let number = 0; number <= 1000; number++) {
    console.log(number);
    sum += number;
    if (sum >= 400) {
        break;
    }
}
console.log(`Final result: ${sum}`);
