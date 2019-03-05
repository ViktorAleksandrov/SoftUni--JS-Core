function solve(inputArray, sortMethod) {

	let sortingStrategies = {

		asc: (x, y) => x - y,
		desc: (x, y) => y - x
	};

	return inputArray.sort(sortingStrategies[sortMethod]);
}

// console.log(solve([14, 7, 17, 6, 8], 'asc'));
// console.log(solve([14, 7, 17, 6, 8], 'desc'));