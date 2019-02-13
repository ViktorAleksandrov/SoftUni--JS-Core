function solve() {

	let carNumbers = JSON.parse(document.getElementById('arr').value);

	let cars = [];

	carNumbers.forEach(number => {

		let category = 'Other';

		if (/^BA [\d]{3} [\d]{3}$/.test(number)) {

			category = 'BulgarianArmy';

		} else if (/^CP [\d]{2} [\d]{3}$/.test(number)) {

			category = 'CivilProtection';

		} else if (/^(C|CT) [\d]{4}$/.test(number)) {

			category = 'Diplomatic';

		} else if (/^XX [\d]{4}$/.test(number)) {

			category = 'Foreigners';

		} else if (/^[\d]{3} [A-Za-z]{1} [\d]{3}$/.test(number)) {

			category = 'Transient';

		} else if (/^(C|CA|CB) [\d]{4} [A-Za-z]{1,2}$/.test(number)) {

			category = 'Sofia';

		} else if (/^[A-Za-z]{1,2} [\d]{4} [A-Za-z]{1,2}$/.test(number)) {

			category = 'Province';
		}

		cars[category] === undefined ? cars[category] = 1 : cars[category]++;
	});

	let sortedCategories = Object.keys(cars).sort((a, b) => a.localeCompare(b));

	for (let category of sortedCategories) {

		let p = document.createElement('p');

		p.textContent = `${category} -> ${cars[category]}`;

		document.getElementById('result').appendChild(p);
	}
}