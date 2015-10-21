var http = require('http');
var url =  require('url');
var path = require('path');
var fs = require('fs');
var mysql = require('mysql');
var sec = require('./userkey.json');
function onRquest(request, response){
  var pathname = url.parse(request.url).pathname;
  var client = mysql.createConnection ({
    user: 'dykim',
    password : sec.password,
    database : 'dykim',
    host : 'jpdev.silver.knowre.com'
  });
  client.query('use dykim');

  if(pathname =='/'){
    fs.readFile('./Oauthgoogle.html',function(error,data){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.end(data,'utf-8');
    });
  };
  if(pathname='/save'){
    request.setEncoding('utf8');
    request.on('data',function(chunk){
      var querystring = require('querystring');
      var username = querystring.parse(chunk)._name;
      var userbirthday = querystring.parse(chunk)._birthday;
    
      client.query('select *from googlebirthday');
      client.query('insert into googlebirthday(username,userbirthday) values ("'+username+'","'+userbirthday+'");');
    });

  };
}

var server = http.createServer(onRquest);
server.listen(8080, function(){
  console.log('server 8080 running...');
});
