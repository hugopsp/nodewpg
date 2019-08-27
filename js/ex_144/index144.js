const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!',
};

console.log('Before :');
console.log(user.username);
console.log(user.password);

console.log('After :');
console.log(user.username.toUpperCase());
console.log(user.password.replace('1960', ' '));
