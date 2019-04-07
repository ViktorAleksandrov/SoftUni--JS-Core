function attachEvents() {

	const baseUrl = 'https://baas.kinvey.com';
	const appId = 'kid_BJ_Ke8hZg';

	const headers = {
		'Authorization': 'Basic ' + btoa('guest:pass'),
		'Content-Type': 'application/json'
	};

	let $venueInfo = $('#venue-info');

	$('#getVenues').click(onListVenuesBtnClick);

	async function onListVenuesBtnClick() {

		let date = $('#venueDate').val();

		let venuesIds = await $.ajax({

			method: 'POST',
			url: `${baseUrl}/rpc/${appId}/custom/calendar?query=${date}`,
			headers
		});

		for (const id of venuesIds) {

			let venue = await $.ajax({

				url: `${baseUrl}/appdata/${appId}/venues/${id}`,
				headers
			});

			let $venue = buildVenue(venue);
			$venueInfo.append($venue);

			$(`#${venue._id} .info`).click(
				() => $(`#${venue._id} .venue-details`).css('display', 'block'));

			$(`#${venue._id} .purchase`).click(
				() => onPurchaseBtnClick(venue, $(`#${venue._id} .quantity`).val()));
		}
	}

	function onPurchaseBtnClick(venue, qty) {

		$venueInfo.html(`
			<span class="head">Confirm purchase</span>
			<div class="purchase-info">
				<span>${venue.name}</span>
				<span>${qty} x ${venue.price}</span>
				<span>Total: ${qty * venue.price} lv</span>
				<input type="button" value="Confirm">
			</div>
		`);

		$('.purchase-info input').click(() => onConfirmBtnClick(venue._id, qty));
	}

	async function onConfirmBtnClick(venueId, qty) {

		let fragment = await $.ajax({

			method: 'POST',
			url: `${baseUrl}/rpc/${appId}/custom/purchase?venue=${venueId}&qty=${qty}`,
			headers
		});

		$venueInfo.html('You may print this page as your ticket' + fragment.html);
	}

	function buildVenue(venue) {

		return $(`
			<div class="venue" id="${venue._id}">
				<span class="venue-name"><input class="info" type="button" value="More info">${venue.name}</span>
				<div class="venue-details" style="display: none;">
					<table>
						<tr><th>Ticket Price</th><th>Quantity</th><th></th></tr>
						<tr>
							<td class="venue-price">${venue.price} lv</td>
							<td><select class="quantity">
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select></td>
							<td><input class="purchase" type="button" value="Purchase"></td>
						</tr>
					</table>
					<span class="head">Venue description:</span>
					<p class="description">${venue.description}</p>
					<p class="description">Starting time: ${venue.startingHour}</p>
				</div>
			</div>
		`);
	}
}