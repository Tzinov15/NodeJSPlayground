/*
 _____                 _     _                          
| ____|_   _____ _ __ | |_  | |    ___   ___  _ __  ___ 
|  _| \ \ / / _ \ '_ \| __| | |   / _ \ / _ \| '_ \/ __|
| |___ \ V /  __/ | | | |_  | |__| (_) | (_) | |_) \__ \
|_____| \_/ \___|_| |_|\__| |_____\___/ \___/| .__/|___/
                                             |_|        
		
/*
 * When node server starts, it declares functions, instantiates variables, and starts listening for events
 * There is a main loop that listens for events, and then triggers a callback when that event is detected
 * Callback functions are called when an asynchronous function returns its results
 * Functions which listen to events acts as an Observer. Callback functions are Observers
 *
 * EventEmitter:
 * can use .on to bind a function with the event
 * can use .emit to fire an event
 *
 * when calling http.createServer, an instance of http.Server is returned, which inerhits from net.Server, which is an EventEmitter meaning it has all methods that an EventEmitter has (emits event on each connection for example)
 */


// import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler 
var connectHandler = function connected() {
  console.log('connection succesful');

  // fire the data received event
  eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
// this means, whenever the eventEmitter fires a 'connection' event by calling emit, we will call the connectHandler function (which is defined above)
eventEmitter.on('connection', connectHandler);


// Bind the data_received event with the anonymous function
// this is very similar to the event binding that is happening above. However:
// instead of passing in an event handling function as a parameter to the .on call, we define the callback / event handling function on the spot as an anonymous function
eventEmitter.on('data_received', function() {
  console.log('data received successfully.');
});

// Fire the connection event
eventEmitter.emit('connection');


console.log("Program Ended.");
