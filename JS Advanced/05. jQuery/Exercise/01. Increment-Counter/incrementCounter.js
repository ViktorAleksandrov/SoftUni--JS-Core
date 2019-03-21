function increment(selector) {

	let textArea = $('<textarea>')
		.addClass('counter')
		.val(0)
		.attr('disabled', true);

	let incrementButton = $('<button>')
		.addClass('btn')
		.attr('id', 'incrementBtn')
		.text('Increment')
		.click(() => textArea.val(+textArea.val() + 1));

	let addButton = $('<button>')
		.addClass('btn')
		.attr('id', 'addBtn')
		.text('Add')
		.click(() => list.append($('<li>').text(textArea.val())));

	let list = $('<ul>').addClass('results');

	$(selector).append(textArea, incrementButton, addButton, list);
}