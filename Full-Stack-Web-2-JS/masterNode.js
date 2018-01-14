// calling a native node module 
import http from 'http'

import fs from 'fs'
// using utf basically turns the buffer into readable text 
var myReadStream = fs.createReadStream('./MOCK_DATA.csv', 'utf8');

var myWriteStream = fs.createWriteStream('./write.csv');

// piping it into a write stream
myReadStream.pipe(myWriteStream)

/* this is manual event listener  */
// myWriteStream.on('data', (chunk) => {
// 	console.log('new chunk received!');
// 	myWriteStream.write(chunk);
// });