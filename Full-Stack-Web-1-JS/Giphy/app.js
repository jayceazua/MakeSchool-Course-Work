var http = require("http");
var express = require("express");
var app = express();

var exphbs = require('express-handlebars')


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  var queryString = req.query.term;
  // ENCODE THE QUERY STRING TO REMOVE WHITE SPACES AND RESTRICTED CHARACTERS
  var term = encodeURIComponent(queryString);
  // PUT THE SEARCH TERM INTO THE GIPHY API SEARCH URL
  var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC'

  http.get(url, function(response) {
    // SET ENCODING OF RESPONSE TO UTF8
    response.setEncoding('utf8');

    var body = '';

    response.on('data', function(d) {
    	
      // CONTINUOUSLY UPDATE STREAM WITH DATA FROM GIPHY
      body += d;
    });

    response.on('end', function() {
      // WHEN DATA IS FULLY RECEIVED PARSE INTO JSON
      var parsed = JSON.parse(body);
      // RENDER THE HOME TEMPLATE AND PASS THE GIF DATA IN TO THE TEMPLATE
      res.render('home', {gifs: parsed.data})
    });
  });
})

app.get('/hello-gif', function(request, response) {
	var gifUrl = "https://media.giphy.com/media/B77Yj3aZYZjmE/giphy.gif"
	// using the .render() is for a view template
	response.render('hello-gif', {gifUrl});
})

app.get('/greetings/:name', function(request, response) {
    var name = request.params.name;
    response.render('greetings', {name});
})



// Listening to a server
app.listen(3000, function() {
	console.log('Gif Search listening on port localhost: 3000!')
});