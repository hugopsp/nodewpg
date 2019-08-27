

const player = {
    name: null,
    energy: 100,
    lives: 3,
    lostEnergy: function (damage) {
        if (this.energy - damage < 0) {
            this.energy = 0;
            this.loseLife();
        } else {
            this.energy = this.energy - damage
        }
    },
    recoverEnergy: function (recover) {
        if (this.energy + recover > 100) {
            this.energy = 100;
        } else {
            this.energy = this.energy + recover
        }
    },
    loseLife: function ()  { this.lives-- },
    recoverLife: function ()  { if (this.lives < 99) { this.lives++ }},
}

player.name = 'Hugod';
player.loseLife();
player.lostEnergy(10);
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);
player.lostEnergy(5);
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);
player.lostEnergy(15);
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);
player.lostEnergy(20);
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);
player.recoverEnergy(10)
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);
player.lostEnergy(30);
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);
player.lostEnergy(40);
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);
player.loseLife();
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);
player.recoverLife();
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);
player.recoverLife();
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);

