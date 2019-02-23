function solve() {

	let buttons = document.getElementsByTagName('button');

	buttons[0].addEventListener('click', (event) => {

		event.preventDefault();

		let userInputs = document.querySelectorAll('.user-info input');
		let username = userInputs[0].value;
		let email = userInputs[2].value;

		let topics = Array.from(document.querySelectorAll('.topics input:checked'))
			.map(el => el.value)
			.join(' ');

		let tableRow = document.querySelector('tbody').insertRow();

		let usernameTd = tableRow.insertCell();
		let emailTd = tableRow.insertCell();
		let topicsTd = tableRow.insertCell();

		usernameTd.textContent = username;
		emailTd.textContent = email;
		topicsTd.textContent = topics;
	});

	buttons[1].addEventListener('click', () => {

		let searchedString = document.querySelector('form + input').value;

		Array.from(document.querySelectorAll('tbody tr')).forEach(tr => {

			let hasSearchedString = Array.from(tr.children)
				.some(td => td.textContent.includes(searchedString));

			tr.style.visibility = hasSearchedString ? 'visible' : 'hidden';
		});
	});
}