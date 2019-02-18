function solve() {

	let casing = document.getElementById('str2').value;

	let resultSpan = document.getElementById('result');

	if (casing === 'Camel Case' || casing === 'Pascal Case') {

		let word = document.getElementById('str1').value
			.split(' ')
			.filter(s => s)
			.map(s => s[0].toUpperCase() + s.slice(1).toLowerCase())
			.join('');

		if (casing === 'Camel Case') {

			word = word[0].toLowerCase() + word.slice(1);
		}

		resultSpan.textContent = word;

	} else {

		resultSpan.textContent = 'Error!';
	}
}