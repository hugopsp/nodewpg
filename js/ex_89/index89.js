let result = 0;
let i = 0;
for(i=0; i<=1000; i++){
    console.log(i);
    result += i; //result = result + i
    console.log('Partial result: ' + result);
}
console.log(`Final result: ${result}`);
