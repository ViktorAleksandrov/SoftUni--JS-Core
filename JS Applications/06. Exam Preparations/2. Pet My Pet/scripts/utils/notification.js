const notification = (() => {

	$(document).on({

		ajaxStart: () => $('#loadingBox').show(),
		ajaxStop: () => $('#loadingBox').fadeOut(),
	});

	function showSuccess(message) {

		let infoBox = $('#infoBox');

		infoBox.find('span').text(message);

		infoBox.fadeIn();
		setTimeout(() => infoBox.fadeOut(), 3000);

		infoBox.click(() => infoBox.fadeOut());
	}

	function showError(message, isServerError = false) {

		if (isServerError) {

			message = 'Error: ' + message;
		}

		let errorBox = $('#errorBox');

		errorBox.find('span').text(message);

		errorBox.fadeIn();

		errorBox.click(() => errorBox.fadeOut());
	}

	function showResponseError(err) {

		showError(err.responseJSON.description, true);
	}

	return { showSuccess, showError, showResponseError };
})();