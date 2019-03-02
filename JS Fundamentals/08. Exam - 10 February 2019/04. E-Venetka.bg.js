function solve(arr) {

	let towns = getTownData();

	let mostProfitableTown = Object.keys(towns)
		.sort((x, y) => towns[y].profit - towns[x].profit
			|| towns[y].vignettesCount - towns[x].vignettesCount
			|| x.localeCompare(y))[0];

	console.log(`${mostProfitableTown} is most profitable - ${towns[mostProfitableTown].profit} BGN`);

	let models = towns[mostProfitableTown].models;

	let mostDrivenModel = Object.keys(models)
		.sort((x, y) => models[y].count - models[x].count
			|| models[y].highestPrice - models[x].highestPrice
			|| x.localeCompare(y))[0];

	console.log(`Most driven model: ${mostDrivenModel}`);

	Object.keys(towns).filter(town => towns[town].models[mostDrivenModel])
		.sort()
		.forEach(town => console.log(
			`${town}: ${towns[town].models[mostDrivenModel].regNumbers.sort().join(', ')}`));

	function getTownData() {

		let towns = {};

		arr.forEach(obj => {

			let town = obj.town;
			let model = obj.model;
			let price = obj.price;

			if (!towns[town]) {

				towns[town] = { profit: 0, vignettesCount: 0, models: {} };
			}

			towns[town].profit += obj.price;
			towns[town].vignettesCount++;

			if (!towns[town].models[model]) {

				towns[town].models[model] = { count: 0, highestPrice: price, regNumbers: [] };
			}

			towns[town].models[model].count++;
			towns[town].models[model].regNumbers.push(obj.regNumber);

			if (price > towns[town].models[model].highestPrice) {

				towns[town].models[model].highestPrice = price;
			}
		});

		return towns;
	}
}

// solve([
// 	{ model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2 },
// 	{ model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8 },
// 	{ model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9 },
// 	{ model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3 },
// 	{ model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3 }
// ]);

// solve([
// 	{ model: 'BMW', regNumber: 'B1234SM', town: 'Burgas', price: 1 },
// 	{ model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8 },
// 	{ model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9 },
// 	{ model: 'BMW', regNumber: 'A3423SM', town: 'Burgas', price: 1 },
// 	{ model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3 }
// ]);

// solve([
// 	{ model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 1 },
// 	{ model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8 },
// 	{ model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9 },
// 	{ model: 'BMW', regNumber: 'A3423SM', town: 'Burgas', price: 2 },
// 	{ model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3 }
// ]);

// solve([
// 	{ model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2 },
// 	{ model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8 },
// 	{ model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9 },
// 	{ model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3 },
// 	{ model: 'Audi', regNumber: 'SJSCA', town: 'Sofia', price: 8 }
// ]);