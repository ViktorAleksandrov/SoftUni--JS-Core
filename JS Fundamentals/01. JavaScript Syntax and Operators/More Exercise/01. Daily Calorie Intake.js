function solve([sex, weight, height, age], workouts) {

	let consumedCalories;

	if (sex === 'm') {

		consumedCalories = 66 + 13.8 * weight + 5 * height - 6.8 * age;

	} else {

		consumedCalories = 655 + 9.7 * weight + 1.85 * height - 4.7 * age;
	}

	let activeFactor = getActiveFactor();

	let caloriesIntake = Math.round(consumedCalories * activeFactor);

	console.log(caloriesIntake);

	function getActiveFactor() {

		let activeFactor;

		switch (workouts) {

			case 0:
				activeFactor = 1.2;
				break;
			case 1:
			case 2:
				activeFactor = 1.375;
				break;
			case 3:
			case 4:
			case 5:
				activeFactor = 1.55;
				break;
			case 6:
			case 7:
				activeFactor = 1.725;
				break;
			default:
				activeFactor = 1.9;
		}

		return activeFactor;
	}
}

solve(['f', 46, 157, 32], 5);
solve(['m', 86, 185, 25], 3);