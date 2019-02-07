function greatestCD() {

	let firstNumber = +document.getElementById('num1').value;
	let secondNumber = +document.getElementById('num2').value;

	document.getElementById('result').textContent = gcd(firstNumber, secondNumber);

	function gcd(firstNumber, secondNumber) {

		if (!secondNumber) {

			return firstNumber;
		}

		return gcd(secondNumber, firstNumber % secondNumber);
	};
}