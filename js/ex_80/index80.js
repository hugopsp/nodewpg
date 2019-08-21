number = 0;
sum = 0;
do{
    if (number % 2 != 0) {
        console.log(number);
        sum += number;
      }
      number++;
}while (number <= 1000) {

}
console.log(`Final result: ${sum}`);
