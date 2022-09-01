const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = result.input.split(" ")
    let arr = []
    for (let i = a.length-1; i >= 0; i--) {
         arr.push(a[i])
    } console.log(arr.join(" "));
  
});
