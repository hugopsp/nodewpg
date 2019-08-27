let num = [];

for (let i = 1; i < 1001; i++) { //push it number to num up to 1000
    num.push(i);
}

let partialResult = 0;
for (let i = 0; i < num.length; i++) {
    partialResult += num[i];
    console.log(partialResult);
}
if (partialResult === 500500) {
    console.log("Good Job!!!");

}