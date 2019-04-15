handlers.getAllSongs = function () {

	songService.getAllSongs()
		.then(songs => {

			let userId = sessionStorage.getItem('userId');

			songs.forEach(s => s.isCreator = s._acl.creator === userId);

			let otherUsersSongs = songs
				.filter(s => !s.isCreator)
				.sort((a, b) => b.likes - a.likes);

			let currentUserSongs = songs
				.filter(s => s.isCreator)
				.sort((a, b) => b.likes - a.likes || b.listened - a.listened);

			this.songs = otherUsersSongs.concat(currentUserSongs);
			this.isLoggedIn = userService.isLoggedIn();
			this.username = sessionStorage.getItem('username');

			this.loadPartials({

				header: '../views/common/header.hbs',
				song: '../views/songs/song.hbs',
				footer: '../views/common/footer.hbs'

			}).then(function () {

				this.partial('../views/songs/all.hbs');
			});
		});
};

handlers.getMySongs = function () {

	songService.getAllSongs()
		.then(songs => {

			let userId = sessionStorage.getItem('userId');

			this.isLoggedIn = userService.isLoggedIn();
			this.username = sessionStorage.getItem('username');

			songs.forEach(s => s.isCreator = s._acl.creator === userId);

			this.songs = songs
				.filter(s => s.isCreator)
				.sort((a, b) => b.likes - a.likes || b.listened - a.listened);

			this.loadPartials({

				header: '../views/common/header.hbs',
				song: '../views/songs/song.hbs',
				footer: '../views/common/footer.hbs'

			}).then(function () {

				this.partial('../views/songs/my.hbs');
			});
		});
};

handlers.getCreateSong = function () {

	this.isLoggedIn = userService.isLoggedIn();
	this.username = sessionStorage.getItem('username');

	this.loadPartials({

		header: '../views/common/header.hbs',
		footer: '../views/common/footer.hbs'

	}).then(function () {

		this.partial('../views/songs/create.hbs');
	});
};

handlers.createSong = function (context) {

	let title = context.params.title;
	let artist = context.params.artist;
	let imageURL = context.params.imageURL;

	if (title.length >= 6 && artist.length >= 3
		&& (imageURL.startsWith('http://') || imageURL.startsWith('https://'))) {

		let song = {

			title,
			artist,
			imageURL,
			likes: 0,
			listened: 0
		};

		songService.create(song)
			.then(() => {

				notify.showInfo('Song created successfully.');

				context.redirect('#/allSongs');
			});
	}
};

handlers.likeSong = function (context) {

	let songId = context.params.songId;

	songService.getSong(songId)
		.then(song => {

			song.likes = +song.likes + 1;

			songService.like(songId, song)
				.then(() => {

					notify.showInfo('Liked!');

					context.redirect('#/allSongs');
				});
		});
};

handlers.listenSong = function (context) {

	let songId = context.params.songId;

	songService.getSong(songId)
		.then(song => {

			song.listened = +song.listened + 1;

			songService.listened(songId, song)
				.then(() => {

					notify.showInfo(`You just listened ${song.title}`);

					context.redirect('#/allSongs');
				});
		});
};

handlers.removeSong = function (context) {

	let songId = context.params.songId;

	songService.remove(songId)
		.then(() => {

			notify.showInfo('Song removed successfully!');

			context.redirect('#/allSongs');
		});
};