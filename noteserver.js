var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var sys = require('sys');
var util = require('util');

function onRequest(request, response){
	var pathname = url.parse(request.url).pathname;
	
	 if(pathname == '/'){
	 		fs.readFile('./TabNotepad.html', function (error, data) {
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data,'utf-8');
				});
				
		};
		 
	if(pathname =='/new'){
		
		request.setEncoding('utf8');
		request.on('data',function(chunk){
			var querystring = require("querystring");
			var formdata = querystring.parse(chunk);
			var arr = [];
			for(var key in formdata){
				arr.push(key+formdata[key]);
			}
			fs.writeFile(arr[0]+'.txt','', function(error, data){
				if (error) throw error;
				console.log("새파일이 생성되었습니다.");
			});
		});
		request.on('end',function(){});
	};
	
	if(pathname == '/save'){
		request.setEncoding('utf8');
		request.on('data',function(chunk){
			var querystring = require("querystring");
			var _fname = querystring.parse(chunk).fname;
			var _fcontent = querystring.parse(chunk).fcontent;
		
			fs.writeFile(_fname+'.txt', _fcontent, function(error, data){
				if (error) throw error;
				console.log("파일이 저장되었습니다.");
			});
		
		});
		request.on('end',function(){});
	};
	
	if(pathname == '/load'){
		
		request.setEncoding('utf8');
		request.on('data',function(chunk){
			var querystring = require("querystring");
			var formdata = querystring.parse(chunk);
			var arr = [];
			for(var key in formdata){
				arr.push(key+formdata[key]);
			}
			fs.readFile(arr[0]+'.txt', function(error, data){
				if (error) throw error;
				console.log("파일이 로드되었습니다.");
				response.writeHead(200, {'Content-Type':'text/plain'});
				response.end(data,'utf-8');
				
			});
		});
		request.on('end',function(){});
};
		if(pathname == '/switch'){
		
		request.setEncoding('utf8');
		request.on('data',function(chunk){
			var querystring = require("querystring");
			var formdata = querystring.parse(chunk);
			var arr = [];
			for(var key in formdata){
				arr.push(key+formdata[key]);
			}
			fs.readFile(arr[0]+'.txt', function(error, data){
				if (error) throw error;
				response.writeHead(200, {'Content-Type':'text/plain'});
				response.end(data,'utf-8');
				
			});
		});
		request.on('end',function(){});
};

};
var server = http.createServer(onRequest);
server.listen(8080);
console.log('Server is running...');


