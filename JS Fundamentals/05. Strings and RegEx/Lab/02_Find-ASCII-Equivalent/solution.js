function solve() {

	let inputArr = document.getElementById('str').value.split(' ').filter(x => x);
	let resultSpan = document.getElementById('result');

	let numbers = [];

	for (let element of inputArr) {

		if (+element) {

			numbers.push(element);

		} else {

			let asciiCodes = element.split('').map(x => x.charCodeAt(0)).join(' ');

			buildOutput(asciiCodes);
		}
	}

	buildOutput(String.fromCharCode(...numbers));

	function buildOutput(line) {

		let p = document.createElement('p');

		p.textContent = line;

		resultSpan.appendChild(p);
	}
}