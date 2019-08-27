let num = [];
 for (let i = 1; i < 1001; i++) {
     num.push(i);     
 }

num.map(function(number, index) {
    console.log(`index: ${ index }, original number: ${ number }, incremented value: ${ number + 10 }`);
})

