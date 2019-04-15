window.controller = window.controller || {};

controller.getRegister = function (context) {

	loadPartials(context)
		.then(function () {

			this.partial('views/user/register.hbs');
		});
};

controller.postRegister = function (context) {

	let { username, password } = context.params;

	if (username.length < 3) {

		notification.showError('Username must be at least 3 symbols');
		return;
	}

	if (password.length < 6) {

		notification.showError('Password must be at least 6 symbols');
		return;
	}

	userService.register(username, password)
		.then(userInfo => {

			userService.saveSession(userInfo);
			notification.showSuccess('User registration successful.');
			context.redirect('#/home');

		}).catch(notification.showResponseError);
};

controller.getLogin = function (context) {

	loadPartials(context)
		.then(function () {

			this.partial('views/user/login.hbs');
		});
};

controller.postLogin = function (context) {

	let { username, password } = context.params;

	if (username.length < 3) {

		notification.showError('Username must be at least 3 symbols');
		return;
	}

	if (password.length < 6) {

		notification.showError('Password must be at least 6 symbols');
		return;
	}

	userService.login(username, password)
		.then(userInfo => {

			userService.saveSession(userInfo);
			notification.showSuccess('Login successful.');
			context.redirect('#/home');

		}).catch(notification.showResponseError);
};

controller.logout = function () {

	userService.logout()
		.then(() => {

			sessionStorage.clear();
			notification.showSuccess('Logout successful.');
			this.redirect('#/home');

		}).catch(notification.showResponseError);
};