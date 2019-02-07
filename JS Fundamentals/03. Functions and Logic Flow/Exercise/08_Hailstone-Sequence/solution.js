function getNext() {

	let number = +document.getElementById('num').value;

	let hailstoneSequence = [number];

	while (number !== 1) {

		if (number % 2 === 0) {

			number /= 2;

		} else {

			number = number * 3 + 1;
		}

		hailstoneSequence.push(number);
	}

	document.getElementById('result').textContent = hailstoneSequence.join(' ') + ' ';
}