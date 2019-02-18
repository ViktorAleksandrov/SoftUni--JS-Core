function solve() {

	let userData = JSON.parse(document.getElementById('arr').value);

	let regex = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359(-| )\d\3\d{3}\3\d{3}) ([a-z\d]+@[a-z]+\.[a-z]{2,3})$/;

	for (let string of userData) {

		let matches = regex.exec(string);

		if (matches) {

			createParagraph(`Name: ${matches[1]}`);
			createParagraph(`Phone Number: ${matches[2]}`);
			createParagraph(`Email: ${matches[4]}`);

		} else {

			createParagraph('Invalid data');
		}

		createParagraph('- - -');
	}

	function createParagraph(info) {

		let paragraph = document.createElement('p');

		paragraph.textContent = info;

		document.getElementById('result').appendChild(paragraph);
	}
}