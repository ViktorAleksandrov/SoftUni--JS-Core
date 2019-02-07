function validate() {

	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	const weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];

	document.querySelector('button').addEventListener('click', generateEGN);

	function generateEGN() {

		let yearElement = document.querySelector('#year');
		let monthElement = document.querySelector('#month');
		let dateElement = document.querySelector('#date');
		let regionElement = document.querySelector('#region');
		let genderElement = document.querySelector('input[name="gender"]:checked');

		let year = yearElement.value.slice(-2);
		let month = ('0' + (months.indexOf(monthElement.value) + 1)).slice(-2);
		let date = ('0' + dateElement.value).slice(-2);
		let region = regionElement.value.slice(0, 2);
		let gender = genderElement.value === 'Male' ? '2' : '1';

		let egn = `${year}${month}${date}${region}${gender}`;

		egn += getChecksum(egn);

		document.querySelector('#egn').textContent = `Your EGN is: ${egn}`;

		yearElement.value = '';
		monthElement.value = document.getElementsByTagName('option')[0].innerHTML;
		dateElement.value = '';
		regionElement.value = '';
		genderElement.checked = false;
	}

	function getChecksum(egn) {

		let weightSum = 0;

		for (let index = 0; index < egn.length; index++) {

			let egnDigit = +egn[index];
			let weight = weights[index];

			weightSum += egnDigit * weight;
		}

		return weightSum % 11 % 10;
	}
}