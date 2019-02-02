function solve() {

	Array.from(document.getElementsByTagName('button')).forEach(button =>

		button.addEventListener('click', function (event) {

			let buttonName = event.target.name;

			let inputElement;
			let name;
			let messageDiv = document.createElement('div');

			if (buttonName === 'myBtn') {

				inputElement = document.getElementById('myChatBox');
				name = 'Me';
				messageDiv.style.textAlign = 'left';

			} else {

				inputElement = document.getElementById('peshoChatBox');
				name = 'Pesho';
				messageDiv.style.textAlign = 'right';
			}

			if (inputElement.value) {

				let span = document.createElement('span');
				let paragraph = document.createElement('p');

				span.textContent = name;
				paragraph.textContent = inputElement.value;
				inputElement.value = '';

				messageDiv.appendChild(span);
				messageDiv.appendChild(paragraph);

				document.getElementById('chatChronology').appendChild(messageDiv);
			}
		})
	);
}