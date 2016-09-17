// Credit to user1937198 on StackOverflow for the response code
var http = require('http');
var fs = require('fs');

// Port to listen to
const PORT=80;

function handleRequest(request, response){
   fs.readFile("." + request.url,function(error,data){
	if(request.url == "/"){
	   fs.readFile("index.html",function(error,data){
		response.writeHead(202,{"Content-type":"text/html"});
           	response.end(data);
	   });
	} else {
	   fs.readFile("."+request.url,function(error,file){
		if(error){
			response.writeHead(404,{"Content-type":"text/plain"});
           		response.end("Sorry the page was not found");
		} else {
			if((request.url).match(/(gif|png|jpg|jpeg|ico)$/)){
				response.writeHead(202,{"Content-type":"image"});
                        	response.end(file,'binary');
			} else {
           			response.writeHead(202,{"Content-type":"text/html"});
           			response.end(file);
			}
		}
	   });
	}
   });
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    // Add logging to a file for future reference?
    console.log("Server listening on: http://localhost:%s", PORT);
});
