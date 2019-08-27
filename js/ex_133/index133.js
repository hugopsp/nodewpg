const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];

for (let i = 0; i < mutants.length; i++) {
    const mutant = mutants[i];
    if(mutant === 'Magneto' ) {
        break;
    }
    console.log(mutant);
}

const magneto = mutants.indexOf('Magneto');

mutants.splice(magneto,1);

for (let i = 0; i < mutants.length; i++) {
    console.log(i, mutants[i].toUpperCase());
}


