function solve() {

	let inputString = document.getElementById('str').value;

	let strNumber = String(inputString.match(/1/g).length);

	while (strNumber.length > 1) {

		strNumber = String(strNumber.split('').reduce((x, y) => +x + +y))
	}

	let resultText = inputString.slice(strNumber, inputString.length - strNumber)
		.split(/(.{8})/)
		.filter(x => x)
		.map(x => String.fromCharCode(parseInt(x, 2)))
		.filter(x => /[a-zA-Z ]/.test(x))
		.join('');

	document.getElementById('result').textContent = resultText;
}