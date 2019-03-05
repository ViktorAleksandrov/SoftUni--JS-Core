function solve(arr) {

	let processString = (() => {

		let result = '';

		return {
			append: (str) => result += str,
			removeStart: (num) => result = result.slice(num),
			removeEnd: (num) => result = result.slice(0, result.length - num),
			print: () => console.log(result)
		};
	})();

	arr.forEach(el => {

		let [command, argument] = el.split(' ');

		processString[command](argument);
	});
}

solve(['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print']);
solve(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']);