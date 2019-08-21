const firstName = 'Hugo';
const lastName = 'Prado';
const characterCountF = firstName.length;
const characterCountL = lastName.length;

let template =`My name is ${firstName} and it is ${characterCountF} characters long`;
let template2 =`My last name is ${lastName} and it is ${characterCountL} characters long`;

let dif = characterCountF - characterCountL;
let bigger = firstName >= lastName;

console.log(template); 
console.log(template2);
console.log('The character difference between my first name and last name is: ' + dif);
console.log('My first name is longer than my last name: ' + bigger); 

