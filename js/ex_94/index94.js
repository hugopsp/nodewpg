const lines = 13;

for(let actualLine = 0; actualLine < lines; actualLine++){
    let stars = "";
    for(let qtdStars = 0; qtdStars <= actualLine; qtdStars++){
        stars = stars + "*";  
    }
    if (actualLine % 2 != 0){
        console.log(stars);
    }
}

// const lines = 13;
// let actualLine = 0;
// while (actualLine < lines){
//     let stars = "";
//     let qtdStars = 0;
//     while (qtdStars <= actualLine ){
//         stars = stars + "*";
//         qtdStars++;
//     }
//     actualLine++;
//     if (actualLine % 2 != 0){
//         console.log(stars);
//     }
// }