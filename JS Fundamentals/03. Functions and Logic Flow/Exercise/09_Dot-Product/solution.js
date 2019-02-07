function solve() {

	let matrixOne = JSON.parse(document.getElementById('mat1').value);
	let matrixTwo = JSON.parse(document.getElementById('mat2').value);

	for (let matrixOneRow = 0; matrixOneRow < matrixOne.length; matrixOneRow++) {

		let resultArray = [];

		for (let matrixTwoRow = 0; matrixTwoRow < matrixTwo.length; matrixTwoRow++) {

			let rowSum = 0;

			for (let col = 0; col < matrixTwo[0].length; col++) {

				rowSum += matrixOne[matrixOneRow][col] * matrixTwo[matrixTwoRow][col];
			}

			resultArray.push(rowSum);
		}

		let p = document.createElement('p');

		p.textContent = resultArray.join(', ');

		document.getElementById('result').appendChild(p);
	}
}