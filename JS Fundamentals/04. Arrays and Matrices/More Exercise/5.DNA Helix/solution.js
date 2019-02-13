function solve() {

	const bases = 'ATCGTTAGGG';

	let helixLength = document.getElementById('num').value;

	let baseIndex = 0;

	for (let index = 0; index < helixLength; index++) {

		let p = document.createElement('p');

		switch (index % 4) {

			case 0:
				p.textContent = `**${bases[baseIndex++]}${bases[baseIndex++]}**`;
				break;
			case 1:
			case 3:
				p.textContent = `*${bases[baseIndex++]}--${bases[baseIndex++]}*`;
				break;
			case 2:
				p.textContent = `${bases[baseIndex++]}----${bases[baseIndex++]}`;
		}

		baseIndex %= 10;

		document.getElementById('result').appendChild(p);
	}
}