const playerName = 'Patrik Laine is lame';
const teamsVar = 'New Jersey Devils, New York Rangers, Winnipeg Jets & Pittsburgh Penguins';
const messager = 'Winnipeg is the best Canadian city, Go Winnipeg';

const pN = playerName.slice(0,-4);
const tV = teamsVar.slice(46,-22);
const m1 = messager.slice(12,-27);
const m2 = messager.slice(34,-8);

var template = `${pN}${m1} ${tV} player ${m2}Jets!!`

console.log(template);
