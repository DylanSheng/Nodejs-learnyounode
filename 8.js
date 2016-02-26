var http = require('http')
var stream = require('stream')
var bl = require('bl')
http.get(process.argv[2],function callback(response){
	response.setEncoding("utf8")
	response.pipe(bl(function(err,data){
		data = data.toString()
		
		console.log(data.length)
       		console.log(data)
		})
	)
		
}
)
