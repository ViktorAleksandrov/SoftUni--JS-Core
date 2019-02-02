function solve() {

	document.querySelector('button').addEventListener('click', function () {

		let inputField = document.querySelector('input');
		let listItems = document.getElementsByTagName('li');

		let name = inputField.value[0].toUpperCase() + inputField.value.substr(1).toLowerCase();

		let index = name.charCodeAt(0) - 65;

		if (listItems[index].textContent === '') {

			listItems[index].textContent = name;

		} else {

			listItems[index].textContent += `, ${name}`;
		}

		inputField.value = '';
	})
}
