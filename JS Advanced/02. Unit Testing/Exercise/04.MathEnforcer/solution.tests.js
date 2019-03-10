// let assert = require('chai').assert;
// let mathEnforcer = require('./solution');

describe('mathEnforcer', function () {

	describe('addFive', function () {

		it('should return undefined when non-number is passed', function () {

			assert.isUndefined(mathEnforcer.addFive('test'));
		});

		it('should return correct value when integer is passed', function () {

			assert.equal(mathEnforcer.addFive(1), 6);
		});

		it('should return correct value when floating-point number is passed', function () {

			assert.closeTo(mathEnforcer.addFive(0.3), 5.3, 0.01);
		});

		it('should return correct value when negative number is passed', function () {

			assert.equal(mathEnforcer.addFive(-1), 4);
		});
	});

	describe('subtractTen', function () {

		it('should return undefined when non-number is passed', function () {

			assert.isUndefined(mathEnforcer.subtractTen('test'));
		});

		it('should return correct value when integer is passed', function () {

			assert.equal(mathEnforcer.subtractTen(1), -9);
		});

		it('should return correct value when floating-point number is passed', function () {

			assert.closeTo(mathEnforcer.subtractTen(0.3), -9.7, 0.01);
		});

		it('should return correct value when negative number is passed', function () {

			assert.equal(mathEnforcer.subtractTen(-1), -11);
		});
	});

	describe('sum', function () {

		it('should return undefined when first arg is not a number', function () {

			assert.isUndefined(mathEnforcer.sum('test', 1));
		});

		it('should return undefined when second arg is not a number', function () {

			assert.isUndefined(mathEnforcer.sum(1, 'test'));
		});

		it('should return correct value with positive integers', function () {

			assert.equal(mathEnforcer.sum(1, 2), 3);
		});

		it('should return correct value with negative integers', function () {

			assert.equal(mathEnforcer.sum(-1, -1), -2);
		});

		it('should return correct value with integer and floating-point numbers', function () {

			assert.closeTo(mathEnforcer.sum(1, 0.3), 1.3, 0.01);
		});

		it('should return correct value with floating-point and integer numbers', function () {

			assert.closeTo(mathEnforcer.sum(0.3, 1), 1.3, 0.01);
		});
	});
});