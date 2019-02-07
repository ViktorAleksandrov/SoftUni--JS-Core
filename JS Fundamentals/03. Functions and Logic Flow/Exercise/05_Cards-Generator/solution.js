function solve() {

	const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

	document.querySelector('button').addEventListener('click', displayCards);

	let resultSection = document.getElementById('cards');

	function displayCards() {

		let fromInput = document.getElementById('from');
		let toInput = document.getElementById('to');

		let fromCard = fromInput.value.toUpperCase();
		let toCard = toInput.value.toUpperCase();

		let startIndex = cards.indexOf(fromCard);
		let endIndex = cards.indexOf(toCard);

		let suit = document.querySelector('select').value.split(' ')[1];

		for (let index = startIndex; index <= endIndex; index++) {

			let firstParagraph = document.createElement('p');
			let middleParagraph = document.createElement('p');
			let lastParagraph = document.createElement('p');

			firstParagraph.textContent = suit;
			middleParagraph.textContent = cards[index];
			lastParagraph.textContent = suit;

			let cardDiv = document.createElement('div');

			cardDiv.appendChild(firstParagraph);
			cardDiv.appendChild(middleParagraph);
			cardDiv.appendChild(lastParagraph);

			cardDiv.classList.add('card');

			resultSection.appendChild(cardDiv);
		}

		fromInput.value = '';
		toInput.value = '';
	}
}