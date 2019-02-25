function solve() {

	let buttons = document.getElementsByTagName('button');
	let outputElement = document.querySelector('#output p');

	buttons[0].addEventListener('click', () => {

		let chars = document.getElementById('input').value.split('');
		let elementsType = document.getElementById('filterSecondaryCmd').value;
		let index = document.getElementById('filterPosition').value - 1;

		switch (elementsType) {

			case 'uppercase':
				outputElement.textContent += chars.filter(char => char.match(/[A-Z]/g))[index];
				break;
			case 'lowercase':
				outputElement.textContent += chars.filter(char => char.match(/[a-z]/g))[index];
				break;
			case 'nums':
				outputElement.textContent += chars.filter(Number)[index];
		}
	});

	buttons[1].addEventListener('click', () => {

		let chars = document.getElementById('input').value.split('').sort();
		let sortingType = document.getElementById('sortSecondaryCmd').value;
		let index = document.getElementById('sortPosition').value - 1;

		if (sortingType === 'Z') {

			chars.reverse();
		}

		outputElement.textContent += chars[index];
	});

	buttons[2].addEventListener('click', () => {

		let chars = document.getElementById('input').value.split('');
		let rotationCount = document.getElementById('rotateSecondaryCmd').value;
		let index = document.getElementById('rotatePosition').value - 1;

		for (let counter = 0; counter < rotationCount % chars.length; counter++) {

			chars.unshift(chars.pop());
		}

		outputElement.textContent += chars[index];
	});

	buttons[3].addEventListener('click', () => {

		let chars = document.getElementById('input').value.split('');
		let index = document.getElementById('getPosition').value - 1;

		outputElement.textContent += chars[index];
	});
}