const userService = (() => {

	function isLoggedIn() {

		return sessionStorage.getItem('authtoken') !== null;
	}

	function saveSession(res) {

		sessionStorage.setItem('authtoken', res._kmd.authtoken);
		sessionStorage.setItem('username', res.username);
		sessionStorage.setItem('userId', res._id);
	}

	function register(username, password) {

		return kinvey.post('user', '', 'basic', { username, password });
	}

	function login(username, password) {

		return kinvey.post('user', 'login', 'basic', { username, password });
	}

	function logout() {

		return kinvey.post('user', '_logout', 'kinvey');
	}

	return { isLoggedIn, saveSession, register, login, logout };
})();