function addSticker() {

	let $title = $('.title');
	let $text = $('.content');

	let title = $title.val();
	let text = $text.val();

	if (title && text) {

		let $listItem = $('<li>').addClass('note-content');

		let $anchor = $('<a>').text('x')
			.addClass('button')
			.click(() => $listItem.remove());

		let $heading = $('<h2>').text(title);
		let $line = $('<hr>');
		let $paragraph = $('<p>').text(text);

		$listItem.append($anchor, $heading, $line, $paragraph);

		$('#sticker-list').append($listItem);
	}

	$title.val('');
	$text.val('');
}