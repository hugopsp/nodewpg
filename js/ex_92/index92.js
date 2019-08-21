const lines = 13;

for(let actualLine = 0; actualLine < lines; actualLine++){
    let stars = "";
    for(let qtdStars = 0; qtdStars <= actualLine; qtdStars++){
        stars = stars + "*";
    }
    console.log(stars);
}