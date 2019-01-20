function solve(stepsCount, stepLength, kilometersPerHour) {

	let walkedDistanceInMeters = stepsCount * stepLength;
	let walkedDistanceInKilometers = walkedDistanceInMeters / 1000;

	let restingSeconds = Math.floor(walkedDistanceInMeters / 500) * 60;
	let totalSeconds = Math.round(walkedDistanceInKilometers / kilometersPerHour * 3600) + restingSeconds;

	let hours = Math.floor(totalSeconds / 3600);
	let seconds = totalSeconds % 60;
	let minutes = (totalSeconds - seconds) % 3600 / 60;

	if (hours < 10) {

		hours = '0' + hours;
	}

	if (minutes < 10) {

		minutes = '0' + minutes;
	}

	if (seconds < 10) {

		seconds = '0' + seconds;
	}

	console.log(`${hours}:${minutes}:${seconds}`);
}

//solve(4000, 0.60, 5);
//solve(2564, 0.70, 5.5);