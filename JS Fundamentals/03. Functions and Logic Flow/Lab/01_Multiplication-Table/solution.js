function solve() {

	let numberToBeMultiplied = parseInt(document.getElementById('num1').value);
	let multiplier = parseInt(document.getElementById('num2').value);

	let resultSpan = document.getElementById('result');

	resultSpan.textContent = '';

	findWrongInput(numberToBeMultiplied, multiplier);
	printTable(numberToBeMultiplied, multiplier);

	function findWrongInput(numberToBeMultiplied, multiplier) {

		if (numberToBeMultiplied > multiplier) {

			resultSpan.textContent = 'Try with other numbers.';
		}
	}

	function printTable(numberToBeMultiplied, multiplier) {

		for (let i = numberToBeMultiplied; i <= multiplier; i++) {

			let paragraph = document.createElement('p');

			let result = i * multiplier;

			paragraph.textContent = `${i} * ${multiplier} = ${result}`;

			resultSpan.appendChild(paragraph);
		}
	}
}