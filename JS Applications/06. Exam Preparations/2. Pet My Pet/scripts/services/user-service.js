const userService = (() => {

	function register(username, password) {

		return kinvey.post('user', '', 'basic', { username, password });
	}

	function login(username, password) {

		return kinvey.post('user', 'login', 'basic', { username, password });
	}

	function logout() {

		return kinvey.post('user', '_logout', 'kinvey');
	}

	function saveSession(userInfo) {

		sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
		sessionStorage.setItem('username', userInfo.username);
		sessionStorage.setItem('userId', userInfo._id);
	}

	function isLoggedIn() {

		return sessionStorage.getItem('authtoken') !== null;
	}

	return { register, login, logout, saveSession, isLoggedIn };
})();