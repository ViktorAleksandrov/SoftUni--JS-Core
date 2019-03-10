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

// console.log('' + makeCard('A', 'S'));
// console.log('' + makeCard('10', 'H'));
// console.log('' + makeCard('1', 'C'));