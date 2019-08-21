let result = 0;
let i = 0;
do{
    console.log(i);
    result += i; //result = result + i
    console.log('Partial result: ' + result);
    i++;
}while (i <= 1000){
    
}
console.log(`Final result: ${result}`);