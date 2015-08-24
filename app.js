var express = require('express');
var app = express();

var server  = app.listen(4001,function(){
	
	
	var address = server.address().address;
	var port = server.address().port;
	
	console.log(server.address());
	
	console.log("listening @ localhost:%s %s",address,port)
});

app.get('/',function(req,res){
	res.send("Hello world");
});

app.get('/home',function(req,res){
	res.send("Hello world");
});