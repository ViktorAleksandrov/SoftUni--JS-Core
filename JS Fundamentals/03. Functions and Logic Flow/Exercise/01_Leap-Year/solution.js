function leapYear() {

	document.querySelector('#exercise button').addEventListener('click', checkLeapYear);

	function checkLeapYear() {

		let inputElement = document.querySelector('#exercise input');

		let year = +inputElement.value;

		let result = 'Leap Year';

		if (year % 100 === 0 && year % 400 !== 0 || year % 4 !== 0) {

			result = 'Not ' + result;
		}

		document.querySelector('#year h2').textContent = result;
		document.querySelector('#year div').textContent = year;

		inputElement.value = '';
	}
}