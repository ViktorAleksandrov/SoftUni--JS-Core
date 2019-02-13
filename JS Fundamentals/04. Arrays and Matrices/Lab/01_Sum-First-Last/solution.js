function solve() {

	let numbers = JSON.parse(document.getElementById('arr').value);

	for (let index = 0; index < numbers.length; index++) {

		let p = document.createElement('p');

		p.textContent = `${index} -> ${numbers[index] * numbers.length}`;

		document.getElementById('result').appendChild(p);
	}
}