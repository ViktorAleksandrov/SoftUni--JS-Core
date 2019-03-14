/*let result = */(function () {

	const Suits = {

		SPADES: '\u2660',
		HEARTS: '\u2665',
		DIAMONDS: '\u2666',
		CLUBS: '\u2663'
	};

	const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

	class Card {

		constructor(face, suit) {

			this.face = face;
			this.suit = suit;
		}

		get face() {

			return this._face;
		}

		set face(face) {

			if (!validFaces.includes(face)) {

				throw new Error();
			}

			this._face = face;
		}

		get suit() {

			return this._suit;
		}

		set suit(suit) {

			let isSuitValid = Object.keys(Suits).some(x => Suits[x] === suit);

			if (!isSuitValid) {

				throw new Error();
			}

			this._suit = suit;
		}
	}

	return { Suits, Card };
})();

// let Card = result.Card;
// let Suits = result.Suits;

// let card = new Card('Q', Suits.CLUBS);

// card.face = 'A';
// card.suit = Suits.DIAMONDS;

// let card2 = new Card('1', Suits.DIAMONDS);