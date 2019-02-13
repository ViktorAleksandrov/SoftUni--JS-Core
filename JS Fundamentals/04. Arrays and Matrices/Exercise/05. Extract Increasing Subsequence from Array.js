function solve(arr) {

	let biggestNumber = arr[0];

	arr.forEach(currentNumber => {

		if (currentNumber >= biggestNumber) {

			biggestNumber = currentNumber;

			console.log(currentNumber);
		}
	});
}

// solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// solve([1, 2, 3, 4]);
// solve([20, 3, 2, 15, 6, 1]);