// const assert = require('chai').assert;
// const PaymentPackage = require('./solution');

describe('paymentPackage', function () {

	let paymentPackage;

	beforeEach(function () {

		paymentPackage = new PaymentPackage('test', 10);
	});

	describe('properties', function () {

		it('should have name property', function () {

			assert.isTrue(PaymentPackage.prototype.hasOwnProperty('name'));
		});

		it('should have value property', function () {

			assert.isTrue(PaymentPackage.prototype.hasOwnProperty('value'));
		});

		it('should have VAT property', function () {

			assert.isTrue(PaymentPackage.prototype.hasOwnProperty('VAT'));
		});

		it('should have active property', function () {

			assert.isTrue(PaymentPackage.prototype.hasOwnProperty('active'));
		});

		it('should have toString method', function () {

			assert.isTrue(PaymentPackage.prototype.hasOwnProperty('toString'));
		});
	});

	describe('constructor', function () {

		it('should be initialized with 2 params', function () {

			assert.equal(paymentPackage.name, 'test');
			assert.equal(paymentPackage.value, 10);
			assert.equal(paymentPackage.VAT, 20);
			assert.isTrue(paymentPackage.active);
		});

		it('should throw error when initialized with no params', function () {

			assert.throws(() => new PaymentPackage(), Error);
		});

		it('should throw error when initialized with 1 param', function () {

			assert.throws(() => new PaymentPackage('test'), Error);
		});
	});

	describe('name', function () {

		it('should return correct value when name is get', function () {

			assert.equal(paymentPackage.name, 'test');
		});

		it('should return correct value when name is get after set', function () {

			paymentPackage.name = 'new test';

			assert.equal(paymentPackage.name, 'new test');
		});

		it('should throw error when name is set with number', function () {

			assert.throws(() => paymentPackage.name = 1, Error);
		});

		it('should throw error when name is set with empty string', function () {

			assert.throws(() => paymentPackage.name = '', Error);
		});
	});

	describe('value', function () {

		it('should return correct value when value is get', function () {

			assert.equal(paymentPackage.value, 10);
		});

		it('should return correct value when value is get after set', function () {

			paymentPackage.value = 100;

			assert.equal(paymentPackage.value, 100);
		});

		it('should work with 0 as param', function () {

			paymentPackage.value = 0;

			assert.equal(paymentPackage.value, 0);
		});

		it('should throw error when value is set with string', function () {

			assert.throws(() => paymentPackage.value = 'test', Error);
		});

		it('should throw error when value is set with negative number', function () {

			assert.throws(() => paymentPackage.value = -1, Error);
		});
	});

	describe('VAT', function () {

		it('should return correct value when VAT is get', function () {

			assert.equal(paymentPackage.VAT, 20);
		});

		it('should return correct value when VAT is get after set', function () {

			paymentPackage.VAT = 5;

			assert.equal(paymentPackage.VAT, 5);
		});

		it('should throw error when VAT is set with string', function () {

			assert.throws(() => paymentPackage.VAT = 'test', Error);
		});

		it('should throw error when VAT is set with negative number', function () {

			assert.throws(() => paymentPackage.VAT = -1, Error);
		});
	});

	describe('active', function () {

		it('should return correct value when active is get', function () {

			assert.isTrue(paymentPackage.active);
		});

		it('should return correct value when active is get after set', function () {

			paymentPackage.active = false;

			assert.isFalse(paymentPackage.active);
		});

		it('should throw error when active is set with string', function () {

			assert.throws(() => paymentPackage.active = 'test', Error);
		});
	});

	describe('toString', function () {

		it('should return correct string when package is inactive', function () {

			paymentPackage.active = false;

			let expected = 'Package: test (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12';

			assert.equal(paymentPackage.toString(), expected);
		});

		it('should return correct string when package is active', function () {

			let expected = 'Package: test\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12';

			assert.equal(paymentPackage.toString(), expected);
		});
	});
});