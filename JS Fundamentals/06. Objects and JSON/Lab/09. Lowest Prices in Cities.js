function solve(arr) {

	let productsData = {};

	arr.forEach(line => {

		let [townName, productName, productPrice] = line.split(' | ');

		if (!productsData[productName]) {

			productsData[productName] = {};
		}

		productsData[productName][townName] = +productPrice;
	});

	for (let productName in productsData) {

		let townData = productsData[productName];

		let lowestPrice = Number.MAX_VALUE;
		let townName;

		for (let currentTown in townData) {

			let currentPrice = townData[currentTown];

			if (currentPrice < lowestPrice) {

				lowestPrice = currentPrice;
				townName = currentTown;
			}
		}

		console.log(`${productName} -> ${lowestPrice} (${townName})`);
	}
}

// solve(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10']);