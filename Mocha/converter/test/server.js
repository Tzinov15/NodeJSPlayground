/* Mocha Notes:
 * =================================================================
 * an it() statement can be considered a test case
 * describe() is used to group test cases, also known as test suites
 * before(), beforeEach(), after(), afterEach() are hooks to be ran before/after first/each it()
 *
 *
 */


var expect = require("chai").expect;
var request = require("request");


describe("Color Code Converter API", function() {
  describe("RGB to Hex conversion", function() {

    var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

    /* We can only put expectations inside the body of the it function */
    it ("returns status 200", function(done) {
      /* To the request function we pass in two arguments:
       * 1.) the url to visit
       * 2.) a function to be invoked when the request is done (a callback function)*/
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it ("returns the color in hex", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("ffffff");
        done();
      });
    });
  });

  describe("Hex to RGB conversion", function() {
    var url = "http://localhost:3000/HexToRGB?hex=00ff00";
    it ("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it ("returns the color in RGB", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("[0,255,0]");
        done();
      });
    });
  });
});
