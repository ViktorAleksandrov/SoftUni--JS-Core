/*let manager = */(() => {

	const meals = {

		apple: { carbohydrate: 1, flavour: 2 },
		coke: { carbohydrate: 10, flavour: 20 },
		burger: { carbohydrate: 5, fat: 7, flavour: 3 },
		omelet: { protein: 5, fat: 1, flavour: 1 },
		cheverme: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
	};

	let ingredients = {

		protein: 0,
		carbohydrate: 0,
		fat: 0,
		flavour: 0
	};

	return (commandLine) => {

		let [commandName, mealOrElement, quantity] = commandLine.split(' ');

		switch (commandName) {

			case 'restock':
				ingredients[mealOrElement] += +quantity;
				return 'Success';

			case 'prepare':
				let meal = meals[mealOrElement];

				for (let element in meal) {

					if (meal[element] * quantity > ingredients[element]) {

						return `Error: not enough ${element} in stock`;
					}
				}

				Object.keys(meal).forEach(el => ingredients[el] -= meal[el] * quantity);
				return 'Success';

			case 'report':
				return Object.keys(ingredients).map(el => `${el}=${ingredients[el]}`).join(' ');
		}
	};
})/*()*/;

// console.log(manager('restock carbohydrate 10'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare apple 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));

// console.log(manager('prepare cheverme 1'));
// console.log(manager('restock protein 10'));
// console.log(manager('prepare cheverme 1'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('prepare cheverme 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare cheverme 1'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare cheverme 1'));
// console.log(manager('report'));