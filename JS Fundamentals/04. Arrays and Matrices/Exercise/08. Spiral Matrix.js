function solve(rows, columns) {

	let matrix = [];

	for (let index = 0; index < rows; index++) {

		matrix.push([]);
	}

	let currentNumber = 1;

	let row = 0;
	let col = 0;

	let rounds = 0;

	while (currentNumber <= rows * columns) {

		fillRight();
		fillDown();
		fillLeft();
		fillUp();
	}

	matrix.forEach(x => console.log(x.join(' ')));

	function fillRight() {

		while (col + rounds < columns) {

			matrix[row][col++] = currentNumber++;
		}

		row++;
		col--;
	}

	function fillDown() {

		while (row + rounds < rows) {

			matrix[row++][col] = currentNumber++;
		}

		row--;
		col--;
	}

	function fillLeft() {

		while (col >= rounds) {

			matrix[row][col--] = currentNumber++;
		}

		rounds++;

		row--;
		col++;
	}

	function fillUp() {

		while (row >= rounds) {

			matrix[row--][col] = currentNumber++;
		}

		row++;
		col++;
	}
}

// solve(5, 5);
// solve(3, 3);