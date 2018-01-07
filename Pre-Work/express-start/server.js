// call the module in node modules folder
var express = require('express');
// require a template engine
var handlebars = require('express-handlebars');
// invoke the express
var app = express();
// middleware for the template
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
// declaring the view engine to "handlebars"
app.set('view engine', 'handlebars');

// we are rendering the home.handlebars template
app.get('/', function (req, res) {
		//  demo data
	var todos = [
		{ body: 'organize my dorm', completed: false },
		{ body: 'take out the trash', completed: false },
	];
	res.render('home', {todos: todos});
});


// turning on the server
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});