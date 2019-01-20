function solve(firstNumber, secondNumber) {

	function gcd(firstNumber, secondNumber) {

		if (!secondNumber) {

			return firstNumber;
		}

		return gcd(secondNumber, firstNumber % secondNumber);
	};

	console.log(gcd(firstNumber, secondNumber));
}

//solve(15, 5);
//solve(2154, 458);