function solve(arr) {

	let wordsCount = new Map();

	arr[0].toLowerCase().match(/\w+/g).forEach(x => wordsCount[x] ? wordsCount[x]++ : wordsCount[x] = 1);

	Object.keys(wordsCount).sort().forEach(x => console.log(`'${x}' -> ${wordsCount[x]} times`));
}

// solve(["Far too slow, you're far too slow."]);
// solve(["JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --"]);