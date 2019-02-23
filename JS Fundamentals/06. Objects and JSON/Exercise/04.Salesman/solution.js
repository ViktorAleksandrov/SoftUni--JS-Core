function solve() {

	let allProducts = [];
	let profit = 0;

	let buttons = document.getElementsByTagName('button');
	let textareas = document.getElementsByTagName('textarea');

	let logTextarea = textareas[2];

	buttons[0].addEventListener('click', load);
	buttons[1].addEventListener('click', buy);
	buttons[2].addEventListener('click', endDay);

	function load() {

		JSON.parse(textareas[0].value).forEach(product => {

			let sameProduct = allProducts.find(currProd => currProd.name === product.name);

			if (sameProduct) {

				sameProduct.quantity += product.quantity;
				sameProduct.price = product.price;

			} else {

				allProducts.push(product);
			}

			logTextarea.value += `Successfully added ${product.quantity} ${product.name}. Price: ${product.price}\n`;
		});
	}

	function buy() {

		let product = JSON.parse(textareas[1].value);

		let sameProduct = allProducts.find(currProd => currProd.name === product.name);

		if (sameProduct && sameProduct.quantity >= product.quantity) {

			let orderMoney = product.quantity * sameProduct.price;

			sameProduct.quantity -= product.quantity;
			profit += orderMoney;

			logTextarea.value += `${product.quantity} ${product.name} sold for ${orderMoney}.\n`;

		} else {

			logTextarea.value += 'Cannot complete order.\n';
		}
	}

	function endDay() {

		logTextarea.value += `Profit: ${profit.toFixed(2)}.\n`;

		buttons[0].removeEventListener('click', load);
		buttons[1].removeEventListener('click', buy);
		buttons[2].removeEventListener('click', endDay);
	}
}

// [{ "name": "tomatoes", "quantity": 20, "price": 0.50 }, { "name": "potatoes", "quantity": 10, "price": 0.60 }]

// [{ "name": "tomatoes", "quantity": 20, "price": 0.50 }, { "name": "potatoes", "quantity": 10, "price": 0.60 }, { "name": "tomatoes", "quantity": 50, "price": 0.20 }]

// { "name": "tomatoes", "quantity": 20 }