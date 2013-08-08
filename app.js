var express = require('express'),
	http = require('http'),
	path = require('path'),
	mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/database_name');

var app = express();

app.configure(function() {
	var public_path = path.join(__dirname, 'public');
	app.use(express.static(public_path));
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	app.use(express.session({secret: "chaN_ge#mE$?"}));
	app.use(app.router);
});

http.createServer(app).listen(8000, function() {
	console.log("Webserver started on port 8000!");
});