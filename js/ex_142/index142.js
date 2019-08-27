const firstPerson = ['Hugo ', 'Prado ', '1179 Grant Av ', 16];
// const secondPerson = ['Serafim ', 'Prado ', '1179 Grant Av ', 76]; //to test the second person with different names
const secondPerson = ['Hugo ', 'Prado ', '1179 Grant Av ', 16];

const reduceF = firstPerson.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});

const reduceS = secondPerson.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});

if(reduceF === reduceS){
  console.log('The name are the same');
  console.log(reduceF);

}
else{
  console.log('The name are not the same');
  console.log(reduceF);
  console.log(reduceS);
}
