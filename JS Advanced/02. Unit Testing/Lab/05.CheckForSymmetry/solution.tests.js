// let assert = require('chai').assert;
// let isSymmetric = require('./solution');

describe('isSymmetric', function () {

	it('should return falsee if not given an array', function () {

		assert.isFalse(isSymmetric('test'));
	});

	it('should return true if a symmetric array of numbers is given', function () {

		let arr = [1, 2, 3, 2, 1]

		assert.isTrue(isSymmetric(arr));
	});

	it('should return false if a non-symmetric array of numbers is given', function () {

		let arr = [1, 2, 3, 2, 2]

		assert.isFalse(isSymmetric(arr));
	});

	it('should return true if the given array has one element', function () {

		assert.isTrue(isSymmetric([1]));
	});

	it('should return true if a symmetric array with different data types is given', function () {

		let arr = ['test', 1, { a: 1 }, new Date(), { a: 1 }, 1, 'test'];

		assert.isTrue(isSymmetric(arr));
	});
});