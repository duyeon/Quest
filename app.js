var fs = require('fs');
var http = require('http');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var url = require('url');
var path = require('path');
var sys = require('sys');
var util = require('util');
var sec = require('./userdata.json');
// Mysql과 연결


function onRequest(request,response){
	var pathname = url.parse(request.url).pathname;
	var arr = [];
	var client = mysql.createConnection ({
		user : 'dykim',
		password : sec.password,
    	database : 'dykim',
		host : 'jpdev.silver.knowre.com'
			});
	client.query('use dykim');
	
	/*if(pathname=='/Library.js'){
		fs.readFile('./Library.js', function (error, data) {
			response.writeHead(200, {'Content-Type':'text/javascript'});
			response.end(data,'utf-8');
				});
	}
	*///이게 왜 include가 안될까요 ㅠㅠ 
	if(pathname == '/'){
	 		fs.readFile('./list.html', function (error, data) {
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data,'utf-8');
				});
	};
	if(pathname == '/show'){
		
		
		client.query('select *from Library',function(err,result){
		var stringobj = JSON.stringify(result);
		response.writeHead(200,{'Content-Type':'text/plain'});
		response.end(stringobj);
			});
		};
	if(pathname == '/search'){
		
		request.setEncoding('utf8');
		request.on('data',function(chunk){
			var querystring = require('querystring');
			var keytype = querystring.parse(chunk).type;
			var keyword = querystring.parse(chunk).key;
			
		client.query('select *from Library where ('+ keytype+'="'+keyword+'");',function(err,result){
			
			var stringob = JSON.stringify(result);
			response.writeHead(200,{'Content-Type':'text/plain'});
			response.end(stringob);
		});
	});
	};
	if(pathname=='/borrowbook'){
		
		request.setEncoding('utf8');
		request.on('data',function(chunk){
			var querystring = require("querystring");
			var keyword = querystring.parse(chunk)._word;
			var keytime = querystring.parse(chunk)._time;
			var keyuser = querystring.parse(chunk)._user;
			
			client.query('select 대출가능여부 from Library where Book="'+keyword+'";',function(e,d){
			if(d[0].대출가능여부 === '가능'){
				client.query('update Library set 대출가능여부="불가능" where Book="'+keyword+'";');
				client.query('select *from Library',function(err,result){
							var stringobj = JSON.stringify(result);
							response.writeHead(200,{'Content-Type':'text/plain'});
							response.end(stringobj);
					});
			}
			
			else{
				response.writeHead(200,{'Content-Type':'text/plain'});
				response.end('fail');
			}
		});
		client.query('update Library set returndate=null where Book="'+keyword+'";');	
		client.query('update Library set borrowdate="'+keytime+'" where Book="'+keyword+'";');
		client.query('update Library set user="'+keyuser+'" where Book="'+keyword+'";');
		});
		
	};
	if(pathname=='/returnbook'){
		
		request.setEncoding('utf8');
		request.on('data',function(chunk){
			var querystring = require("querystring");
			var keyword = querystring.parse(chunk)._word;
			var keytime = querystring.parse(chunk)._time;
			
		
			
			client.query('select 대출가능여부 from Library where Book="'+keyword+'";',function(e,d){
			if(d[0].대출가능여부 === '불가능'){
				client.query('update Library set 대출가능여부="가능" where Book="'+keyword+'";');
				client.query('select *from Library',function(err,result){
							var stringobj = JSON.stringify(result);
							response.writeHead(200,{'Content-Type':'text/plain'});
							response.end(stringobj);
					});
			}
			
			else{
				response.writeHead(200,{'Content-Type':'text/plain'});
				response.end('fail');
			}
		});
		client.query('update Library set borrowdate=null where Book="'+keyword+'";');	
		client.query('update Library set returndate="'+keytime+'" where Book="'+keyword+'";');
		client.query('update Library set user=null where Book="'+keyword+'";');
		});
	};
		
};

var server = http.createServer(onRequest);
server.listen(8080, function(){
	console.log('server running...');
});
