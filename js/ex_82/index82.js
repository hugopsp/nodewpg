const lines = 13;
let actualLine = 0;
do {
    let stars = "";
    let qtdStars = 0;
    do {
        stars = stars + "*";
        qtdStars++;
    } while (qtdStars <= actualLine);
    actualLine++;
    console.log(stars);
} while (actualLine < lines);