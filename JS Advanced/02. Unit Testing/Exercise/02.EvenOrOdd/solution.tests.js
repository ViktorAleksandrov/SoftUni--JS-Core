// let assert = require('chai').assert;
// let isOddOrEven = require('./solution');

describe('isOddOrEven', function () {

	it('should return undefined with number argument', function () {

		assert.isUndefined(isOddOrEven(1));
	});

	it('should return even number with string argument with even length', function () {

		assert.equal(isOddOrEven('victor'), 'even');
	});

	it('should return odd number with string argument with odd length', function () {

		assert.equal(isOddOrEven('pesho'), 'odd');
	});
});