// Learn You Node 1
// console.log("HELLO WORLD");
/***********************************/
// Learn You Node 2
// console.log(process.argv);

// var total = 0;

// for (var i = 2; i < process.argv.length; i++) {
//  total += Number(process.argv[i])
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

//  if (err) throw err;

//  console.log(data.split('\n').length - 1);

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

// module callback function
/*
    The variable mymodule is a function in itself
*/
/*
var myModule = require('./myModule-LYN6');
var dir = process.argv[2];
var ext = process.argv[3];

function callback(err, list) {
    if (err)
        throw err;

    list.forEach(function(file) {
        console.log(file);
    });
}

// this method is in another file
myModule(dir, ext, callback);
*/
/***********************************/
/* Learn you Node 7 
// requiring the http module
var http = require('http');
// given url link
var url = process.argv[2];


http.get(url, function(res) {
    // set the encoding into utf8 so the response data comes back into a String
    res.setEncoding('utf8');
    res.on('data', function(data) {
        console.log(data);
    });

});
*/
/***********************************/
/* Learn you Node 8 

var http = require("http");
var bl = require("bl");
var url = process.argv[2];

http.get(url, function(res) {
    // res.setEncoding("utf8");
    res.pipe(bl(function (err, data) {
        if (err) throw err;
// convert from a Buffer
        data = data.toString();
        console.log(data.length);
        console.log(data)
    }))

});
*/
/***********************************/
/* Learn you Node 9

var http = require("http");
var bl = require("bl");

for (var i = 0; i < process.argv.length; i++) {
    getResults(process.argv[i]);
}


// print results individually
function getResults(url) {

    http.get(url, function(res) {
        res.pipe(bl(function(err, data) {
            if (err) throw err;
            data = data.toString();
            console.log(data);
        }));
    });
}
*/

/***********************************/
/* Learn you Node 10 
// creating a TCP Server

// YYYY-MM-DD \n

var port = Number(process.argv[2]);
var net = require('net');

function zeroFill (i) {
    return (i < 10 ? "0" : "") + i;
}

function now() {
    var d = new Date();

    return d.getFullYear() + "-" +
       zeroFill(d.getMonth() + 1) + "-" +
       zeroFill(d.getDate()) + " " +
       zeroFill(d.getHours()) + ":" +
       zeroFill(d.getMinutes())
}


var server = net.createServer(function(socket) {
    socket.end(now() + "\n");
});

server.listen(port);
*/

/***********************************/
/* Learn you Node 11 

var http = require("http");
var fs = require("fs");
var port = process.argv[2];
// var file = process.argv[3];


// create an http server; that can talk http
var server = http.createServer(function(req, res) {
    // req is used to fetch properties such as the header, and query-string
    // res is for sending data to the client, both headers and body
    // both are Node Streams
    res.writeHead(200, {'content-type': 'text/plain' });
// stream the file contents to the response
    fs.createReadStream(process.argv[3]).pipe(res)
});

server.listen(port)
*/

/***********************************/
/* Learn you Node 12 

var http = require("http");
var port = Number(process.argv[2]);
 // external npm packages
var map = require("through2-map");

 var server = http.createServer(function(req, res) {
    if(req.method != "POST")
        return res.send("Send me a POST\n");

    req.pipe(map(function(data) {
        return data.toString().toUpperCase();

    })).pipe(res)
 })

server.listen(port)
*/

/***********************************/
/* Learn you Node 13 */

var http = require('http');
var url = require('url');

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function(req, res) {
  var parsedUrl = url.parse(req.url, true);
  var time = new Date(parsedUrl.query.iso);
  var result

  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time);
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time);

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(Number(process.argv[2]));