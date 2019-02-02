function solve() {

	let topCard;
	let bottomCard;

	Array.from(document.querySelectorAll('#exercise img')).forEach(img => {

		img.addEventListener('click', clickEvent);
	});

	function clickEvent(e) {

		let card = e.target;

		card.src = 'images/whiteCard.jpg';
		card.removeEventListener('click', clickEvent);

		let spans = document.querySelectorAll('#result span');

		let leftSpan = spans[0];
		let rightSpan = spans[2];

		if (card.parentElement.id === 'player1Div') {

			leftSpan.textContent = card.name;
			topCard = card;

		} else {

			rightSpan.textContent = card.name;
			bottomCard = card;
		}

		if (leftSpan.textContent !== '' && rightSpan.textContent !== '') {

			let topCardValue = Number(leftSpan.textContent);
			let bottomCardValue = Number(rightSpan.textContent);

			if (topCardValue > bottomCardValue) {

				topCard.style.border = '2px solid green';
				bottomCard.style.border = '2px solid darkred';

			} else {

				bottomCard.style.border = '2px solid green';
				topCard.style.border = '2px solid darkred';
			}

			topCard = undefined;
			bottomCard = undefined;

			let currentCardsNames = `[${topCardValue} vs ${bottomCardValue}] `;

			document.getElementById('history').textContent += currentCardsNames;

			setTimeout(() => {

				leftSpan.textContent = '';
				rightSpan.textContent = '';

			}, 2000);
		}
	};
}