function solve() {

	let countByArgsType = {};

	for (let arg of arguments) {

		let argType = typeof arg;

		console.log(`${argType}: ${arg}`);

		if (!countByArgsType[argType]) {

			countByArgsType[argType] = 0;
		}

		countByArgsType[argType]++;
	}

	Object.keys(countByArgsType)
		.sort((x, y) => countByArgsType[y] - countByArgsType[x])
		.forEach(arg => console.log(`${arg} = ${countByArgsType[arg]}`));
}

// solve('cat', 42, function () { console.log('Hello world!'); });
// solve({ name: 'bob' }, 3.333, 9.999);