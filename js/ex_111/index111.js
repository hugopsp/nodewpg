function even(num) {
    if (num % 2 === 0) {
        console.log(num +' is even');
        return true;
    }
    else {
        console.log(num + ' is odd');
        return false;
    }


}
even(2);
even(5);
even(3);
even(24);
even(12);