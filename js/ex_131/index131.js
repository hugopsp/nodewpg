// Create a new index131.js file
// Define a femaleStudents array and assign 5 students
// Define a maleStudents array and assign 5 students
// Define a students array and assign all students name using the femaleStudents and maleStudents arrays
// Sort the students list
// Show the following output:
// Each femaleStudents name using numeric indexes
// Each maleStudents name using while
// Each students name using for

let femaleStudents = ['marley','samara','rica','sophy','bianca'];
let maleStudents = ['hugo','nico','bob','josh','ash'];
const students = femaleStudents.concat(maleStudents).sort();

console.log( `${femaleStudents[0]} ${femaleStudents[1]} ${femaleStudents[2]} ${femaleStudents[3]} ${femaleStudents[4]} `);

let num = 0 ;
let maleName = '';
while (num < maleStudents.length) {
    maleName += `${maleStudents[num]} `;
    num++;
}
console.log(maleName);

let showStudentsNames = '';
for (let i = 0; i < students.length; i++) {
    showStudentsNames += `${students[i]} `;    
}
console.log(showStudentsNames);
