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
      expect(match('aa', '..')).to.equal(true);
    });

    it("matches any character (..)", function () {
      expect(match('aa', '..')).to.equal(true);
    });

    it("matches any character (between literals)", function () {
      expect(match('abc', 'a.c')).to.equal(true);
      expect(match('abbc', 'a..c')).to.equal(true);
    });

    it("doesn't match empty string", function () {
      expect(match('', '.')).to.equal(false);
    });

    it("doesn't match empty string (..)", function () {
      expect(match('a', '..')).to.equal(false);
    });

    it("matches only one char", function () {
      expect(match('aa', '.')).to.equal(false);
    });
  });
});


// a,,true
// a,a,true
// a,b,false

// a,.,true
// aba,a.a,true

// a,a*,true
// aa,a*,true
