function solve(arr) {

	let totalIncome = 0;

	for (let order of arr) {

		let orderParts = order.split(', ');

		let isDecaf = orderParts[2] === 'decaf';
		let hasMilk = orderParts.includes('milk');

		let lastIndex = orderParts.length - 1;
		let sugarQuantity = Number(orderParts[lastIndex]);

		let drinkPrice = calculateDrinkPrice(isDecaf, hasMilk, sugarQuantity);

		let moneyInserted = Number(orderParts[0]);
		let drinkType = orderParts[1];

		printResult(drinkPrice, moneyInserted, drinkType);
	}

	console.log(`Income Report: ${totalIncome.toFixed(2)}$`);

	function printResult(drinkPrice, moneyInserted, drinkType) {

		if (moneyInserted >= drinkPrice) {

			totalIncome += drinkPrice;

			let change = moneyInserted - drinkPrice;

			console.log(`You ordered ${drinkType}. Price: ${drinkPrice.toFixed(2)}$ Change: ${change.toFixed(2)}$`);

		} else {

			let moneyNeeded = drinkPrice - moneyInserted;

			console.log(`Not enough money for ${drinkType}. Need ${moneyNeeded.toFixed(2)}$ more.`);
		}
	}

	function calculateDrinkPrice(isDecaf, hasMilk, sugarQuantity) {

		let drinkPrice = 0.8

		if (isDecaf) {

			drinkPrice += 0.1;
		}

		if (hasMilk) {

			drinkPrice += 0.1;
		}

		if (sugarQuantity > 0) {

			drinkPrice += 0.1;
		}

		return drinkPrice;
	}
}

//solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
//solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);