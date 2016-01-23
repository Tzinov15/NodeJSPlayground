var fs = require("fs");

// pass into the readFile function a callback function that 
// will be called on completion of reading the file. This callback function
// takes in two parameters, the err, and the data upon successful reading
// the readFile function itself will populate the err and data variables automatically
// Majority of asynchronous functions will have the first argument of the callback as the err, and the second variable as the actual return value of the function
fs.readFile('input.txt', function(err,data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log("Program Ended");
