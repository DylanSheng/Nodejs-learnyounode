var fs = require('fs')
var path = require('path')
fs.readdir(process.argv[2], function (err, list) {
    var str = list.toString()
    str = str.split(",")
    var str1 = "."
    for (var i = 0; i < str.length; i++) {

        if (path.extname(str[i]) == str1.concat(process.argv[3])) {
            console.log(str[i])

        }
    }
})