// const assert = require('chai').assert;
// const StringBuilder = require('./solution');

describe('stringBuilder', function () {

	let sb;

	beforeEach(function () {

		sb = new StringBuilder();
	});

	describe('methods', function () {

		it('should have append method', function () {

			assert.isTrue(StringBuilder.prototype.hasOwnProperty('append'));
		});

		it('should have prepend method', function () {

			assert.isTrue(StringBuilder.prototype.hasOwnProperty('prepend'));
		});

		it('should have insertAt method', function () {

			assert.isTrue(StringBuilder.prototype.hasOwnProperty('insertAt'));
		});

		it('should have remove method', function () {

			assert.isTrue(StringBuilder.prototype.hasOwnProperty('remove'));
		});

		it('should have toString method', function () {

			assert.isTrue(StringBuilder.prototype.hasOwnProperty('toString'));
		});
	});

	describe('constructor', function () {

		it('should be instantiated without parameter', function () {

			assert.equal(sb.toString(), '');
		});

		it('should be instantiated with string parameter', function () {

			sb = new StringBuilder('test');

			assert.equal(sb.toString(), 'test');
		});

		it('should throw TypeError when number parameter is passed', function () {

			assert.throws(() => sb.append(1), TypeError);
		});
	});

	describe('append', function () {

		it('should append passed string to the end of storage', function () {

			sb.append('test');

			assert.equal(sb.toString(), 'test');
		});

		it('should throw TypeError with number parameter', function () {

			assert.throws(() => sb.append(1), TypeError);
		});
	});

	describe('prepend', function () {

		it('should prepend passed string to the beginning of storage', function () {

			sb.append(' number one')
			sb.prepend('test');

			assert.equal(sb.toString(), 'test number one');
		});

		it('should throw TypeError with number parameter', function () {

			assert.throws(() => sb.prepend(1), TypeError);
		});
	});

	describe('insertAt', function () {

		it('should insert "new test" correctly', function () {

			sb = new StringBuilder('test');
			sb.insertAt('new ', 0);

			let expected = ['n', 'e', 'w', ' ', 't', 'e', 's', 't'];

			for (let index = 0; index < sb._stringArray.length; index++) {

				assert.equal(sb._stringArray[index], expected[index]);
			}
		});

		it('should throw TypeError with number as first parameter', function () {

			assert.throws(() => sb.insertAt(0, 1), TypeError);
		});
	});

	describe('remove', function () {

		it('should remove elements at specified index', function () {

			sb.append('my new test');
			sb.remove(3, 4)

			assert.equal(sb.toString(), 'my test');
		});
	});
});