function solve(firstNumberAsString, secondNumberAsString) {

	let firstNumber = Number(firstNumberAsString);
	let secondNumber = Number(secondNumberAsString);

	let result = 0;

	for (let i = firstNumber; i <= secondNumber; i++) {

		result += i;
	}

	return result;
}

//console.log(solve('1', '5'));
//console.log(solve('-8', '20'));