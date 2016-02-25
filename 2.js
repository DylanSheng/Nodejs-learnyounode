var sum = 0;

//user's input will be derictly stored in process.argv 
for (var i = 2; i < process.argv.length; ++i) {
    sum = sum + Number(process.argv[i]);
}

console.log(sum); //orint sum
