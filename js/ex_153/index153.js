const arithmetic  = {
    add : function (number1, number2) {
         return (number1 + number2)
    },
    subtract: function (number1, number2) {
        return (number1 - number2)
    },
    multiply: function (number1, number2) {
        return (number1 * number2)
    },
    divide: function (number1, number2) {
        return (number1 / number2)
    },
    remainder: function (number1, number2) {
        return (number1 % number2)
    },
}
console.log('Add: ( 2 + 10 ) =', arithmetic.add(2, 10));
console.log('Subtract: ( 10 - 5 ) =', arithmetic.subtract(10, 5));
console.log('Multiply: ( 3 * 100 ) =', arithmetic.multiply(3, 100));
console.log('Divide: (40 / 2 ) =', arithmetic.divide(40, 2));
console.log('Remainder: ( 20 % 2 ) =', arithmetic.remainder(20, 2));