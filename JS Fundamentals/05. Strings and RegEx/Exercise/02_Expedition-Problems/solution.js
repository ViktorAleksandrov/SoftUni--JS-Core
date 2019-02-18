function solve() {

	let keyword = document.getElementById('str').value;
	let text = document.getElementById('text').value;

	let matches, latitude, longitude;

	let regex = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gi;

	while (matches = regex.exec(text)) {

		if (matches[1].toLowerCase() === 'north') {

			latitude = `${matches[2]}.${matches[3]} N`;

		} else {

			longitude = `${matches[2]}.${matches[3]} E`;
		}
	}

	let message = text.match(`${keyword}(.*?)${keyword}`)[1];

	createParagraph(latitude);
	createParagraph(longitude);
	createParagraph(`Message: ${message}`);

	function createParagraph(text) {

		let paragraph = document.createElement('p');

		paragraph.textContent = text;

		document.getElementById('result').appendChild(paragraph);
	}
}