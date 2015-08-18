
var http = require('http');

function start() {
	function onRequest(request, response){
	console.log('Request received');
	response.writeHead(200, {"contentType":"text/plain"});
	var body = '<html>'+
		'<head>'+'<meta http-equiv="contentType" content="text/html; '+
		'charset=UTF-8" />'+
		'</head>'+'<body>'+
			'<FORM NAME ="form1" ACTION="app.js" METHOD="get">'+
			'<INPUT TYPE="text" NAME="getvalue"></INPUT>'+
			'<INPUT TYPE="submit" VALUE="send_get">'+
			'</FORM>'+
			'<FORM NAME ="form2" ACTION="app.js" METHOD="post">'+
			'<INPUT TYPE="text" NAME="postvalue"></INPUT>'+
			'<INPUT TYPE="submit" VALUE="send_post">'+
			'</FORM>'+
			'</body>'+'</html>'
	response.write(body);
	response.end();
	}
	http.createServer(onRequest).listen(8880);
	console.log('Server has started.');
}
exports.start = start;
