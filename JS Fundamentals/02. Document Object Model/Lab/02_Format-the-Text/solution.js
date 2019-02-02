function solve() {

	let sentences =
		document.getElementById('input').textContent.split('.').filter(s => s !== '');

	let outputDiv = document.getElementById('output');

	for (let i = 0; i < sentences.length; i += 3) {

		let paragraphText = sentences[i] + '.';

		let secondSentence = sentences[i + 1];
		let thirdSentence = sentences[i + 2];

		if (secondSentence !== undefined) {

			paragraphText += secondSentence + '.';

			if (thirdSentence !== undefined) {

				paragraphText += thirdSentence + '.';
			}
		}

		let paragraph = document.createElement('p');
		paragraph.textContent = paragraphText;

		outputDiv.appendChild(paragraph);
	}
}