// call the module in node modules folder
var express = require('express');
// require a template engine
var handlebars = require('express-handlebars');
// initialize body parser
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
// invoke the express
var app = express();

// middleware for the template
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
// declaring the view engine to "handlebars"
app.set('view engine', 'handlebars');

// activate the middleware for bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// send static files to the client via javascript
app.use(express.static('public'));

// Mock data
mongoose.connect('mongodb://localhost/express-start', {
    useMongoClient: true,
});

var Todo = require('./models/todo.js');


// Index route get
app.get('/', function(req, res) {
    Todo.find().exec(function(err, todos) {
        res.render('home', { todos: todos });
    })

});

// show a single
app.get('/todos/:id', function(req, res) {
    Todo.findById(req.params.id).exec(function(err, todo) {
        res.render('todo-show', { todo: todo })
    })
});

// create
app.post('/todos', function(req, res) {
    // make the todo - this req.body is possible with bodyparser lets you submit form data
    var todo = req.body;
    Todo.create(todo, function(err, todo) {
        res.status(200).json(todo)
    });
});

// delete
app.delete('/todos/:id', function(req, res) {
	Todo.findById(req.body.id).exec(function (err, todo) {

		todo.remove();
		console.log("Clicked remove");
		res.status(200).json({});
	})
})
// update
// edit
// new

// turning on the server
var server = app.listen(3000, function() {
    console.log('I am alive!');
});