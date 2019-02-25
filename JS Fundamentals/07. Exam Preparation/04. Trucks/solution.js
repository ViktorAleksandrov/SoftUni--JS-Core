function solve() {

	let trucks = {};
	let backupTires = [];

	let legendsDivs = document.querySelectorAll('legend + div');
	let backupTiresDiv = legendsDivs[3];

	let buttons = document.getElementsByTagName('button');

	buttons[0].addEventListener('click', () => {

		let plateNumber = document.getElementById('newTruckPlateNumber').value;
		let tires = document.getElementById('newTruckTiresCondition').value.split(' ');

		if (!trucks[plateNumber]) {

			trucks[plateNumber] = { tires, distance: 0 };

			let currentTruckDiv = createDiv(plateNumber, 'truck');

			legendsDivs[4].appendChild(currentTruckDiv);
		}
	});

	buttons[1].addEventListener('click', () => {

		let tiresString = document.getElementById('newTiresCondition').value;

		backupTires.push(tiresString.split(' '));

		let currentTiresDiv = createDiv(tiresString, 'tireSet');

		backupTiresDiv.appendChild(currentTiresDiv);
	});

	buttons[2].addEventListener('click', () => {

		let plateNumber = document.getElementById('workPlateNumber').value;
		let distance = +document.getElementById('distance').value;

		if (trucks[plateNumber]) {

			let smallestTire = Math.min(...trucks[plateNumber].tires);
			let neededQuality = distance / 1000;

			if (smallestTire >= neededQuality) {

				travel(plateNumber, distance);

			} else if (backupTires.length > 0) {

				trucks[plateNumber].tires = backupTires.shift();

				backupTiresDiv.children[0].remove();

				smallestTire = Math.min(...trucks[plateNumber].tires);

				if (smallestTire >= neededQuality) {

					travel(plateNumber, distance);
				}
			}
		}
	});

	buttons[3].addEventListener('click', () => {

		let resultTextarea = document.querySelector('textarea');

		Object.keys(trucks).forEach(plateNumber =>
			resultTextarea.value += `Truck ${plateNumber} has traveled ${trucks[plateNumber].distance}.\n`);

		resultTextarea.value += `You have ${backupTires.length} sets of tires left.\n`;
	});

	function createDiv(text, className) {

		let div = document.createElement('div');
		div.textContent = text;
		div.className = className;

		return div;
	}

	function travel(plateNumber, distance) {

		trucks[plateNumber].tires = trucks[plateNumber].tires.map(tire => tire -= distance / 1000);
		trucks[plateNumber].distance += distance;
	}
}