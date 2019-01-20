function solve(arr) {

	let obj = {};

	for (let i = 0; i < arr.length; i += 2) {

		let foodName = arr[i];
		let caloriesPerHundredGrams = Number(arr[i + 1]);

		obj[foodName] = caloriesPerHundredGrams;
	}

	console.log(obj);
}

//solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
//solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);