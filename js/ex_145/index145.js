const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!',
};

const verifyLogin = function (user) {
    if ((user.username === 'batman' && user.password === 'Alfred1960ROCKS!')) {
        console.log('Welcome back batman!!');
    } else {
        console.log('Sorry, you can\'t enter the Batcave, try again..');
    }
}
verifyLogin(user)
