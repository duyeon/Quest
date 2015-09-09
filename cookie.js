var fs = require('fs');
var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

app.use(cookieParser());
app.use(bodyParser());

app.get('/iu', function(request, response) {
	
		response.send("<h1>이지은!</h1>");
	
});
app.get('/suzi', function(request, response) {
	
		response.send("<h1>배수지!</h1>");
	
});
app.get('/krystal', function(request, response) {
	
		response.send("<h1>정수정!</h1>");
	
});
app.get('/login', function(request, response) {
	fs.readFile('login.html', function(error, data){
		response.send(data.toString());
	});
});

app.post('/login', function(request, response){
		var login = request.param('login');
		var password = request.param('password');
		
	
	if(login =='iu' && password == '1234') {
		response.cookie('auth', true);
		response.redirect('/iu');
	} 
	else if(login =='suzi' && password == '4321') {
		response.cookie('auth', true);
		response.redirect('/suzi');
	} 
	else if(login =='krystal' && password == '0000') {
		response.cookie('auth', true);
		response.redirect('/krystal');
	} 
	else {
		response.redirect('/login');
		console.log("일치하는 사용자가 없습니다");
	}
});

http.createServer(app).listen(8080, function() {
	console.log("login server is running...");
});

		