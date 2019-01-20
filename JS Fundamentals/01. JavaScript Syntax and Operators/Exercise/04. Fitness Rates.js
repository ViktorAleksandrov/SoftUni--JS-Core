function solve(dayOfWeek, serviceType, timeAsNumber) {

	let price = 0;

	let workDaysServices = {

		'Fitness': 5,
		'Sauna': 4,
		'Instructor': 10
	}

	let weekendServices = {

		'Fitness': 8,
		'Sauna': 7,
		'Instructor': 15
	}

	if (dayOfWeek !== 'Saturday' && dayOfWeek !== 'Sunday') {

		if (timeAsNumber <= 15) {

			price = workDaysServices[serviceType];

		} else {

			price = workDaysServices[serviceType] + 2.5;
		}

	} else {

		price = weekendServices[serviceType];
	}

	console.log(price);
}

//solve('Monday', 'Sauna', 15.30);
//solve('Sunday', 'Fitness', 22.00);