function solve() {

	let selectMenuTo = document.getElementById('selectMenuTo');

	let binaryOption = selectMenuTo.children[0];
	let hexOption = document.createElement('option');

	binaryOption.value = 'binary';
	hexOption.value = 'hexadecimal';

	binaryOption.textContent = 'Binary';
	hexOption.textContent = 'Hexadecimal';

	selectMenuTo.appendChild(hexOption);

	document.getElementsByTagName('button')[0].addEventListener('click', function () {

		let resultField = document.getElementById('result');
		let decimalNumber = +document.getElementById('input').value;

		if (selectMenuTo.value === 'binary') {

			resultField.value = decimalNumber.toString(2);

		} else {

			resultField.value = decimalNumber.toString(16).toUpperCase();
		}
	});
}