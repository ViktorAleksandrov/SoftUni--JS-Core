function solve(inputCommands) {

	let commands = (() => {

		let cars = {};

		return {

			create: ([child, inherit, parent]) =>
				cars[child] = parent ? Object.create(cars[parent]) : {},

			set: ([name, key, value]) => cars[name][key] = value,

			print: ([name]) => {

				let car = cars[name];
				let properties = [];

				for (const key in car) {

					properties.push(`${key}:${car[key]}`)
				}

				console.log(properties.join(', '));
			}
		};
	})();

	inputCommands.forEach(command => {

		let commandParams = command.split(' ');

		let commandName = commandParams.shift();

		commands[commandName](commandParams);
	});
}

// solve([
// 	'create c1',
// 	'create c2 inherit c1',
// 	'set c1 color red',
// 	'set c2 model new',
// 	'print c1',
// 	'print c2'
// ]);

// solve([
// 	'create pesho',
// 	'create gosho inherit pesho',
// 	'create stamat inherit gosho',
// 	'set pesho rank number1',
// 	'set gosho nick goshko',
// 	'print stamat'
// ]);