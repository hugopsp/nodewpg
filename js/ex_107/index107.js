// The biggerNumber must the following output: Number %firstNumber% is bigger than %secondNumber%
// In this case you need to validate which number is bigger than the other to get the right feature and output
// Also add the validation to check if both numbers are equal, if so then show the following message: Both numbers are %number%
// Make sure that the parameters are numbers, you can use typeof for it
// Show a error message in case any of the parameters are not number
// Call the biggerNumber with the following parameters: 6 and 3
// Call the biggerNumber with the following parameters: 2 and 2

const biggerNumber = function (firstNumber, secondNumber) {
  if (typeof(firstNumber) != 'number' && typeof(secondNumber) != 'number') {
    console.log('Error: parameters are not number');
  }
  if (firstNumber === secondNumber) {
    console.log(`Both numbers are ${firstNumber}`);
    return;
  }
  if (firstNumber > secondNumber) {
    console.log(`Number ${firstNumber} is bigger than ${secondNumber}`);
  }
  else {
    console.log(`Number ${secondNumber} is bigger than ${firstNumber}`);

  }
}
biggerNumber(6,3);
biggerNumber(2,2);