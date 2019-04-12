$(() => {
	const app = Sammy('#main', function () {

		this.use('Handlebars', 'hbs');

		this.get('#/home', function (context) {

			isLoggedIn(context);

			this.loadPartials({

				header: 'templates/common/header.hbs',
				footer: 'templates/common/footer.hbs',

			}).then(function () {

				this.partial('templates/home/home.hbs');
			});
		});

		this.get('#/about', function (context) {

			isLoggedIn(context);

			this.loadPartials({

				header: 'templates/common/header.hbs',
				footer: 'templates/common/footer.hbs',

			}).then(function () {

				this.partial('templates/about/about.hbs');
			});
		});

		this.get('#/register', function () {

			this.loadPartials({

				header: 'templates/common/header.hbs',
				registerForm: 'templates/register/registerForm.hbs',
				footer: 'templates/common/footer.hbs',

			}).then(function () {

				this.partial('templates/register/registerPage.hbs');
			});
		});

		this.post('#/register', function (context) {

			let { username, password } = context.params;

			auth.register(username, password)
				.then(userInfo => {

					auth.saveSession(userInfo);
					auth.showInfo('Register successful.');

					this.redirect('#/home');
				});
		});

		this.get('#/login', function () {

			this.loadPartials({

				header: 'templates/common/header.hbs',
				loginForm: 'templates/login/loginForm.hbs',
				footer: 'templates/common/footer.hbs',

			}).then(function () {

				this.partial('templates/login/loginPage.hbs');
			});
		});

		this.post('#/login', function (context) {

			let { username, password } = context.params;

			auth.login(username, password)
				.then(userInfo => {

					auth.saveSession(userInfo);
					auth.showInfo('Login successful.');

					this.redirect('#/home');
				});
		});

		this.get('#/logout', async function () {

			await auth.logout();

			sessionStorage.clear();

			auth.showInfo('Logout successful.');

			this.redirect('#/home');
		});

		this.get('#/catalog', function (context) {

			isLoggedIn(context);

			teamsService.loadTeams()
				.then(teams => {

					this.hasNoTeam = !sessionStorage.getItem('teamId');
					this.teams = teams;

					this.loadPartials({

						header: 'templates/common/header.hbs',
						team: 'templates/catalog/team.hbs',
						footer: 'templates/common/footer.hbs',

					}).then(function () {

						this.partial('templates/catalog/teamCatalog.hbs');
					});
				});
		});

		this.get('#/create', function (context) {

			isLoggedIn(context);

			this.loadPartials({

				header: 'templates/common/header.hbs',
				createForm: 'templates/create/createForm.hbs',
				footer: 'templates/common/footer.hbs',

			}).then(function () {

				this.partial('templates/create/createPage.hbs');
			});
		});

		this.post('#/create', function (context) {

			let { name, comment } = context.params;

			teamsService.createTeam(name, comment)
				.then(team => {

					teamsService.joinTeam(team._id)
						.then(() => {

							sessionStorage.setItem('teamId', team._id);
							auth.showInfo('Create successful.');
							this.redirect('#/catalog');
						});
				});
		});

		this.get('#/catalog/:teamId', function (context) {

			isLoggedIn(context);

			this.teamId = context.params.teamId.slice(1);

			requester.get('user', '', 'kinvey')
				.then(members => {

					this.members = Array.from(members)
						.filter(m => m.teamId === this.teamId);

					teamsService.loadTeamDetails(this.teamId)
						.then(team => {

							this.name = team.name;
							this.comment = team.comment;
							this.hasNoTeam = !sessionStorage.getItem('teamId');
							this.isAuthor = team._acl.creator === sessionStorage.getItem('userId');
							this.isOnTeam = team._id === sessionStorage.getItem('teamId');

							this.loadPartials({

								header: 'templates/common/header.hbs',
								teamMember: 'templates/catalog/teamMember.hbs',
								teamControls: 'templates/catalog/teamControls.hbs',
								footer: 'templates/common/footer.hbs',

							}).then(function () {

								this.partial('templates/catalog/details.hbs');
							});
						});
				});
		});

		this.get('#/edit/:teamId', function (context) {

			isLoggedIn(context);

			this.teamId = context.params.teamId.slice(1);

			teamsService.loadTeamDetails(this.teamId)
				.then(team => {

					this.name = team.name;
					this.comment = team.comment;

					this.loadPartials({

						header: 'templates/common/header.hbs',
						editForm: 'templates/edit/editForm.hbs',
						footer: 'templates/common/footer.hbs',

					}).then(function () {

						this.partial('templates/edit/editPage.hbs');
					});
				});
		});

		this.post('#/edit/:teamId', function (context) {

			let teamId = context.params.teamId.slice(1);

			let { name, comment } = context.params;

			teamsService.edit(teamId, name, comment)
				.then(() => {

					auth.showInfo('Edit successful.');
					this.redirect('#/catalog');
				});
		});

		this.get('#/join/:teamId', function (context) {

			let teamId = context.params.teamId.slice(1);

			teamsService.joinTeam(teamId)
				.then(() => {

					sessionStorage.setItem('teamId', teamId);
					this.redirect('#/catalog');
				});
		});

		this.get('#/leave', function () {

			teamsService.leaveTeam()
				.then(() => {

					sessionStorage.setItem('teamId', '');
					this.redirect('#/catalog');
				});
		});
	});

	app.run();
});

function isLoggedIn(context) {

	context.loggedIn = !!sessionStorage.getItem('authtoken');
	context.username = sessionStorage.getItem('username');
}