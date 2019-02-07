function solve() {

	let number = +document.getElementById('num').value;

	let factors = [1];

	for (let index = 2; index <= number / 2; index++) {

		if (number % index === 0) {

			factors.push(index);
		}
	}

	factors.push(number);

	document.getElementById('result').textContent = factors.join(' ');
}