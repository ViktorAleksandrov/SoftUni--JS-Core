function solve(arr) {

	let wordsCount = {};

	arr[0].match(/\w+/g).forEach(x => wordsCount[x] ? wordsCount[x]++ : wordsCount[x] = 1);

	console.log(JSON.stringify(wordsCount));
}

// solve(["Far too slow, you're far too slow."]);
// solve(["JS devs use Node.js for server-side JS.-- JS for devs"]);