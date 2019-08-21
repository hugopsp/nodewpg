function getLongerText(first, second) {
    if (first.length > second.length) {
        return first;
    }
    else {
        return second;
    }

}
console.log(getLongerText('maria','a'));
console.log(getLongerText('maria','abacaxi'));


