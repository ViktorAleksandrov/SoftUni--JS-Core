function attachEvents() {

	$('#submit').click(onSendButtonClick);
	$('#refresh').click(onRefreshButtonClick);

	function onSendButtonClick() {

		let $author = $('#author');
		let $content = $('#content');

		$.ajax({
			method: 'POST',
			url: 'https://messenger-5b403.firebaseio.com/messenger.json',
			data: JSON.stringify({
				author: $author.val(),
				content: $content.val(),
				timestamp: Date.now()
			})
		});

		$author.val('');
		$content.val('');
	}

	function onRefreshButtonClick() {

		$.ajax({
			url: 'https://messenger-5b403.firebaseio.com/messenger.json',
			success: displayMessages
		});

		function displayMessages(messages) {

			let orderedMessages = Object.values(messages)
				.sort((a, b) => a.timestamp - b.timestamp)
				.map(message => `${message.author}: ${message.content}`)
				.join('\n');

			$('#messages').text(orderedMessages);
		}
	}
}