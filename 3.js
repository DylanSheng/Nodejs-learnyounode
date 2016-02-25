var fs = require('fs')
var sum = 0
var buf = fs.readFileSync(process.argv[2])
var str = buf.toString()

var strsub = str.split("\n")

for(var i = 1; i < strsub.length; i++){
    	sum++  
}

console.log(sum)
