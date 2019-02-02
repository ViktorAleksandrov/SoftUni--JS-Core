function solve() {

	let resultParagraph = document.getElementById('result');

	Array.from(document.getElementsByClassName('numbers')).forEach(div =>

		div.addEventListener('mouseover', function () {

			resultParagraph.textContent += div.textContent;
		})
	);

	Array.from(document.getElementsByClassName('operators')).forEach(div =>

		div.addEventListener('click', function () {

			let expressionRegex = /^\d+[+\-*/]{1}\d+$/;

			if (div.textContent === '=' && expressionRegex.test(resultParagraph.textContent)) {

				resultParagraph.textContent += '=' + eval(resultParagraph.textContent);

				setTimeout(() => resultParagraph.textContent = '', 5000);

			} else {

				resultParagraph.textContent += div.textContent;
			}
		})
	);
}