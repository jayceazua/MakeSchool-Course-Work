// Learn You Node 1
// console.log("HELLO WORLD");
/***********************************/
// Learn You Node 2
// console.log(process.argv);

// var total = 0;

// for (var i = 2; i < process.argv.length; i++) {
// 	total += Number(process.argv[i])
// }

// console.log(total);
/***********************************/
// Learn you Node 3

// var fs = require('fs')
// var filePath = process.argv[2];
// // synchronous === blocking
// console.log(fs.readFileSync(filePath, 'utf8').split('\n').length -1)


/***********************************/
// Learn you Node 4

// var fs = require('fs');
// var filePath = process.argv[2];

// fs.readFile(filePath, 'utf8', function(err, data) {

// 	if (err) throw err;

// 	console.log(data.split('\n').length - 1);

// })

/***********************************/
// Learn you Node 5
// requiring the filesystem module
/*
var fs = require('fs');
// requiring path module
var path = require('path');
// /path/to/dir
var dir = process.argv[2];
// file extension
var fileExt = "." + process.argv[3];

fs.readdir(dir, function(err, lists) {
    // error-first callback
    if (err) throw err;

	// long way

    for (var i = 0; i < lists.length; i++) {
        if (path.extname(lists[i]) === fileExt) {
        	console.log(lists[i]);
        }
    }

    // .forEach()
    lists.forEach(function(list) {
    	if (path.extname(list) === fileExt) {
    		console.log(list)
    	}
    });
});
*/

/***********************************/
// Learn you Node 6