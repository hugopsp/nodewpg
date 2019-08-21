// Create a new index108.js file
// Define a sort function that accepts 3 numeric parameters with the following names: number1, number2 and number3
function sort(number1, number2, number3, highToLow) {

    let temporary;

    if (number1 > number2) {
        temporary = number1;
        number1 = number2;
        number2 = temporary;
    }

    if (number1 > number3) {
        temporary = number1;
        number1 = number3;
        number3 = temporary;
    }

    if (number2 > number3) {
        temporary = number2;
        number2 = number3;
        number3 = temporary;
    }

    if (highToLow) {
        console.log(number1, number2, number3);

    } else {
        console.log(number3, number2, number1);

    }
}
sort(10, 8, 25, true);
sort(10, 8, 25, false);