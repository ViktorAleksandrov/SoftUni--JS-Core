function validateRequest(request) {

	const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
	const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

	const uriRegex = /^([a-zA-Z\d.]+|\*)$/;
	const messageRegex = /^[^<>\\&'"]*$/;

	const errorTemplate = 'Invalid request header: Invalid ';

	if (!request['method'] || !validMethods.includes(request.method)) {

		throw new Error(errorTemplate + 'Method');
	}

	if (!request['uri'] || !uriRegex.test(request.uri)) {

		throw new Error(errorTemplate + 'URI');
	}

	if (!request['version'] || !validVersions.includes(request.version)) {

		throw new Error(errorTemplate + 'Version');
	}

	if (!request.hasOwnProperty('message') || !messageRegex.test(request.message)) {

		throw new Error(errorTemplate + 'Message');
	}

	return request;
}

// console.log(validateRequest({
// 	method: 'GET',
// 	uri: 'svn.public.catalog',
// 	version: 'HTTP/1.1',
// 	message: ''
// }));

// console.log(validateRequest({
// 	method: 'OPTIONS',
// 	uri: 'git.master',
// 	version: 'HTTP/1.1',
// 	message: '-recursive'
// }));

// console.log(validateRequest({
// 	method: 'POST',
// 	uri: 'home.bash',
// 	message: 'rm -rf /*'
// }));