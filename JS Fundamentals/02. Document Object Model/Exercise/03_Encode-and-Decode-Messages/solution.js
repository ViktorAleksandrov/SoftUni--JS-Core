function solve() {

	let originalText = '';

	Array.from(document.getElementsByTagName('button')).forEach(button =>

		button.addEventListener('click', () => {

			let textAreas = document.getElementsByTagName('textarea');

			let rightTextArea = textAreas[1];

			if (button.textContent === 'Encode and send it') {

				let leftTextArea = textAreas[0];

				originalText = leftTextArea.value;

				leftTextArea.value = '';

				let encodedText = '';

				for (let char of originalText) {

					let charCode = char.charCodeAt(0) + 1;
					let currentChar = String.fromCharCode(charCode);

					encodedText += currentChar;
				}

				rightTextArea.value = encodedText;

			} else {

				rightTextArea.value = originalText;
			}
		})
	);
}