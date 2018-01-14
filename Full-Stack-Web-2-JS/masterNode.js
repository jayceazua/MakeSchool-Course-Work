// calling a native node module 
var http = require("http");

var fs = require("fs");
// using utf basically turns the buffer into readable text 
var myReadStream = fs.createReadStream('./MOCK_DATA.csv', 'utf8');

var myWriteStream = fs.createWriteStream('./write.csv');

myWriteStream.on('data', function(chunk) {
	console.log('new chunk received!');
	myWriteStream.write(chunk);
});