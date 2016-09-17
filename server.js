//Lets require/import the HTTP module
var http = require('http');
var fs=require('fs');

//Lets define a port we want to listen to
const PORT=80;

//We need a function which handles requests and send response
function handleRequest(request, response){
   fs.readFile("index.html",function(error,data){
       if(error){
           response.writeHead(404,{"Content-type":"text/plain"});
           response.end("Sorry the page was not found");
       }else{
           response.writeHead(202,{"Content-type":"text/html"});
           response.end(data);
       }
   });
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
