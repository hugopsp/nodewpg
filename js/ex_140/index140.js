const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];

const filter = mutants.filter(mutant => mutant !== 'Magneto' && mutant !== 'Iceman' && mutant !== 'Gambit');

console.log(filter);
