function solve() {

	let strings = JSON.parse(document.getElementById('arr').value);

	strings = strings.map(x => x.split('').reverse().join(''));
	strings = strings.map(x => x[0].toUpperCase() + x.slice(1));

	document.getElementById('result').textContent = strings.join(' ');
}