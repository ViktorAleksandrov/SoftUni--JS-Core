function solve(order) {

	let power, volume;

	if (order.power <= 90) {

		power = 90;
		volume = 1800;
	}
	else if (order.power <= 120) {

		power = 120;
		volume = 2400;
	}
	else {

		power = 200;
		volume = 3500;
	}

	if (order.wheelsize % 2 === 0) {

		order.wheelsize--;
	}

	return {

		model: order.model,
		engine: { power, volume },
		carriage: { type: order.carriage, color: order.color },
		wheels: Array(4).fill(order.wheelsize)
	};
}

// console.log(solve({
// 	model: 'VW Golf II',
// 	power: 90,
// 	color: 'blue',
// 	carriage: 'hatchback',
// 	wheelsize: 14
// }));

// console.log(solve({
// 	model: 'Opel Vectra',
// 	power: 110,
// 	color: 'grey',
// 	carriage: 'coupe',
// 	wheelsize: 17
// }));