const text = 'HELLO';
const zeroChar = text.charAt(4); 
const firstChar = text.charAt(3); 
const secondChar = text.charAt(2);
const thirdChar = text.charAt(1); 
const fourthChar = text.charAt(0); 

const reverse1 = zeroChar.concat(firstChar);
const reverse2 = reverse1.concat(secondChar);
const reverse3 = reverse2.concat(thirdChar);
const reverseFinal = reverse3.concat(fourthChar);

console.log(reverseFinal.toLowerCase());
