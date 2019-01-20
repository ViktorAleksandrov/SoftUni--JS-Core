function solve(arr) {

	let perfectNumbers = [];

	for (let number of arr) {

		let sum = 0;

		for (let i = 1; i <= number / 2; i++) {

			if (number % i === 0) {

				sum += i;
			}
		}

		if (sum === number) {

			perfectNumbers.push(number);
		}
	}

	if (perfectNumbers.length > 0) {

		console.log(perfectNumbers.join(', '));

	} else {

		console.log('No perfect number');
	}
}

//solve([5, 6, 28]);
//solve([5, 32, 82]);