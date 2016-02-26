var fs = require('fs')
var path = require('path')
module.exports = function (dir, extname, callback){
    fs.readdir(dir, function(err, file){
	if(err)
	  return  callback(err)
 	var str = file.toString()		
    	str = str.split(",")
        var str1 = "."
   	var ans = []
	for(var i = 0; i < str.length; i++){
    	    if(path.extname(str[i]) == str1.concat(extname)){
                ans.push(str[i])
            }
    	}
	callback(null,ans)
    })
}

