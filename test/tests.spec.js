const { expect } = require('chai');
const { match } = require('../index.js');

describe("match", function () {
  describe("for simple (literal only) patterns", function () {
    it("returns true if input equals pattern", function () {
      expect(match('a', 'a')).to.equal(true);
    });

    it("returns false if input doesn't equal pattern", function () {
      expect(match('a', 'b')).to.equal(false);
    });
  });

  describe(". character", function () {
    it("matches any character", function () {
      expect(match('a', '.')).to.equal(true);
    });

    // it("matches any character", function () {
    //   expect(match('aa', '..')).to.equal(true);
    // });

    it("doesn't match empty string", function () {
      expect(match('', '.')).to.equal(false);
    });
  });
});


// a,a,true
// a,b,false

// a,.,true
// aba,a.a,true

// a,a*,true
// aa,a*,true
