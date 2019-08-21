const lines = 13;
let actualLine = 0;
while (actualLine < lines){
    let stars = "";
    let qtdStars = 0;
    while (qtdStars <= actualLine ){
        stars = stars + "*";
        qtdStars++;
    }
    actualLine++;
    console.log(stars);
}