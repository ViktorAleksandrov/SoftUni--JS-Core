function validate() {

	document.querySelector('#exercise button').addEventListener('click', validateNumber);

	function validateNumber() {

		let inputNumberAsString = document.querySelector('#exercise input').value;

		let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];

		let sum = 0;

		for (let index = 0; index < inputNumberAsString.length - 1; index++) {

			let currentNumber = +inputNumberAsString[index];
			let currentWeight = weights[index];

			sum += currentNumber * currentWeight;
		}

		let lastDigit = +inputNumberAsString[inputNumberAsString.length - 1];

		let remainder = sum % 11 % 10;

		let result = 'This number is ';

		if (lastDigit === remainder) {

			result += 'Valid!';

		} else {

			result += 'NOT Valid!';
		}

		document.querySelector('#response').textContent = result;
	}
}