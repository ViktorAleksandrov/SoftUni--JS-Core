function addItem() {

	let $newItemText = $('#newItemText');
	let $newItemValue = $('#newItemValue');

	let $option = $('<option>')
		.text($newItemText.val())
		.attr('value', $newItemValue.val());

	$('#menu').append($option);

	$newItemText.val('');
	$newItemValue.val('');
}