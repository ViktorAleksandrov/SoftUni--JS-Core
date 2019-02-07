function solve() {

	let startNumber = +document.getElementById('firstNumber').value;
	let endNumber = +document.getElementById('secondNumber').value;

	let firstString = document.getElementById('firstString').value;
	let secondString = document.getElementById('secondString').value;
	let thirdString = document.getElementById('thirdString').value;

	let resultSpan = document.getElementById('result');

	for (let index = startNumber; index <= endNumber; index++) {

		checkCurrentNumber(index);
	}

	function checkCurrentNumber(index) {

		let p = document.createElement('p');

		p.textContent = index;

		if (index % 3 === 0 && index % 5 === 0) {

			p.textContent += ` ${firstString}-${secondString}-${thirdString}`;

		} else if (index % 3 === 0) {

			p.textContent += ` ${secondString}`;

		} else if (index % 5 === 0) {

			p.textContent += ` ${thirdString}`;
		}

		resultSpan.appendChild(p);
	}
}