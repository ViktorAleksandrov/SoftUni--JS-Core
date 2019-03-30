const assert = require('chai').assert;
const FilmStudio = require('./filmStudio');

describe('FilmStudio', function () {

	let filmStudio;

	beforeEach(function () {

		filmStudio = new FilmStudio('SU-Studio');
	});

	describe('constructor', function () {

		it('should have property "name" when instantiated', function () {

			assert.property(filmStudio, 'name');
		});

		it('should have set property "name" correctly', function () {

			assert.equal(filmStudio.name, 'SU-Studio');
		});

		it('should have property "films" when instantiated', function () {

			assert.property(filmStudio, 'films');
		});
	});

	describe('makeMovie', function () {

		it('should make movie with name', function () {

			let film = filmStudio.makeMovie('The Avengers', ['Thor', 'Hulk']);

			assert.equal(film.filmName, 'The Avengers');
		});

		it('should throw when args are not 2', function () {

			assert.throws(() => filmStudio.makeMovie('Avengers'), 'Invalid arguments count');
		});

		it('should throw when first arg is not string', function () {

			assert.throws(() => filmStudio.makeMovie(1, ['Hulk']), 'Invalid arguments');
		});
	});

	describe('casting', function () {

		it('should return correct message when the role exists', function () {

			filmStudio.makeMovie('The Avengers', ['Thor', 'Hulk']);

			let actual = filmStudio.casting('Pesho', 'Hulk');

			let expected = 'You got the job! Mr. Pesho you are next Hulk in the The Avengers. Congratz!';

			assert.equal(actual, expected);
		});

		it('should return correct message when there is no such role', function () {

			filmStudio.makeMovie('The Avengers', ['Thor', 'Hulk']);

			let actual = filmStudio.casting('Pesho', 'test');
			let expected = 'Pesho, we cannot find a test role...';

			assert.equal(actual, expected);
		});

		it('should return correct message when there are no films', function () {

			let actual = filmStudio.casting('Pesho', 'test');
			let expected = 'There are no films yet in SU-Studio.';

			assert.equal(actual, expected);
		});
	});

	describe('lookForProducer', function () {

		it('should print movie\'s info when there the movie exists', function () {

			filmStudio.makeMovie('The Avengers', ['Hulk']);
			filmStudio.casting('Pesho', 'Hulk');

			let actual = filmStudio.lookForProducer('The Avengers');
			let expected = 'Film name: The Avengers\nCast:\nPesho as Hulk\n';

			assert.equal(actual, expected);
		});

		it('should throw Error when there is no such movie', function () {

			filmStudio.makeMovie('The Avengers', ['Hulk']);
			filmStudio.casting('Pesho', 'Hulk');

			let expectedMessage = 'test do not exist yet, but we need the money...';

			assert.throws(() => filmStudio.lookForProducer('test'), Error, expectedMessage);
		});
	});
});