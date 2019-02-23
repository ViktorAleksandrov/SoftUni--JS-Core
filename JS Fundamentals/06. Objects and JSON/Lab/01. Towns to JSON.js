function solve(arr) {

	let towns = [];

	for (let index = 1; index < arr.length; index++) {

		let townData = arr[index].split(/\s*\|\s*/);

		let town = {

			Town: townData[1],
			Latitude: +townData[2],
			Longitude: +townData[3]
		};

		towns.push(town);
	}

	console.log(JSON.stringify(towns));
}

// solve(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |']);

// solve(['| Town | Latitude | Longitude |', '| Veliko Turnovo | 43.0757 | 25.6172 |',
// 	'| Monatevideo | 34.50 | 56.11 |']);