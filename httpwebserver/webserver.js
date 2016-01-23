/*
\ \      / /__| |__      / \   _ __  _ __ | (_) ___ __ _| |_(_) ___  _ __  
 \ \ /\ / / _ \ '_ \    / _ \ | '_ \| '_ \| | |/ __/ _` | __| |/ _ \| '_ \ 
  \ V  V /  __/ |_) |  / ___ \| |_) | |_) | | | (_| (_| | |_| | (_) | | | |
   \_/\_/ \___|_.__/  /_/   \_\ .__/| .__/|_|_|\___\__,_|\__|_|\___/|_| |_|
*/

/* 
 * Client:
 *  web browsers or applications which can make HTTP request to the web server
 * Server:
 *  can intercept the request made by clients and pass them the response
 * Business Layer:
 *  interacts with data layer via data base or external programs
 * Data Layer:
 *  consists of databases and other sources of data
 *
 */


var http = require('http');
var fs = require('fs');
var url = require('url');

// Create a server
http.createServer( function(request,response) {
  // Parse the request containing the file name
  var pathname = url.parse(request.url).pathname;

  // print the name of the file
  console.log("Request for " + pathname + " received.");

  // read the file from the file system
  fs.readFile(pathname.substr(1), function(err,data) {
    if (err) {
      console.log(err);
      // HTTP STATUS: 404 : NOT FOUND
      // Content Type: text/plain
      response.writeHead(404, {'Content-Type': 'text/html'});
    }
    else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data.toString());
    }
    // send the final completed response body
    response.end();
  });
}).listen(9000);

console.log('Server running at http://127.0.0.1:9000/');
