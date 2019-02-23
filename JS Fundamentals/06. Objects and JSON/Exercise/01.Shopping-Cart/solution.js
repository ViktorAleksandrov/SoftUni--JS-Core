function solve() {

	let products = new Set();
	let totalPrice = 0;

	let resultTextArea = document.querySelector('textarea');

	document.querySelectorAll('button')
		.forEach(button => button.addEventListener('click', () => {

			if (button.textContent === 'Buy') {

				let list = Array.from(products).join(', ');

				resultTextArea.value += `You bought ${list} for ${totalPrice.toFixed(2)}.\n`;

			} else {

				let productElements = button.parentElement.children;

				let name = productElements[1].textContent;
				let money = productElements[2].textContent.split(' ')[1];

				products.add(name);
				totalPrice += +money;

				resultTextArea.value += `Added ${name} for ${money} to the cart.\n`;
			}
		}));
}