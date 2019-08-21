const year = 2010;
let champion = null;

switch (year) {
    case '2006':
        year = '2006';
        champion = 'Carolina Hurricanes';
        break;
    case '2007':
        year = '2007';
        champion = 'Anaheim Ducks';
        break;
    case '2008':
        year = '2008';
        champion = 'Detroit Red Wings';
        break;
    case '2009':
        year = '2009';
        champion = 'Pittsburgh Penguinas';
        break;
    case 2010:
        champion = 'Chicago';
        break;
    case '2011':
        year = '2011';
        champion = 'Boston Bruins';
        break;
    case '2012':
        year = '2012';
        champion = 'Los Angeles Kings';
        break;
    case '2013':
        year = '2013';
        champion = 'Chicago Blackhawks';
        break;
    case '2014':
        year = '2014';
        champion = 'Los Angeles Kings';
        break;
    case '2015':
        year = '2015';
        champion = 'Chicago Blackhawks';
        break;
    case '2016':
        year = '2016';
        champion = 'Pittsburgh Penguins';
        break;
    case '2017':
        year = '2017';
        champion = 'Pittsburgh Penguins';
        break;
}
if (year === null){
    console.log('ERROR');
}

if (year,champion != null){
    let temp = `In the year ${year} the champion was ${champion} `
    console.log(temp);
}