const userAndPassword = 'pepito2017,12345';
const username = 'pepito2017';
const uP = userAndPassword.substr(0,10)
const password = '12345';
const pP = userAndPassword.substr(11,password.length)

var template = `The user ${uP} has ${pP} as password`

console.log(template);
