const user = {
    username: null,
    password: null,
    greet: function () {
        if (this.username != null) {
            console.log(`Hello, I'm user ${this.username}`);
            console.log(`This is just to show that its getting the password : ${this.password}`)

        } else {
            console.log('Please assign a username value');
        }
    },
    updaterUsername: function (username) {
        this.username = username;
    },
    updatePassword: function (password) {
        this.password = password;
    },
}
console.log('Before update:');
user.greet();
console.log('After update:');
user.updaterUsername('Hugo');
user.updatePassword('heyNico');
user.greet();