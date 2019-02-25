function solve() {

	document.querySelector('button').addEventListener('click', () => {

		let inputString = document.getElementById('input').value;

		let startNumber = inputString.match(/\d+/)[0];

		inputString = inputString.substr(startNumber.length, startNumber);

		let splitChar = inputString.slice(-1);

		let stringParts = inputString.split(splitChar);

		let regex = new RegExp(`[${stringParts[0]}]`, 'g');

		let resultString = stringParts[1].replace(regex, '').replace(/#/g, ' ');

		document.getElementById('output').value = resultString;
	});
}