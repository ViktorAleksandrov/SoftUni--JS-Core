function solve() {

	document.querySelector('button').addEventListener('click', function (event) {

		let inputField = document.querySelector('input');

		let inputNumbers = inputField.value.trim().split(' ').sort();

		if (inputNumbers.length === 6) {

			let areNumbersValid = true;

			for (let index = 0; index < inputNumbers.length; index++) {

				if (index < inputNumbers.length - 1 && inputNumbers[index] === inputNumbers[index + 1]) {

					areNumbersValid = false;
					break;
				}

				inputNumbers[index] = +inputNumbers[index];

				let currentNumber = inputNumbers[index];

				if (isNaN(currentNumber) || currentNumber < 1 || currentNumber > 49) {

					areNumbersValid = false;
					break;
				}
			}

			if (areNumbersValid) {

				let allNumbersDiv = document.getElementById('allNumbers');

				for (let index = 1; index <= 49; index++) {

					let numberDiv = document.createElement('div');

					numberDiv.textContent = index;
					numberDiv.classList.add('numbers');

					if (inputNumbers.includes(index)) {

						numberDiv.style.backgroundColor = 'orange';
					}

					allNumbersDiv.appendChild(numberDiv);
				}

				inputField.disabled = true;

				event.target.disabled = true;
			}
		}
	});
}