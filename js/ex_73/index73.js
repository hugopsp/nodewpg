let stars = "*************";
const lines = 13;
let actualLine = 0;
while (actualLine < lines){
    console.log(stars.substr(actualLine, lines));
    actualLine++;
}