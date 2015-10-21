var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');
var sec = require('./userkey.json');

app.get('/Oauth.js',function(req,res){
  res.sendFile(__dirname+'/Oauth.js');
});
app.get('/',function(req,res){
  res.sendFile(__dirname+'/Oauth.html');
});

io.on('connection', function(socket){
  socket.on('give apiKey', function(){
    io.emit('return apiKey',sec.apiKey);
  });
  socket.on('give clientId', function(){
    io.emit('return clientId',sec.clientId);
  });
  socket.on('give name and birthday',function(data){
    var client = mysql.createConnection ({
      user: 'dykim',
      password : sec.password,
      database : 'dykim',
      host : 'jpdev.silver.knowre.com'
    });
      client.query('use dykim');
      client.query('select *from googlebirthday');
      client.query('insert into googlebirthday(username,userbirthday) values ("'+data.name+'","'+data.birthday+'");');
  })
});

http.listen(8080, function(){
  console.log('listening on 8080...');
});
