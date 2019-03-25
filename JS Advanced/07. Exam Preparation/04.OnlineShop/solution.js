function onlineShop(selector) {
	let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
	$(selector).html(form);

	let $name = $('.custom-select').on('input', onNameInput);
	let $button = $('#submit').click(onButtonClick);

	function onNameInput() {

		let isEmpty = $name.val() === '';

		$button.attr('disabled', isEmpty);
	}

	function onButtonClick() {

		let $price = $('#price');
		let $quantity = $('#quantity');
		let $capacity = $('#capacity');

		let totalQuantity = +$capacity.val() + +$quantity.val();

		if (totalQuantity <= 150) {

			appendProductToInventory();

			$capacity.val(totalQuantity);

			let $totalPrice = $('#sum');
			$totalPrice.val(+$totalPrice.val() + +$price.val());

			if (+$capacity.val() === 150) {

				$capacity.val('full').addClass('fullCapacity');

				$name.attr('disabled', true);
				$price.attr('disabled', true);
				$quantity.attr('disabled', true);
			}
		}

		$button.attr('disabled', true);

		$name.val('');
		$price.val(1);
		$quantity.val(1);

		function appendProductToInventory() {

			let name = `Product: ${$name.val()} `;
			let price = `Price: ${$price.val()} `;
			let quantity = `Quantity: ${$quantity.val()}`;

			let $product = $('<li>').text(name + price + quantity);

			$('.display').append($product);
		}
	}
}