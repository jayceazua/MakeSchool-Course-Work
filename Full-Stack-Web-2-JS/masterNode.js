var fs = require('fs');
var readableStream = fs.createReadStream('./MOCK_DATA.csv');
var writableStream = fs.createWriteStream('./trans_data.csv');

// .setEncoding is to translate the buffer into readable data
readableStream.setEncoding("utf8");

readableStream.on('data', function(chunk) {
	console.log("Streaming just got some buffer data.")
	writableStream.write(chunk);
})