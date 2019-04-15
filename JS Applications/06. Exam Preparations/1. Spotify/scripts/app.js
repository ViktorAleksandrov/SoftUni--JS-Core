const handlers = {};

$(() => {

	const app = Sammy('#container', function () {

		this.use('Handlebars', 'hbs');

		this.get('#/home', handlers.getHome);
		this.get('/index.html', handlers.getHome);
		this.get('/', handlers.getHome);

		this.get('#/register', handlers.getRegister);
		this.get('#/login', handlers.getLogin);
		this.get('#/logout', handlers.logout);

		this.post('#/register', handlers.registerUser);
		this.post('#/login', handlers.loginUser);

		this.get('#/allSongs', handlers.getAllSongs);
		this.get('#/mySongs', handlers.getMySongs);

		this.get('#/create', handlers.getCreateSong);
		this.post('#/create', handlers.createSong);

		this.get('#/like/:songId', handlers.likeSong);
		this.get('#/listen/:songId', handlers.listenSong);
		this.get('#/remove/:songId', handlers.removeSong);
	});

	app.run();
});