//setInterval(function() {
//	    console.log("world");
//    }, 2000);
//
//console.log("hello")

var http = require('http');
var server =
	http.Server(function (request, response) {
		    console.log("creating a connection...");
			response.writeHead(200, {"Content-Type" : "text/plain"});
			response.end("hello world");
		   // request.on('data', function(data) {
		   // 	response.write(data);
		   // });
		});

server.listen(8000)

