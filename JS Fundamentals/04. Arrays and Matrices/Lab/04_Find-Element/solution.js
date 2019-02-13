function solve() {

	let number = +document.getElementById('num').value;

	let strings = JSON.parse(document.getElementById('arr').value);

	let resultArr = [];

	strings.forEach(x => resultArr.push(`${x.includes(number)} -> ${x.indexOf(number)}`));

	document.getElementById('result').textContent = resultArr;
}