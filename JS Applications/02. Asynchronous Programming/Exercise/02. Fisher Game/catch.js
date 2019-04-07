function attachEvents() {

	const baseUrl = 'https://baas.kinvey.com/appdata/kid_Hk8zkGUtV/biggestCatches';

	const headers = {
		'Authorization': 'Basic ' + btoa('guest:guest'),
		'Content-Type': 'application/json'
	};

	let $catches = $('#catches');

	$('.load').click(onLoadButtonClick);
	$('.add').click(onAddButtonClick);

	async function onLoadButtonClick() {

		let catches = await $.ajax({

			url: baseUrl,
			headers
		});

		$catches.empty();

		catches.forEach(c => createCatchDiv(c));
	}

	function onAddButtonClick() {

		$.ajax({
			method: 'POST',
			url: baseUrl,
			headers,
			data: getCatchData('#addForm input')
		});
	}

	function onUpdateButtonClick() {

		let catchId = $(this).parent().data('id');

		$.ajax({
			method: 'PUT',
			url: baseUrl + '/' + catchId,
			headers,
			data: getCatchData(`div[data-id=${catchId}] input`)
		});
	}

	function onDeleteButtonClick() {

		let $parent = $(this).parent();

		let catchId = $parent.data('id');

		$parent.remove();

		$.ajax({
			method: 'DELETE',
			url: baseUrl + '/' + catchId,
			headers
		});
	}

	function getCatchData(selector) {

		let currentCatch = {};

		$(selector).each((index, element) => {

			let value = +element.value ? +element.value : element.value;

			currentCatch[element.className] = value;
		});

		return JSON.stringify(currentCatch);
	}

	function createCatchDiv(currentCatch) {

		let $anglerLabel = createElement('<label>', 'Angler');
		let $anglerInput = createElement('<input>', null, 'angler', currentCatch.angler, 'text');

		let $weightLabel = createElement('<label>', 'Weight');
		let $weightInput = createElement('<input>', null, 'weight', currentCatch.weight, 'number');

		let $speciesLabel = createElement('<label>', 'Species');
		let $speciesInput = createElement('<input>', null, 'species', currentCatch.species, 'text');

		let $locationLabel = createElement('<label>', 'Location');
		let $locationInput = createElement('<input>', null, 'location', currentCatch.location, 'text');

		let $baitLabel = createElement('<label>', 'Bait');
		let $baitInput = createElement('<input>', null, 'bait', currentCatch.bait, 'text');

		let $captureLabel = createElement('<label>', 'Capture');
		let $captureInput = createElement('<input>', null, 'captureTime', currentCatch.captureTime, 'number');

		let $updateButton = createElement('<button>', 'Update', 'update')
			.click(onUpdateButtonClick);

		let $deleteButton = createElement('<button>', 'Delete', 'delete')
			.click(onDeleteButtonClick);

		let $catch = createElement('<div>', null, 'catch', null, null, currentCatch._id);

		$catch.append(
			$anglerLabel,
			$anglerInput,
			$weightLabel,
			$weightInput,
			$speciesLabel,
			$speciesInput,
			$locationLabel,
			$locationInput,
			$baitLabel,
			$baitInput,
			$captureLabel,
			$captureInput,
			$updateButton,
			$deleteButton
		);

		$catches.append($catch);
	}

	function createElement(elementType, text, className, value, inputType, catchId) {

		let $element = $(elementType);

		if (text) {

			$element.text(text);
		}
		else if (value && inputType) {

			$element.val(value).attr('type', inputType);
		}

		if (className) {

			$element.addClass(className);

			if (catchId) {

				$element.attr('data-id', catchId);
			}
		}

		return $element;
	}
}