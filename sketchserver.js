var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/heyjs.js',function(req,res){
  res.sendFile(__dirname+'/sketch.js');
})
app.get('/', function(req, res){
  res.sendFile(__dirname + '/sketch.html');
});

io.on('connection', function(socket){

  socket.on('make rec', function(data){
    io.emit('draw rec',data);
  });
  socket.on('make cir', function(data){
    io.emit('draw cir',data);
  });
  socket.on('make tri', function(data){
    console.log('tri');
    io.emit('draw tri',data);
  });
  socket.on('select target',function(data){
    io.emit('selected',data);
  });
  socket.on('delete',function(){
    io.emit('deleted');
  });
  socket.on('go left',function(){
    io.emit('left');
  });
  socket.on('go up',function(){
    io.emit('up');
  });
  socket.on('go right',function(){
    io.emit('right');
  });
  socket.on('go down',function(){
    io.emit('down');
  });

});

http.listen(3500, function(){
  console.log('listening on *:3500');
});
