function solve(arr) {

	let townsProductsSales = {};

	arr.forEach(x => {

		let [townName, product, salesAmount, unitPrice] = x.split(/ -> | : /);

		if (!townsProductsSales[townName]) {

			townsProductsSales[townName] = [];
		}

		townsProductsSales[townName].push(`$$$${product} : ${salesAmount * unitPrice}`);
	});

	for (let townName in townsProductsSales) {

		console.log(`Town - ${townName}`);

		townsProductsSales[townName].forEach(x => console.log(x));
	}
}

// solve(['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500', 'Sofia -> Audi Q7 -> 200 : 100000', 'Montana -> Portokals -> 200000 : 1', 'Montana -> Qgodas -> 20000 : 0.2', 'Montana -> Chereshas -> 1000 : 0.3']);