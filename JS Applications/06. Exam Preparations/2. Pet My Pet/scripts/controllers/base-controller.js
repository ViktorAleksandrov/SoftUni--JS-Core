function loadPartials(context) {

	context.isLoggedIn = userService.isLoggedIn();
	context.username = sessionStorage.getItem('username');

	return context.loadPartials({

		header: 'views/common/header.hbs',
		footer: 'views/common/footer.hbs',
	});
}