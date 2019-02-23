function solve(json) {

	let objects = JSON.parse(json);

	console.log('<table>');

	let headingsRow = '  <tr>';

	Object.keys(objects[0]).forEach(x => headingsRow += `<th>${htmlEscape(x)}</th>`);

	console.log(headingsRow + '</tr>');

	for (let object of objects) {

		let row = '  <tr>';

		Object.keys(object).forEach(x => row += `<td>${htmlEscape(String(object[x]))}</td>`);

		console.log(row + '</tr>')
	}

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

// solve('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');
// solve('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');