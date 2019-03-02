function solve(arr) {

	arr = arr.filter(line => /^<([\w]+)>.*?<\/\1>$/.test(line));

	let result = [];

	for (let line of arr) {

		let openTags = getTags(line, /<([\w]+)>/g)
		let reversedCloseTags = getTags(line, /<\/([\w]+)>/g).reverse();

		if (openTags.length === reversedCloseTags.length) {

			let isValid = true;

			for (let index = 0; index < openTags.length; index++) {

				if (openTags[index] !== reversedCloseTags[index]) {

					isValid = false;
					break;
				}
			}

			if (isValid) {

				result.push(line.replace(/<\/?\w+>/g, ''));
			}
		}
	}

	return result.join(' ');

	function getTags(line, regex) {

		let tags = [];

		let tagsMatches;

		while (tagsMatches = regex.exec(line)) {

			tags.push(tagsMatches[1]);
		}

		return tags;
	}
}

console.log(solve(['<h1><span>Hello World!</span></h1>', '<p>I am Peter.']));

console.log(solve(['<div><p>This</p> is</div>',
	'<div><a>perfectly</a></div>',
	'<divs><p>valid</p></divs>',
	'<div><p>This</div></p>',
	'<div><p>is not</p><div>']));