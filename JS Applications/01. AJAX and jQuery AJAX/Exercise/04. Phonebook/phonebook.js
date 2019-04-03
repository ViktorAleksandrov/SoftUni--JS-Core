function attachEvents() {

	const baseUrl = 'https://phonebook-nakov.firebaseio.com/phonebook';

	let $phonebook = $('#phonebook');

	$('#btnLoad').click(loadContacts);
	$('#btnCreate').click(createContacts);

	function loadContacts() {

		$phonebook.empty();

		$.ajax({
			url: baseUrl + '.json',
			success: onContactsLoad
		});

		function onContactsLoad(contacts) {

			for (const key in contacts) {

				const contact = contacts[key];

				let $deleteButton = $('<button>')
					.text('Delete')
					.click(onDeleteButtonClick.bind(this, key));

				let $contact = $('<li>')
					.text(`${contact.person}: ${contact.phone} `)
					.append($deleteButton);

				$phonebook.append($contact);
			}

			function onDeleteButtonClick(key) {

				$.ajax({
					method: 'DELETE',
					url: `${baseUrl}/${key}.json`,
					success: loadContacts
				});
			}
		}
	}

	function createContacts() {

		let $person = $('#person');
		let $phone = $('#phone');

		let newContactJSON = JSON.stringify({

			person: $person.val(),
			phone: $phone.val()
		});

		$.ajax({
			method: 'POST',
			url: baseUrl + '.json',
			data: newContactJSON,
			success: loadContacts
		});

		$person.val('');
		$phone.val('');
	}
}