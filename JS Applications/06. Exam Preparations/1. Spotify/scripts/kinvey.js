const kinvey = (() => {

	const baseUrl = 'https://baas.kinvey.com/';
	const appKey = 'kid_HkN6M_UtN';
	const appSecret = 'da59f37e10304e71932e2c954a7154b8';

	function makeAuthHeader(authType) {

		if (authType === 'basic') {

			return { Authorization: `Basic ${btoa(appKey + ':' + appSecret)}` };
		}
		else {

			return { Authorization: `Kinvey ${sessionStorage.getItem('authtoken')}` };
		}
	}

	function makeRequest(method, module, endpoint, authType) {

		return {
			method,
			url: baseUrl + module + '/' + appKey + '/' + endpoint,
			headers: makeAuthHeader(authType)
		};
	}

	function get(module, endpoint, authType) {

		return $.ajax(makeRequest('GET', module, endpoint, authType));
	}

	function post(module, endpoint, authType, data) {

		let request = makeRequest('POST', module, endpoint, authType);
		request.data = data;

		return $.ajax(request);
	}

	function update(module, endpoint, authType, data) {

		let request = makeRequest('PUT', module, endpoint, authType);
		request.data = data;

		return $.ajax(request);
	}

	function remove(module, endpoint, authType) {

		return $.ajax(makeRequest('DELETE', module, endpoint, authType));
	}

	return { get, post, update, remove };
})();