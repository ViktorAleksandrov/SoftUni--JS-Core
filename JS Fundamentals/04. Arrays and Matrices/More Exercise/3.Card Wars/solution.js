function solve() {

	const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

	let inputCards = JSON.parse(document.getElementById('arr').value);

	let playerOneDeck = inputCards[0];
	let playerTwoDeck = inputCards[1];

	playWar();

	let playerOneParagraph = document.createElement('p');
	let playerTwoParagraph = document.createElement('p');

	playerOneParagraph.textContent = 'First -> ' + playerOneDeck.join(', ');
	playerTwoParagraph.textContent = 'Second -> ' + playerTwoDeck.join(', ');

	let resultSpan = document.getElementById('result');

	resultSpan.appendChild(playerOneParagraph);
	resultSpan.appendChild(playerTwoParagraph);

	function playWar() {

		let turn = 0;

		while (turn++ < 20 && playerOneDeck.length > 0 && playerTwoDeck.length > 0) {

			let playerOneCard = playerOneDeck.shift();
			let playerTwoCard = playerTwoDeck.shift();

			if (cards.indexOf(playerOneCard) > cards.indexOf(playerTwoCard)) {

				playerOneDeck.push(playerOneCard, playerTwoCard);

			} else {

				playerTwoDeck.push(playerOneCard, playerTwoCard);
			}
		}
	}
}