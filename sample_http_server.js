var http = require('http');


// request is an instance of the IncomingMessage Object
// This object gets created by http.Server and gets passed as the first argument to the request event
function handleRequest(request,response) {
  console.log("Request Method: ", request.method);
  console.log("Request url: ", request.url);
  console.log("Request TCP Port: ", request.connection.address().port);
  console.log("Request IP Address: ", request.connection.address().address);
  console.log("\n");
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}


// create an instance of http.Server, pass in a function that will be invoked for every request
// in this case handleRequest serves as a requestListener function which is automaticaly added to the 'request' event meaning: it'll get invoked whenver there is a request event triggered
var server = http.createServer(handleRequest);
server.listen(8000);

// the code below does exactly the same as above but a little differently.
// The http server gets again created with createServer, but instead of passing in the 
// requestListener function on contstruction, we attach the listening function by calling
// the server.on method, passing in the event (request) and the respective function to be called (handleRequest)
var second_server = http.createServer();
second_server.on('request', handleRequest);
second_server.listen(8080);

console.log('server running at http://127.0.0.1:/' + server.address().port + '/');
console.log('server running at http://127.0.0.1:/' + second_server.address().port + '/');


