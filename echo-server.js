//var http = require('http');
//
//var server =
//	http.Server(function(request, response) {
//		console.log("Establishing connection...");
//		response.writeHead(200, {"Content-Type" : "text/plain"});
//
//		setInterval(function(){
//			response.write("hello world");
//		},2000)
//	});
//
//server.listen(8000);

// TCP
var net = require('net')

var tcpServer =
	net.Server(function(socket) {
		console.log("New TCP connection established");

		socket.on('data', function(data){
			socket.write(data);
		});
	});

tcpServer.listen(5001);

