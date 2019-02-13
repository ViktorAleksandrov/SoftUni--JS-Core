function solve(arr) {

	let step = +arr.pop();

	for (let index = 0; index < arr.length; index += step) {

		console.log(arr[index]);
	}
}

// solve(['5', '20', '31', '4', '20', '2']);
// solve(['dsa', 'asd', 'test', 'tset', '2']);
// solve(['1', '2', '3', '4', '5', '6']);