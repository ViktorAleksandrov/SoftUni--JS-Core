handlers.getHome = function (context) {

	context.isLoggedIn = userService.isLoggedIn();
	context.username = sessionStorage.getItem('username');

	context.loadPartials({

		header: '../views/common/header.hbs',
		footer: '../views/common/footer.hbs'

	}).then(function () {

		this.partial('../views/home/home.hbs');

	}).catch(err => notify.handleError(err));
};