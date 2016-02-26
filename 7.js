var http = require('http')
var stream = require('stream')

http.get(process.argv[2],function callback(response){
	response.setEncoding("utf8")
	response.on("data",function(data){
		console.log(data)
	})
	
    }

)
