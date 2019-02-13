function solve(arr) {

	let matrix = [];

	arr.forEach(x => matrix.push(x.split(' ').map(Number)));

	let leftDiagonalSum = 0;
	let rightDiagonalSum = 0;

	for (let index = 0; index < matrix.length; index++) {

		let row = matrix[index];

		leftDiagonalSum += row[index];
		rightDiagonalSum += row[row.length - 1 - index];
	}

	if (leftDiagonalSum === rightDiagonalSum) {

		for (let row = 0; row < matrix.length; row++) {

			for (let col = 0; col < matrix[row].length; col++) {

				if (row !== col && col !== matrix[row].length - 1 - row) {

					matrix[row][col] = leftDiagonalSum;
				}
			}
		}
	}

	matrix.forEach(x => console.log(x.join(' ')));
}

// solve(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
// solve(['1 1 1', '1 1 1', '1 1 0']);