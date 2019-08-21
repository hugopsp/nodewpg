number = 0;
sum = 0;

while (number <= 1000) {

  if (number % 2 != 0) {
    console.log(number);
    sum += number;
  }
  number++;
}
console.log(`Final result: ${sum}`);
