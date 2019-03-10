// let assert = require('chai').assert;
// let lookupChar = require('./solution');

describe('lookupChar', function () {

	it('should return undefined when first arg is number', function () {

		assert.isUndefined(lookupChar(1, 2));
	});

	it('should return undefined when second arg is string', function () {

		assert.isUndefined(lookupChar('test', 'pesho'));
	});

	it('should return undefined when second arg is floating-point number', function () {

		assert.isUndefined(lookupChar('test', 1.5));
	});

	it('should return "Incorrect index" when given index is equal to given string length', function () {

		assert.equal(lookupChar('test', 4), 'Incorrect index');
	});

	it('should return "Incorrect index" when given index is bigger than given string length', function () {

		assert.equal(lookupChar('test', 5), 'Incorrect index');
	});

	it('should return "Incorrect index" when given index is less than zero', function () {

		assert.equal(lookupChar('test', -1), 'Incorrect index');
	});

	it('should return "p" when correct types and values are given', function () {

		assert.equal(lookupChar('pesho', 0), 'p');
	});

	it('should return "o" when correct types and values are given', function () {

		assert.equal(lookupChar('pesho', 4), 'o');
	});
});