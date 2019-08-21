let result = 0;
let i = 0;

while (i <= 1000){
  console.log(i);
  result += i; //result = result + i
  console.log('Partial result: ' + result);
  i++;
}
console.log(`Final result: ${result}`);