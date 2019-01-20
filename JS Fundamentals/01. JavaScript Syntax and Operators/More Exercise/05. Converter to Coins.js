function solve(amountToConvert, coins) {

	coins.sort((a, b) => b - a);

	let neededCoins = [];

	for (let coin of coins) {

		while (amountToConvert >= coin) {

			amountToConvert -= coin;

			neededCoins.push(coin);
		}
	}

	console.log(neededCoins.join(', '));
}

//solve(46, [10, 25, 5, 1, 2]);
//solve(123, [5, 50, 2, 1, 10]);