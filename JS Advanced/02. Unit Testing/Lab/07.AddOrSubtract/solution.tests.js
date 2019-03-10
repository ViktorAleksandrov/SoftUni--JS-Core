// let assert = require('chai').assert;
// let createCalculator = require('./solution');

describe('createCalculator', function () {

	let calculator;

	beforeEach(() => calculator = createCalculator());

	it('returned initial sum should be 0', function () {

		assert.equal(calculator.get(), 0);
	});

	it('function add of returned object should add value to the internal sum', function () {

		calculator.add(1);

		assert.equal(calculator.get(), 1);
	});

	it('function subtract of returned object should subtract value from the internal sum', function () {

		calculator.subtract(1);

		assert.equal(calculator.get(), -1);
	});

	it('function add and subtract of returned object should produce correct value when used together', function () {

		calculator.add(3);
		calculator.subtract(1);

		assert.equal(calculator.get(), 2);
	});

	it('function add and subtract of returned object should produce correct value when used multiple times', function () {

		calculator.add(5);
		calculator.subtract(2);
		calculator.add(-2);
		calculator.subtract(-1);

		assert.equal(calculator.get(), 2);
	});

	it('function add and subtract of returned object should produce correct value used with parsable number', function () {

		calculator.add(5);
		calculator.subtract('2');
		calculator.add('-2');
		calculator.subtract(-1);

		assert.equal(calculator.get(), 2);
	});

	it('should return NaN if non-number string is given to function add', function () {

		calculator.add('test');

		assert.isNaN(calculator.get());
	});

	it('should return NaN if non-number string is given to function subtract', function () {

		calculator.subtract('test');

		assert.isNaN(calculator.get());
	});
});