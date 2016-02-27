var http = require('http')
var url = require('url')
var server = http.createServer(function(req,res){
	var t = url.parse(req.url, true)
	if(t.pathname == "/api/parsetime"){
		var t2 = t.search.slice(5)
		var d = new Date(t2)
		var hour = d.getHours()
		var minute = d.getMinutes()
		var second = d.getSeconds()
		var ans = JSON.stringify({'hour': hour,'minute': minute,'second': second})
	}
	else if(t.pathname == "/api/unixtime"){
		var t2 = t.search.slice(5)
		var d = new Date(t2)
		var unixtime = d.getTime()
		var ans = JSON.stringify({'unixtime':unixtime})
	}
	
	res.writeHead(200, { 'Content-Type': 'application/json' })
	res.end(ans)
})

server.listen(process.argv[2])
