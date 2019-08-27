// Create a new index138.js file
// Define a mutants array with the following values:
// Professor X
// Cyclops
// Iceman
// Angel
// Magneto
// Beast
// Phoenix
// Logan
const mutants  = ['Professor X', 'Cyclops','Iceman', 'Angel','Magneto', 'Beast', 'Phoenix','Logan','Gambit'];

const emoji = mutants.map(function(mutant){
    if(mutant === 'Professor X' || mutant === 'Logan' || mutant === 'Phoenix' || mutant === 'Gambit' )
    return '<3 '.concat(mutant);
});

console.log(mutants);
console.log(emoji);