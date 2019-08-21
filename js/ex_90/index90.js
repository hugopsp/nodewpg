let number ;
let sum = 0;
for(number = 0; number <=1000; number++){

  if (number % 2 != 0) {
    console.log(number);
    sum += number;
  }
}
console.log(`Final result: ${sum}`);