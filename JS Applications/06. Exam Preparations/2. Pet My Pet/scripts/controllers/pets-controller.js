window.controller = window.controller || {};

controller.getAllPets = function (context) {

	this.isLoggedIn = userService.isLoggedIn();
	this.username = sessionStorage.getItem('username');

	petsService.getAll()
		.then(pets => {

			let userId = sessionStorage.getItem('userId');
			let category = context.params.category.slice(1);

			this.otherPets = pets.filter(p => p._acl.creator !== userId);

			if (category && category !== 'All') {

				this.otherPets = this.otherPets
					.filter(p => p.category === category);
			}

			return this.loadPartials({

				header: 'views/common/header.hbs',
				otherPet: 'views/pets/otherPet.hbs',
				footer: 'views/common/footer.hbs',
			});

		}).then(function () {

			this.partial('views/pets/index.hbs');

		}).catch(notification.showResponseError);
};

controller.getCreatePet = function (context) {

	loadPartials(context)
		.then(function () {

			this.partial('views/pets/create.hbs');
		});
};

controller.postCreatePet = function (context) {

	petsService.create({ ...context.params, likes: 0 })
		.then(function () {

			notification.showSuccess('Pet created.');
			context.redirect('#/home');

		}).catch(notification.showResponseError);
};

controller.getMyPets = function () {

	this.isLoggedIn = userService.isLoggedIn();
	this.username = sessionStorage.getItem('username');

	let userId = sessionStorage.getItem('userId');

	petsService.getMy(userId)
		.then(pets => {

			this.myPets = pets;

			return this.loadPartials({

				header: 'views/common/header.hbs',
				myPet: 'views/pets/myPet.hbs',
				footer: 'views/common/footer.hbs',
			});

		}).then(function () {

			this.partial('views/pets/myPets.hbs');

		}).catch(notification.showResponseError);
};

controller.getEdit = function (context) {

	let petId = context.params.petId.slice(1);

	petsService.getPet(petId)
		.then(pet => {

			this.pet = pet;

			return loadPartials(context);

		}).then(function () {

			this.partial('views/pets/edit.hbs');

		}).catch(notification.showResponseError);
};

controller.postEdit = function (context) {

	let petId = context.params.petId.slice(1);

	petsService.getPet(petId)
		.then(pet => {

			pet.description = context.params.description;

			return petsService.edit(petId, pet);

		}).then(function () {

			notification.showSuccess('Updated successfully!');
			context.redirect('#/dashboard');

		}).catch(notification.showResponseError);
};

controller.getDelete = function (context) {

	let petId = context.params.petId.slice(1);

	petsService.getPet(petId)
		.then(pet => {

			this.pet = pet;

			return loadPartials(context);

		}).then(function () {

			this.partial('views/pets/delete.hbs');

		}).catch(notification.showResponseError);
};

controller.postDelete = function (context) {

	let petId = context.params.petId.slice(1);

	petsService.remove(petId)
		.then(function () {

			notification.showSuccess('Pet removed successfully!');
			context.redirect('#/dashboard');

		}).catch(notification.showResponseError);
};

controller.pet = function (context) {

	let petId = context.params.petId.slice(1);

	petsService.getPet(petId)
		.then(pet => {

			pet.likes = +pet.likes + 1;

			return petsService.edit(petId, pet);

		}).then(function () {

			context.redirect('#/dashboard');

		}).catch(notification.showResponseError);
};

controller.getDetails = function (context) {

	let petId = context.params.petId.slice(1);

	petsService.getPet(petId)
		.then(pet => {

			this.pet = pet;

			return loadPartials(context);

		}).then(function () {

			this.partial('views/pets/details.hbs');

		}).catch(notification.showResponseError);
};