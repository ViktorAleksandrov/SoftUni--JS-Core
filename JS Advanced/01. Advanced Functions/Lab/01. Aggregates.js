function solve(arr) {

	console.log('Sum = ' + arr.reduce((acc, curr) => acc + curr));
	console.log('Min = ' + Math.min(...arr));
	console.log('Max = ' + Math.max(...arr));
	console.log('Product = ' + arr.reduce((acc, curr) => acc * curr));
	console.log('Join = ' + arr.join(''));
}

solve([2, 3, 10, 5]);
solve([5, -3, 20, 7, 0.5]);