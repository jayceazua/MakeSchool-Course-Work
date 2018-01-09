var fs = require('fs');
var path = require('path');


// Idiomatic Error Handling
function myModule (dir, fileExt, callback) {
	var ext = "." + fileExt;

	fs.readdir(dir, function(err, list) {
		if (err)
			return callback(err);
		// list is being return back as an array
		list = list.filter(function(file) {
			return path.extname(file) === ext;
		});

		callback(null, list)
	});
}


module.exports = myModule;