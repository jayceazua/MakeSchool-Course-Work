// call the module in node modules folder
var express = require('express');
// require a template engine
var handlebars = require('express-handlebars');
// initialize body parser
var bodyParser = require('body-parser');
// invoke the express
var app = express();

// middleware for the template
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
// declaring the view engine to "handlebars"
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// Mock data
var todos = [
	{ body: 'organize my dorm', completed: false },
	{ body: 'take out the trash', completed: false },
	{ body: 'clean up my github repo', completed: false }
];


// Index route get
app.get('/', function (req, res) {
	// we are rendering the home.handlebars template
	res.render('home', { todos: todos });
});

// show a single
app.get('/todos/:id', function (req, res) {
	// url param
	var todo = todos[req.params.id]
	res.render('todo-show', {todo: todo})
})
// create
app.post('/todos', function (req, res) {
	// make the todo - this req.body is possible with bodyparser lets you submit form data
	var todo = req.body;
	// push it into the array at the end
	todos.push(todo);
	// tell us and show us if it went through
	res.status(200).json(todo)
})
// delete
// update
// edit
// new

// turning on the server
var server = app.listen(3000, function () {
	console.log('I am alive!');
});