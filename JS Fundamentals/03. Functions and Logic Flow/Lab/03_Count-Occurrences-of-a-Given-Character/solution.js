function solve() {

	let string = document.getElementById('string').value;
	let char = document.getElementById('character').value;

	let count = 0;

	let result;

	findCharacterCount(string, char);
	evenOrOddCount(count, char);

	document.getElementById('result').textContent = result;

	function findCharacterCount(string, char) {

		for (let i = 0; i < string.length; i++) {

			if (string[i] === char) {

				count++;
			}
		}
	}

	function evenOrOddCount(count, char) {

		if (count % 2 === 0) {

			result = `Count of ${char} is even.`;

		} else {

			result = `Count of ${char} is odd.`;
		}
	}
}