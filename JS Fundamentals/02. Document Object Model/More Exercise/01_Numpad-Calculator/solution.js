function solve() {

	let expressionField = document.getElementById('expressionOutput');
	let resultField = document.getElementById('resultOutput');

	let operators = ['+', '-', '*', '/'];

	Array.from(document.getElementsByTagName('button')).forEach(button =>

		button.addEventListener('click', function () {

			if (operators.includes(button.value)) {

				expressionField.textContent += ` ${button.value} `;

			} else if (button.value === 'Clear') {

				expressionField.textContent = '';
				resultField.textContent = '';

			} else if (button.value === '=') {

				let expressionParts = expressionField.textContent.split(' ');

				let leftOperand = expressionParts[0];
				let operator = expressionParts[1];
				let rightOperand = expressionParts[2];

				if (operators.includes(operator) && leftOperand !== '' && rightOperand !== '') {

					resultField.textContent = eval(expressionField.textContent);

				} else {

					resultField.textContent = 'NaN';
				}

			} else {

				expressionField.textContent += button.value;
			}
		})
	);
}