function solve(arr) {

	let townsPopulations = {};

	arr.forEach(x => {

		let [townName, population] = x.split(' <-> ');

		if (!townsPopulations[townName]) {

			townsPopulations[townName] = 0;
		}

		townsPopulations[townName] += +population;
	});

	Object.keys(townsPopulations).forEach(x => console.log(`${x} : ${townsPopulations[x]}`));
}

// solve(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);

// solve(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']);