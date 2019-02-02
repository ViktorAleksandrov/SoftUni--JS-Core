function solve() {

	let finishers = 1;

	document.querySelector('button').addEventListener('click', function () {

		let inputs = document.getElementsByTagName('input');

		let robotInput = inputs[0];
		let moveInput = inputs[1];

		let moveTokens = moveInput.value.split(' ');

		let robotName = robotInput.value;

		let robotDiv = document.getElementById(robotName);

		let position = moveTokens[0];
		let distance = +moveTokens[1];

		let margin = +robotDiv.style.marginLeft.slice(0, 2);

		let message = document.querySelector('span');

		if (position === 'forward') {

			let marginToBe = margin + distance;

			if (marginToBe < 80) {

				robotDiv.style.marginLeft = marginToBe + '%';
				message.textContent = `${robotName} move ${distance} forward`;

			} else if (marginToBe === 80) {

				robotDiv.style.marginLeft = marginToBe + '%';

				if (finishers === 1) {

					message.textContent = `${robotName.toUpperCase()} WIN THE RACE!`;

				} else {

					message.textContent = `${robotName.toUpperCase()} FINISHED ${finishers}`;
				}

				finishers++;

			} else {

				message.textContent = `${robotName} cant move so forward`;
			}

		} else if (position === 'backward') {

			if (margin < 80 && margin - distance >= 0) {

				message.textContent = `${robotName} was distracted and he got behind with ${distance} meters`;

			} else {

				message.textContent = `${robotName} can't move so backward`;
			}
		}

		robotInput.value = "";
		moveInput.value = "";
	});
}