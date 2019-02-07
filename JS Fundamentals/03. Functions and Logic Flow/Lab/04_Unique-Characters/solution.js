function solve() {

	let string = document.getElementById('string').value;

	let uniqueChars = '';

	findUniqueChars(string);

	document.getElementById('result').textContent = uniqueChars;

	function findUniqueChars(string) {

		for (let index = 0; index < string.length; index++) {

			isCharWhiteSpace(index);
			isCurrentCharUnique(index);
		}
	}

	function isCharWhiteSpace(index) {

		if (string[index] === ' ') {

			uniqueChars += string[index];
		}
	}

	function isCurrentCharUnique(index) {

		if (uniqueChars.indexOf(string[index]) === -1) {

			uniqueChars += string[index];
		}
	}
}