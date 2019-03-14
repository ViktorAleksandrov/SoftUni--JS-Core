class CheckingAccount {

	constructor(clientId, email, firstName, lastName) {

		this.clientId = clientId;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.products = [];
	}

	get clientId() {

		return this._clientId;
	}

	set clientId(value) {

		if (!/^\d{6}$/.test(value)) {

			throw new TypeError('Client ID must be a 6-digit number');
		}

		this._clientId = value;
	}

	get email() {

		return this._email;
	}

	set email(value) {

		if (!/[a-zA-Z\d]+@[a-zA-Z.]+/.test(value)) {

			throw new TypeError('Invalid e-mail');
		}

		this._email = value;
	}

	get firstName() {

		return this._firstName;
	}

	set firstName(value) {

		if (!/.{3,20}/.test(value)) {

			throw new TypeError('First name must be between 3 and 20 characters long');
		}

		if (!/^[a-zA-Z]{3,20}$/.test(value)) {

			throw new TypeError('First name must contain only Latin characters');
		}

		this._firstName = value;
	}

	get lastName() {

		return this._lastName;
	}

	set lastName(value) {

		if (!/.{3,20}/.test(value)) {

			throw new TypeError('Last name must be between 3 and 20 characters long');
		}

		if (!/^[a-zA-Z]{3,20}$/.test(value)) {

			throw new TypeError('Last name must contain only Latin characters');
		}

		this._lastName = value;
	}
}

// let acc1 = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
// let acc2 = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
// let acc3 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
// let acc4 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
// let acc5 = new CheckingAccount('13145a', 'ivan@some.com', 'Ivan', 'P3trov');