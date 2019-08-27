const superhero = {
    name: 'Batman',
    secretName: 'Bruce',
    sidekick: ['Robin', 'Alfred', 'Gordon'],
    strength: 70
};
console.log('without speed :');
console.log(`Name: ${superhero.name}, Secret Name: ${superhero.secretName}, Sidekick: ${superhero.sidekick}, Strenght: ${superhero.strength}`);

superhero.speed = 80;
console.log('with speed :');
console.log(`Name: ${superhero.name}, Secret Name: ${superhero.secretName}, Sidekick: ${superhero.sidekick}, Strenght: ${superhero.strength}, Speed: ${superhero.speed}`);