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
});
