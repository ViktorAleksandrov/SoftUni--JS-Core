function solve() {

	let arr = JSON.parse(document.getElementById('arr').value);

	let specialKey = arr.shift();

	let regex = new RegExp(`(^| )${specialKey}\\s+([!%$#A-Z]{8,})([ .,]|$)`, 'gi');

	for (let sentence of arr) {

		let match;

		while (match = regex.exec(sentence)) {

			let encodedMessage = match[2];

			if (encodedMessage.toUpperCase() === encodedMessage) {

				let decodedMessage = encodedMessage
					.replace(/!/g, 1)
					.replace(/%/g, 2)
					.replace(/#/g, 3)
					.replace(/\$/g, 4)
					.toLowerCase();

				sentence = sentence.replace(encodedMessage, decodedMessage);
			}
		}

		let paragraph = document.createElement('p');

		paragraph.textContent = sentence;

		document.getElementById('result').appendChild(paragraph);
	}
}