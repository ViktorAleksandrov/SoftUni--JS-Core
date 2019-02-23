function solve(arr) {

	let townsData = {};

	for (let index = 0; index < arr.length; index += 2) {

		let townName = arr[index];

		if (!townsData[townName]) {

			townsData[townName] = 0;
		}

		let income = +arr[index + 1];

		townsData[townName] += income;
	}

	console.log(JSON.stringify(townsData));
}

// solve(['Sofia', 20, 'Varna', 3, 'Sofia', 5, 'Varna', 4]);
// solve(['Sofia', 20, 'Varna', 3, 'sofia', 5, 'varna', 4]);