var a = console.log(process.argv);
var sum = 0;
for (var i = 2: i < a.length; ++i) {
    sum = sum + Number(a[i]);
}

console.log(sum);