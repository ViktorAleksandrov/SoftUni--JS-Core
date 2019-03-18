function solve(arr) {

	let innerCollection = [];

	let commands = {

		add: (str) => innerCollection.push(str),
		remove: (str) => innerCollection = innerCollection.filter(el => el !== str),
		print: () => console.log(innerCollection.join())
	};

	arr.forEach(el => {

		let [command, string] = el.split(' ');

		commands[command](string);
	});
}

// solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
// solve(['add pesho', 'add gosho', 'add pesho', 'remove pesho', 'print']);