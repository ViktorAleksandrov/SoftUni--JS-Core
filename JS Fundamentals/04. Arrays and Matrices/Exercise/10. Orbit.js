function solve([cols, rows, starRow, starCol]) {

	let matrix = [];

	for (let row = 0; row < rows; row++) {

		matrix[row] = [];

		for (let col = 0; col < cols; col++) {

			matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
		}
	}

	matrix.forEach(x => console.log(x.join(' ')));
}

// solve([4, 4, 0, 0]);
// solve([5, 5, 2, 2]);
// solve([3, 3, 2, 2]);