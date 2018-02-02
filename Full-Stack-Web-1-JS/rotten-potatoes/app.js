const express = require('express');
const methodOverride = require('method-override')
const app = express();
const exphbs = require('express-handlebars');
/* Accepting form data  
	init body-parser and add it to app
	body-parser gives us a new attribute of the req object called req.body
	and this contain the form data
*/

// database models
const Comment = require('./models/comment');
const Review = require('./models/review')
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
// initialize mongoose
const mongoose = require('mongoose');

// create view templates
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// .use() allows us to use a new middleware and this allows us override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))
// this line must appear after app and before the routes
app.use(bodyParser.urlencoded({ extended: true }));

// connecting to a database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes', 
	{ useMongoClient: true });
// making a model
const Review = mongoose.model('Reviews', {
	title: String,
	description: String,
	movieTitle: String,
	rating: Number
})

// INDEX
app.get('/', (req, res) => {
  Review.find().then((reviews) => {
    res.render('reviews-index', {reviews: reviews});
  }).catch((err) => {
    console.log(err);
  })
})

// NEW
app.get('/reviews/new', (req, res) => {
  res.render('reviews-new', {});
})

// CREATE
app.post('/reviews', (req, res) => {
  Review.create(req.body).then((review) => {
    console.log(review)
    res.redirect('/reviews/' + review._id) // Redirect to reviews/:id
  }).catch((err) => {
    console.log(err.message)
  })
})

// SHOW
app.get('/reviews/:id', (req, res) => {
  const findReviews = Review.findById(req.params.id)
  const findComments = Comment.find({reviewId: Object(req.params.id)})
  Promise.all([findReviews, findComments]).then((values) => {
    console.log(values)
    res.render('reviews-show', { review: values[0], comments: values[1] })
  }).catch((err) => {
    console.log(err.message);
  })
})

// EDIT
app.get('/reviews/:id/edit', function (req, res) {
  Review.findById(req.params.id, function(err, review) {
    res.render('reviews-edit', {review: review});
  })
})

// UPDATE
app.put('/reviews/:id', (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body).then((review) => {
    res.redirect('/reviews/' + review._id)
  }).catch((err) => {
    console.log(err.message)
  })
})


// DELETE
app.delete('/reviews/:id', function (req, res) {
  console.log("DELETE review")
  Review.findByIdAndRemove(req.params.id).then((review) => {
    res.redirect('/');
  }).catch((err) => {
    console.log(err.message);
  })
})

// NEW Comment
app.post('/reviews/comment', function(req, res) {
  Comment.create(req.body).then(function(comment) {
    res.redirect('/reviews/' + comment.reviewId)
  }).catch(function(err) {
    console.log(err.message)
  })
})


// start server
app.listen(port, function() {
	console.log('Port is listening on port: ' + port);
})