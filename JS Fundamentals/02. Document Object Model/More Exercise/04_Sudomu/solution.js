function solve() {

	let buttons = document.getElementsByTagName('button');

	let inputs = Array.from(document.getElementsByTagName('input'));
	let messageParagraph = document.querySelector('#check p');
	let table = document.querySelector('table');

	buttons[1].addEventListener('click', function () {

		inputs.forEach(i => i.value = '');
		messageParagraph.textContent = '';
		table.style.border = 'none';
	});

	buttons[0].addEventListener('click', function () {

		let sudomu = fillSudoku();

		let isSolved = isSudomuSolved(sudomu);

		if (isSolved) {

			messageParagraph.parentElement.style.color = 'green';
			messageParagraph.textContent = 'You solve it! Congratulations!';
			table.style.border = '2px solid green';

		} else {

			messageParagraph.parentElement.style.color = 'darkred';
			messageParagraph.textContent = 'NOP! You are not done yet...';
			table.style.border = '2px solid darkred';
		}
	});

	function fillSudoku() {

		let matrix = [[], [], []];

		let inputIndex = 0;

		for (let row = 0; row < 3; row++) {

			for (let col = 0; col < 3; col++) {

				matrix[row][col] = +inputs[inputIndex].value;
				inputIndex++;
			}
		}

		return matrix;
	}

	function isSudomuSolved(sudomu) {

		for (let row = 0; row < 3; row++) {

			for (let col = 0; col < 3; col++) {

				let currentNumber = sudomu[row][col];

				for (let index = col + 1; index < 3; index++) {

					if (currentNumber === sudomu[row][index]) {

						return false;
					}
				}

				for (let i = row + 1; i < 3; i++) {

					if (currentNumber === sudomu[i][col]) {

						return false;
					}
				}
			}
		}

		return true;
	}
}