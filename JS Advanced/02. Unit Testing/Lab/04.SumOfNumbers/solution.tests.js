// const assert = require('chai').assert;
// const sum = require('./solution');

describe('sum', function () {

	it('argument should be an array of numbers', function () {

		let arr = [1, 2, 3];

		assert.isArray(arr);
		arr.forEach(el => assert.isNumber(+el));
	});

	it('should return sum of all elements', function () {

		let arr = [1, 2, 3];

		assert.equal(sum([1, 2, 3]), 6);
	});

	it('should return 0 for empty array', function () {

		assert.equal(sum([]), 0);
	});

	it('should return NaN for an array with non-number element', function () {

		let arr = [1, 2, 'test'];

		assert.isNaN(sum(arr), NaN);
	});

	it('should return same number for an array with one number element', function () {

		assert.equal(sum([1]), 1);
	});
});