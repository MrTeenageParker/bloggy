// Stuff to require
var express = require('express');
var app = express();
var path = require('path');

// Configuration for the app
app.use(express.static(path.join(__dirname, "public")));
app.set("port", 3000);

[][];;__

// Server stuff
var server = app.listen(app.get("port"),function() {
	var port = server.address().port;
	console.log("Listening to port " + port + "!");
});
