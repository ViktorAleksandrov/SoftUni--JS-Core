handlers.getRegister = function () {

	this.loadPartials({

		header: '../views/common/header.hbs',
		footer: '../views/common/footer.hbs'

	}).then(function () {

		this.partial('../views/user/register.hbs');

	}).catch(err => notify.handleError(err));
};

handlers.registerUser = function (context) {

	let username = context.params.username;
	let password = context.params.password;

	if (username.length < 3) {

		notify.showError('Username must be at least 3 characters long.');
		return;
	}

	if (password.length < 6) {

		notify.showError('Password must be at least 6 characters long.');
		return;
	}

	userService.register(username, password)
		.then(res => {

			userService.saveSession(res);

			notify.showInfo('User registration successful.');

			context.redirect('#/home');

		}).catch(err => notify.handleError(err));
};

handlers.getLogin = function () {

	this.loadPartials({

		header: '../views/common/header.hbs',
		footer: '../views/common/footer.hbs'

	}).then(function () {

		this.partial('../views/user/login.hbs');

	}).catch(err => notify.handleError(err));
};

handlers.loginUser = function (context) {

	let username = context.params.username;
	let password = context.params.password;

	userService.login(username, password)
		.then(res => {

			userService.saveSession(res);

			notify.showInfo('Login successful.');

			context.redirect('#/home');

		}).catch(err => notify.handleError(err));
};

handlers.logout = function () {

	userService.logout()
		.then(() => {

			sessionStorage.clear();

			notify.showInfo('Logout successful.');

			this.redirect('#/login');

		}).catch(err => notify.handleError(err));
};