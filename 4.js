var fs = require('fs')

var str = fs.readFile(process.argv[2], function(err, data){
   var str = data.toString()

    var strsub = str.split("\n")
    var sum = 0
    for(var i = 1; i < strsub.length; i++){
        sum++
    }

    console.log(sum)
})
