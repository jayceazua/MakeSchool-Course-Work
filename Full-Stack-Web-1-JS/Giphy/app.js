var express = require("express");
var app = express();

app.get('/hello-world', function(request, response) {
	response.send("Hello World");
})



// Listening to a server
app.listen(3000, function() {
	console.log('Gif Search listening on port localhost: 3000!')
});