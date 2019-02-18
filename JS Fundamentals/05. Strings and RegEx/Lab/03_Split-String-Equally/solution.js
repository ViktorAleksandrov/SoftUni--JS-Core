function solve() {

	let string = document.getElementById('str').value;
	let number = +document.getElementById('num').value;

	if (string.length % number !== 0) {

		string += string.slice(0, number - string.length % number);
	}

	let resultArr = [];

	for (let index = 0; index < string.length; index += number) {

		resultArr.push(string.substr(index, number));
	}

	document.getElementById('result').textContent = resultArr.join(' ');
}