function printDeckOfCards(cards) {

	function makeCard(face, suit) {

		const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

		const validSuits = {

			S: '\u2660',
			H: '\u2665',
			D: '\u2666',
			C: '\u2663'
		};

		if (!validFaces.includes(face) || !validSuits[suit]) {

			throw new Error();
		}

		return {

			face,
			suit: validSuits[suit],
			toString: function () {

				return this.face + this.suit;
			}
		};
	}

	let outputCards = [];

	for (const card of cards) {

		try {

			let cardFace = card.slice(0, card.length - 1);
			let cardSuit = card.slice(-1);

			outputCards.push(makeCard(cardFace, cardSuit));
		}
		catch (error) {

			console.log(`Invalid card: ${card}`);
			return;
		}
	}

	console.log(outputCards.join(' '));
}

// printDeckOfCards(['AS', '10D', 'KH', '2C']);
// printDeckOfCards(['5S', '3D', 'QD', '1C']);