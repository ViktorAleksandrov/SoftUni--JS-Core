function solve() {

	document.getElementsByTagName('button')[1].addEventListener('click', function () {

		document.querySelector('section').style.display = 'none';
	});

	let steps = 1;

	document.getElementsByTagName('button')[0].addEventListener('click', function (event) {

		let button = event.target;

		let firstStepElement = document.getElementById('firstStep');
		let secondStepElement = document.getElementById('secondStep');

		if (steps === 1) {

			document.getElementById('content').style.backgroundImage = 'none';
			firstStepElement.style.display = 'block';

			steps++;

		} else if (steps === 2) {

			let agreeRadioInput = document.querySelector('input[value="agree"]');

			if (agreeRadioInput.checked) {

				firstStepElement.style.display = 'none';
				secondStepElement.style.display = 'block';

				button.style.display = 'none';

				setTimeout(() => button.style.display = 'inline', 3000);

				steps++;
			}

		} else {

			secondStepElement.style.display = 'none';

			document.getElementById('thirdStep').style.display = 'block';

			button.style.display = 'none';

			document.getElementsByTagName('button')[1].textContent = 'Finish';
		}
	});
}