const assert = require('chai').assert;
const Calculator = require('./Calculator');

describe('Calculator', function () {

	let calculator;

	beforeEach(function () {

		calculator = new Calculator();
	});

	describe('constructor', function () {

		it('should have array property "expenses" when initialized', function () {

			assert.equal(calculator.expenses.length, 0);
		});
	});

	describe('add', function () {

		it('should add items of any type', function () {

			calculator.add(5);
			calculator.add('test');

			assert.equal(calculator.expenses.length, 2);
		});
	});

	describe('divideNums', function () {

		it('should return only the division of the numbers', function () {

			calculator.add(15);
			calculator.add('test');
			calculator.add(5);

			assert.equal(calculator.divideNums(), 3);
		});

		it('should return "Cannot divide by zero" when try to divide to 0', function () {

			calculator.add(5);
			calculator.add(0);

			assert.equal(calculator.divideNums(), 'Cannot divide by zero');
		});

		it('should throw an error when there are no numbers in the array', function () {

			calculator.add('test');

			assert.throws(() => calculator.divideNums(), Error, 'There are no numbers in the array!');
		});
	});

	describe('toString', function () {

		it('should return "empty array" when the array is empty', function () {

			assert.equal(calculator.toString(), 'empty array');
		});
	});

	describe('orderBy', function () {

		it('should return joined sorted array', function () {

			calculator.add('test');
			calculator.add(5);

			assert.equal(calculator.orderBy(), '5, test');
		});
	});
});