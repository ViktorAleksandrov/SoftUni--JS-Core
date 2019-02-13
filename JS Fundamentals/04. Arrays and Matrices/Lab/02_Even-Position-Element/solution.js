function solve() {

	let numbers = JSON.parse(document.getElementById('arr').value);

	let evens = [];

	numbers.forEach((number, index) => {

		if (index % 2 === 0) {

			evens.push(number);
		}
	});

	document.getElementById('result').textContent = evens.join(' x ');
}