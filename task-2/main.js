const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let numbers = result.input.split(" ")
    let max = parseInt(numbers[0])
    index = 0
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element>=max) {
            max=element
            index=i+1
        }
    } console.log(`${max}\n${index}`);
  
});
