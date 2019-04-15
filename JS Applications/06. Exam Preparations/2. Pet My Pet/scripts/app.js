$(() => {

	const app = Sammy('#site-content', function () {

		this.use('Handlebars', 'hbs');

		this.get('#/home', controller.getHome);

		this.get('#/register', controller.getRegister);
		this.post('#/register', controller.postRegister);
		this.get('#/login', controller.getLogin);
		this.post('#/login', controller.postLogin);
		this.get('#/logout', controller.logout);

		this.get('#/dashboard(/:category)?', controller.getAllPets);

		this.get('#/pets/my', controller.getMyPets);

		this.get('#/pets/create', controller.getCreatePet);
		this.post('#/pets/create', controller.postCreatePet);

		this.get('#/edit/:petId', controller.getEdit);
		this.post('#/edit/:petId', controller.postEdit);

		this.get('#/delete/:petId', controller.getDelete);
		this.post('#/delete/:petId', controller.postDelete);

		this.get('#/pet/:petId', controller.pet);

		this.get('#/details/:petId', controller.getDetails);
	});

	app.run('#/home');
});