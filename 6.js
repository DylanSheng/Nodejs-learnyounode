var mymodule = require('./mymodule.js')
mymodule(process.argv[2],process.argv[3],function(err,list){
   if(err)
      return callback(err)
   for(var i = 0; i < list.length; i++){
	console.log(list[i])	
    } 
})

