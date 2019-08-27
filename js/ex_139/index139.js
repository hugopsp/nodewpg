const numbers = []

for (let i = 1000; i > 0; i--) {
    numbers.push(i);
}

const even = numbers.filter(number => number % 2 === 0);
const odd = numbers.filter(number => number % 2 !== 0);


for (let i = 0; i < 10; i++) {
    console.log(i,even[i]);    
}

for (let i = odd.length -1; i > (odd.length - 21); i--) {
    console.log(i,odd[i]);    
}