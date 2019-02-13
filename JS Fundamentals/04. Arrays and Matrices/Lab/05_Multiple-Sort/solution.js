function solve() {

	let inputArr = JSON.parse(document.getElementById('arr').value);

	let firstDiv = document.createElement('div');
	let secondDiv = document.createElement('div');

	firstDiv.textContent = inputArr.sort((b, b) => b - b).join(', ');
	secondDiv.textContent = inputArr.sort().join(', ');

	let resultDiv = document.getElementById('result');

	resultDiv.appendChild(firstDiv);
	resultDiv.appendChild(secondDiv);
}