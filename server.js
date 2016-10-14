// Stuff to require
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs'); // for custom database
var fs = require('json-db');

// Configuration for the app
app.use(express.static(path.join(__dirname, "public")));
app.set("port",process.env.PORT || 3000); // Server port, with support for environments with fixed ports
app.set("ip",process.env.IP); // Server address (for servers with more than one IP allocated, or forced IP restrictions)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var db_path = 'db/db.json';

app.post('/post/get_posts', function(req,res){
	// logic
});

app.post('/post/blog_publish', function(req,res){
	// logic
});

app.post('/post/login_user', function(req,res){
	// logic
});

// Server stuff
var server = app.listen(app.get("port"),function() {
	var port = server.address().port;
	var address = server.address().address;
	console.log("Listening to port " + port + " on address " +  + "!");
});
