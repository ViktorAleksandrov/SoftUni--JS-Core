function solve() {

	const prices = {
		Levski: { A: 10, B: 7, C: 5 },
		Litex: { A: 10, B: 7, C: 5 },
		VIP: { A: 25, B: 15, C: 10 }
	};

	let profit = 0;
	let fans = 0;

	let resultTextarea = document.getElementById('output');
	let summaryChildren = document.getElementById('summary').children;

	Array.from(document.getElementsByClassName('seat')).forEach(button => button.addEventListener('click', () => {

		let seatNumber = button.textContent;
		let zone = button.parentNode.parentNode.parentNode.parentNode.parentNode.className;
		let sector = String.fromCharCode(65 + button.parentNode.cellIndex);

		resultTextarea.value += ` Seat ${seatNumber} in zone ${zone} sector ${sector} `;

		if (button.style.backgroundColor === '') {

			button.style.backgroundColor = 'rgb(255, 0, 0)';

			resultTextarea.value += 'was taken.\n';

			profit += prices[zone][sector];
			fans++;

		} else {

			resultTextarea.value += 'is unavailable.\n';
		}
	}));

	summaryChildren[0].addEventListener('click',
		() => summaryChildren[1].textContent = `${profit} leva, ${fans} fans.`);
}