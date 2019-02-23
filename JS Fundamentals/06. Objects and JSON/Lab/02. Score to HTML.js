function solve(json) {

	let objects = JSON.parse(json);

	console.log('<table>');
	console.log('  <tr><th>name</th><th>score</th></tr>');

	objects.forEach(x => console.log(
		`  <tr><td>${htmlEscape(x.name)}</td><td>${htmlEscape(String(x.score))}</td></tr>`));

	console.log('</table>');

	function htmlEscape(string) {

		return string
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;');
	}
}

// solve('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');
// solve('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');