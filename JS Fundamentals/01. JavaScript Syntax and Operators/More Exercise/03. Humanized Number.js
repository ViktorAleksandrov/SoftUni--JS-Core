function solve(text) {

	let regex = new RegExp('\\d+');

	while (regex.exec(text) !== null) {

		let number = regex.exec(text)[0];

		text = text.replace(number, '');

		let lastDigit = number % 10;
		let lastTwoDigits = number % 100;
		let suffix;

		if (lastDigit === 1 && lastTwoDigits !== 11) {

			suffix = 'st';

		} else if (lastDigit === 2 && lastTwoDigits !== 12) {

			suffix = 'nd';

		} else if (lastDigit === 3 && lastTwoDigits !== 13) {

			suffix = 'rd';

		} else {

			suffix = 'th';
		}

		console.log(`${number}${suffix}`);
	}
}

//solve('The school has 256 students. In each class there are 26 chairs, 13 desks and 1 board.');
//solve('Yesterday I bought 12 pounds of peppers, 3 kilograms of carrots and 5 kilograms of tomatoes.');