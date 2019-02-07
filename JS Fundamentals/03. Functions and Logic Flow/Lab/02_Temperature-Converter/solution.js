function solve() {

	let degreesToConvert = +document.getElementById('num1').value;
	let temperatureType = document.getElementById('type').value.toLowerCase();

	let correctType = false;

	let convertedTemperature;
	let result;

	convert(degreesToConvert, temperatureType);
	print(correctType, convertedTemperature);

	document.getElementById('result').textContent = result;

	function convert(degreesToConvert, temperatureType) {

		if (temperatureType === 'celsius') {

			convertedTemperature = degreesToConvert * 1.8 + 32;
			correctType = true;

		} else if (temperatureType === 'fahrenheit') {

			convertedTemperature = (degreesToConvert - 32) / 1.8;
			correctType = true;
		}
	}

	function print(correctType, convertedTemperature) {

		if (correctType) {

			result = Math.round(convertedTemperature);

		} else {

			result = 'Error!';
		}
	}
}