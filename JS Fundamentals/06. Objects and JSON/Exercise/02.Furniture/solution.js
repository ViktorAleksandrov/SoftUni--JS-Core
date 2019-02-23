function solve() {

	document.getElementsByTagName('button')[0].addEventListener('click', () => {

		JSON.parse(document.getElementsByTagName('textarea')[0].value).forEach(furniture => {

			let nameParagraph = document.createElement('p');
			nameParagraph.textContent = `Name: ${furniture.name}`;

			let imageElement = document.createElement('img');
			imageElement.src = furniture.img;

			let priceParagraph = document.createElement('p');
			priceParagraph.textContent = `Price: ${furniture.price}`;

			let decFactorParagraph = document.createElement('p');
			decFactorParagraph.textContent = `Decoration factor: ${furniture.decFactor}`;

			let checkboxInput = document.createElement('input');
			checkboxInput.type = 'checkbox';

			let furnitureDiv = document.createElement('div');
			furnitureDiv.classList.add('furniture');

			furnitureDiv.appendChild(nameParagraph);
			furnitureDiv.appendChild(imageElement);
			furnitureDiv.appendChild(priceParagraph);
			furnitureDiv.appendChild(decFactorParagraph);
			furnitureDiv.appendChild(checkboxInput);

			document.getElementById('furniture-list').appendChild(furnitureDiv);
		});
	});

	document.getElementsByTagName('button')[1].addEventListener('click', () => {

		let furnitureNames = [];
		let totalPrice = 0;
		let decFactors = [];

		Array.from(document.getElementsByClassName('furniture'))
			.filter(div => div.children[4].checked).forEach(furnitureDiv => {

				let furnitureParagraphs = furnitureDiv.getElementsByTagName('p');

				let name = furnitureParagraphs[0].textContent.split(': ')[1];
				let price = +furnitureParagraphs[1].textContent.split(': ')[1];
				let decFactor = +furnitureParagraphs[2].textContent.split(': ')[1];

				furnitureNames.push(name);
				totalPrice += price;
				decFactors.push(decFactor);
			});

		let averageDecFactor = decFactors.reduce((x, y) => x + y) / decFactors.length;

		let resulTextArea = document.getElementsByTagName('textarea')[1];

		resulTextArea.value = `Bought furniture: ${furnitureNames.join(' ')}\n`;
		resulTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
		resulTextArea.value += `Average decoration factor: ${averageDecFactor}`;
	});
}

// [{ "name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2 }, { "name": "Chair", "img": "https://joybird2.imgix.net/image_657_109.jpg?", "price": 50, "decFactor": 1.6 }]