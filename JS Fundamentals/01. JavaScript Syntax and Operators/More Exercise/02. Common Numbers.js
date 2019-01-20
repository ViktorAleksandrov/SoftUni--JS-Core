function solve(firstArray, secondArray, thirdArray) {

	let tempArray = firstArray.filter(a => secondArray.indexOf(a) !== -1);
	let commonNumbers = tempArray.filter(a => thirdArray.indexOf(a) !== -1);

	console.log(`The common elements are ${commonNumbers.sort().join(', ')}.`);

	let average = commonNumbers.reduce((a, b) => a + b) / commonNumbers.length;

	console.log(`Average: ${average}.`);

	let median;

	let middleIndex = commonNumbers.length / 2;

	if (commonNumbers.length % 2 !== 0) {

		median = commonNumbers[Math.floor(middleIndex)];

	} else {

		median = (commonNumbers[middleIndex - 1] + commonNumbers[middleIndex]) / 2;
	}

	console.log(`Median: ${median}.`);
}

//solve([5, 6, 50, 10, 1, 2], [5, 4, 8, 50, 2, 10], [5, 2, 50]);
//solve([1, 2, 3, 4, 5], [3, 2, 1, 5, 8], [2, 5, 3, 1, 16]);