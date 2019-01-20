function solve(number) {

	let numberAsString = String(number);
	let firstCharacter = numberAsString[0];
	let allDigitsAreTheSame = true;
	let allDigitsSum = Number(firstCharacter);

	for (let i = 1; i < numberAsString.length; i++) {

		let currentCharacter = numberAsString[i];

		if (firstCharacter !== currentCharacter) {

			allDigitsAreTheSame = false;
		}

		allDigitsSum += Number(currentCharacter);
	}

	console.log(allDigitsAreTheSame);
	console.log(allDigitsSum);
}

//solve(2222222);
//solve(1234);