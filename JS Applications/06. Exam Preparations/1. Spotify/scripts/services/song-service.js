const songService = (() => {

	function getAllSongs() {

		return kinvey.get('appdata', 'songs', 'kinvey');
	}

	function getSong(songId) {

		return kinvey.get('appdata', `songs/${songId}`, 'kinvey');
	}

	function create(song) {

		return kinvey.post('appdata', 'songs', 'kinvey', song);
	}

	function like(songId, song) {

		return kinvey.update('appdata', `songs/${songId}`, 'kinvey', song);
	}

	function listened(songId, song) {

		return kinvey.update('appdata', `songs/${songId}`, 'kinvey', song);
	}

	function remove(songId) {

		return kinvey.remove('appdata', `songs/${songId}`, 'kinvey');
	}

	return { getAllSongs, getSong, create, like, listened, remove };
})();