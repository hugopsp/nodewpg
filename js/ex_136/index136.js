const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
const finder = [];
mutants.forEach(mutant => {
    if (mutant === 'Iceman' || mutant === 'Logan' || mutant === 'Phoenix')
        finder.push(mutant);
});
let finderToString = finder.toString();
console.log(finderToString);