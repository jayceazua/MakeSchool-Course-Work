const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
/* Accepting form data  
	init body-parser and add it to app
	body-parser gives us a new attribute of the req object called req.body
	and this contain the form data
*/
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
// initialize mongoose
const mongoose = require('mongoose');

// create view templates
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// this line must appear after app and before the routes
app.use(bodyParser.urlencoded({ extended: true }));

// connecting to a database
mongoose.connect('mongodb://localhost/rotten-potatoes', 
	{ useMongoClient: true });
// making a model
const Review = mongoose.model('Reviews', {
	title: String,
	description: String,
	movieTitle: String,
	rating: Number
})

// Home
app.get('/', function(req, res) {
	// .render() references to render view templates
	res.render('home', { msg: 'Connected correctly!' });
});

// Index
app.get('/reviews', function(req, res) {
	// find method returns a promise
	Review.find().then(function(reviews) {
	   res.render('reviews-index', { reviews })
	   // use a catch method just incase the promise is rejected
	}).catch(function(err) {
		console.log(err);
	})
})

// New
app.get('/reviews/new', function(req, res) {
	res.render('reviews-new', {})
})

// Create
app.post('/reviews', function(req, res) {
	Review.create(req.body).then(function(review) {
		console.log(review);
		// after the review is created redirect to the root to see our new review
		res.redirect('/reviews');
	}).catch(function(err) {
		console.log(err.message)
	})
})





// start server
app.listen(port, function() {
	console.log('Port is listening on port: ' + port);
})