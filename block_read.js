var fs = require("fs");

// first read the entire file
var data = fs.readFileSync('input.txt');
console.log(data.toString());

// and only when file reading is done do we print this last statement
console.log("Program Ended");
