function solve(arr) {

	let result = [];

	arr.forEach((x, i) => x === 'add' ? result.push(i + 1) : result.pop());

	console.log(result.length === 0 ? 'Empty' : result.join('\n'));
}

// solve(['add', 'add', 'add', 'add']);
// solve(['add', 'add', 'remove', 'add', 'add']);
// solve(['remove', 'remove', 'remove']);