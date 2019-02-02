function register() {

	let usernameElement = document.getElementById('username');
	let emailElement = document.getElementById('email');
	let passwordElement = document.getElementById('password');

	let username = usernameElement.value;
	let email = emailElement.value;
	let password = passwordElement.value;

	let emailRegex = /(.+)@(.+).(com|bg)/gm;

	if (username !== '' && password !== '' && emailRegex.test(email)) {

		let h1Element = document.createElement('h1');
		h1Element.textContent = 'Successful Registration!';

		let resultSection = document.getElementById('result');

		resultSection.appendChild(h1Element);
		resultSection.innerHTML += `Username: ${username}`;
		resultSection.appendChild(document.createElement('br'));
		resultSection.innerHTML += `Email: ${email}`;
		resultSection.appendChild(document.createElement('br'));
		resultSection.innerHTML += `Password: ${'*'.repeat(password.length)}`;

		usernameElement.value = '';
		emailElement.value = '';
		passwordElement.value = '';

		setTimeout(() => { resultSection.innerHTML = '' }, 5000);
	}
}