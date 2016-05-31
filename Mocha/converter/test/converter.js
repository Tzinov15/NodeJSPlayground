var expect = require("chai").expect;
var converter = require("../app/converter");


describe("Color Code Converter", function() {
  describe("RGB to Hex conversion", function() {
    it("converts the basic colors", function() {
      var redHex = converter.rgbToHex(255,0,0);
      var greenHex = converter.rgbToHex(0,255,0);
      var blueHex = converter.rgbToHex(0,0,255);

      expect(redHex).to.equal("ff0000");
      expect(greenHex).to.equal("00ff00");
      expect(blueHex).to.equal("0000ff");
    });
  });
  describe("Hex to RGB conversion", function() {
    it("converts the basic colors", function() {
      var red   = converter.hexToRGB("ff0000");
      var green = converter.hexToRGB("00ff00");
      var blue  = converter.hexToRGB("0000ff");


      /* the to.deep.equal allows us to match each element of the left feature to each element of the right feature. In this case we are comparing each element of red and making sure it equals each element of the array that was passed into to equal() */
      expect(red).to.deep.equal([255, 0, 0]);
      expect(green).to.deep.equal([0, 255, 0]);
      expect(blue).to.deep.equal([0, 0, 255]);


    });

  });
});
