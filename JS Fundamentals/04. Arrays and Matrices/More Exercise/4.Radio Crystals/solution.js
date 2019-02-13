function solve() {

	let thicknesses = JSON.parse(document.getElementById('arr').value);

	let resultSpan = document.getElementById('result');

	let desiredThickness = thicknesses.shift();

	for (let currentThickness of thicknesses) {

		let startParagraph = document.createElement('p');
		startParagraph.textContent = `Processing chunk ${currentThickness} microns`;
		resultSpan.appendChild(startParagraph);

		currentThickness = cut(currentThickness);
		currentThickness = lap(currentThickness);
		currentThickness = grind(currentThickness);
		currentThickness = etch(currentThickness);
		currentThickness = xRay(currentThickness);

		let lastParagraph = document.createElement('p');
		lastParagraph.textContent = `Finished crystal ${currentThickness} microns`;
		resultSpan.appendChild(lastParagraph);
	}

	function cut(currentThickness) {

		let cycles = 0;

		while (currentThickness / 4 >= desiredThickness) {

			currentThickness /= 4;
			cycles++;
		}

		if (cycles > 0) {

			printOperationCycles('Cut', cycles);

			currentThickness = transportAndWash(currentThickness);
		}

		return currentThickness;
	}

	function lap(currentThickness) {

		let cycles = 0;

		while (currentThickness * 0.8 >= desiredThickness) {

			currentThickness *= 0.8;
			cycles++;
		}

		if (cycles > 0) {

			printOperationCycles('Lap', cycles);

			currentThickness = transportAndWash(currentThickness);
		}

		return currentThickness;
	}

	function grind(currentThickness) {

		let cycles = 0;

		while (currentThickness - 20 >= desiredThickness) {

			currentThickness -= 20;
			cycles++;
		}

		if (cycles > 0) {

			printOperationCycles('Grind', cycles);

			currentThickness = transportAndWash(currentThickness);
		}

		return currentThickness;
	}

	function etch(currentThickness) {

		let cycles = 0;

		while (currentThickness - 2 >= desiredThickness - 1) {

			currentThickness -= 2;
			cycles++;
		}

		if (cycles > 0) {

			printOperationCycles('Etch', cycles);

			currentThickness = transportAndWash(currentThickness);
		}

		return currentThickness;
	}

	function xRay(currentThickness) {

		if (currentThickness < desiredThickness) {

			printOperationCycles('X-ray', 1);

			currentThickness++;
		}

		return currentThickness;
	}

	function printOperationCycles(operation, cycles) {

		let paragraph = document.createElement('p');

		paragraph.textContent = `${operation} x${cycles}`;

		resultSpan.appendChild(paragraph);
	}

	function transportAndWash(currentThickness) {

		currentThickness = Math.floor(currentThickness);

		let paragraph = document.createElement('p');

		paragraph.textContent = 'Transporting and washing';

		resultSpan.appendChild(paragraph);

		return currentThickness;
	}
}