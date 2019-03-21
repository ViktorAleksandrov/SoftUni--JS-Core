function validate() {

	let companyCheckBox = $('#company');

	companyCheckBox.click(() => $('#companyInfo').css('display', 'block'));

	$('#submit').click(validateForm);

	function validateForm(event) {

		event.preventDefault();

		let areAllFieldsValid = true;

		let usernameElement = $('#username');

		if (!/^[a-zA-Z\d]{3,20}$/.test(usernameElement.val())) {

			usernameElement.css('border-color', 'red');
			areAllFieldsValid = false;
		}

		let passwordElement = $('#password');
		let confirmPasswordElement = $('#confirm-password');

		let password = passwordElement.val();

		if (!/^\w{5,15}$/.test(password) || password !== confirmPasswordElement.val()) {

			passwordElement.css('border-color', 'red');
			confirmPasswordElement.css('border-color', 'red');
			areAllFieldsValid = false;
		}

		let emailElement = $('#email');

		if (!/@.*\./.test(emailElement.val())) {

			emailElement.css('border-color', 'red');
			areAllFieldsValid = false;
		}

		if (companyCheckBox.is(':checked')) {

			let companyNumberElement = $('#companyNumber');

			let companyNumber = companyNumberElement.val();

			if (companyNumber < 1000 || companyNumber > 9999) {

				companyNumberElement.css('border-color', 'red');
				areAllFieldsValid = false;
			}
		}

		if (areAllFieldsValid) {

			$('#valid').css('display', 'block');
		}
	}
}