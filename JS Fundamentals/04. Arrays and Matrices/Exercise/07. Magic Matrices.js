function solve(matrix) {

	let sum = matrix[0].reduce((a, b) => a + b);

	for (let row = 1; row < matrix.length; row++) {

		if (matrix[row].reduce((a, b) => a + b) !== sum) {

			return false;
		}
	}

	for (let row = 0; row < matrix[0].length; row++) {

		let colSum = 0;

		for (let col = 0; col < matrix.length; col++) {

			colSum += matrix[col][row];
		}

		if (colSum !== sum) {

			return false;
		}
	}

	return true;
}

// console.log(solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
// console.log(solve([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
// console.log(solve([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));