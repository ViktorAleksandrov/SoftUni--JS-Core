function solve(name, age, weight, height) {

	let patientChart = {

		name,
		personalInfo: { age, weight, height }
	};

	let BMI = weight / ((height / 100) ** 2);

	patientChart.status = getStatus();
	patientChart.BMI = Math.round(BMI);

	return patientChart;

	function getStatus() {

		if (BMI < 18.5) {

			return 'underweight';
		}
		else if (BMI < 25) {

			return 'normal';
		}
		else if (BMI < 30) {

			return 'overweight';
		}
		else {

			patientChart.recommendation = 'admission required';

			return 'obese';
		}
	}
}

// console.log(solve('Peter', 29, 75, 182));
// console.log(solve('Honey Boo Boo', 9, 57, 137));