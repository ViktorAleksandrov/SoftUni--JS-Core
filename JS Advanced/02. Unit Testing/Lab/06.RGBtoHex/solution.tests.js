// let assert = require('chai').assert;
// let rgbToHexColor = require('./solution');

describe('rgbToHexColor', function () {

	it('should return undefined if args are not integers', function () {

		assert.isUndefined(rgbToHexColor('test', 0.5, '#9999999'));
	});

	it('should return undefined if one of the args is not integer', function () {

		assert.isUndefined(rgbToHexColor(0, 0, '#ffffff'));
	});

	it('should return hex if args are valid', function () {

		assert.equal(rgbToHexColor(66, 134, 244), '#4286F4');
	});

	it('should return undefined if args are negative integers', function () {

		assert.isUndefined(rgbToHexColor(-1, -1, -1));
	});

	it('should return undefined if args are integers bigger than 255', function () {

		assert.isUndefined(rgbToHexColor(256, 256, 256));
	});

	it('should return hex if args are at lowest limit', function () {

		assert.equal(rgbToHexColor(0, 0, 0), '#000000');
	});

	it('should return hex if args are at highest limit', function () {

		assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
	});
});