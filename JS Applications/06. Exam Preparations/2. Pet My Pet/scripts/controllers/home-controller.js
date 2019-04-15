window.controller = window.controller || {};

controller.getHome = function (context) {

	loadPartials(context)
		.then(function () {

			this.partial('views/home/index.hbs');
		});
};