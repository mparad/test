var http = require('http');

function handler(req, res){
	res.end('Transfer');
}


var app = http.createServer(handler);

app.listen(80);