function solve() {

	let array = JSON.parse(document.getElementById('arr').value);
	let replacementWord = document.getElementById('str').value;

	let wordToReplace = array[0].split(' ').filter(x => x)[2];

	let regex = new RegExp(wordToReplace, 'gi');

	for (let string of array) {

		let newString = string.replace(regex, replacementWord);

		let paragraph = document.createElement('p');

		paragraph.textContent = newString;

		document.getElementById('result').appendChild(paragraph);
	}
}