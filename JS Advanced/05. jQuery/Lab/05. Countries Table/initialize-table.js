function initializeTable() {

	$('#createLink').click(createCountry);

	addCountryToTable('Bulgaria', 'Sofia');
	addCountryToTable('Germany', 'Berlin');
	addCountryToTable('Russia', 'Moscow');

	fixRowLinks();

	function createCountry() {

		let country = $('#newCountryText').val();
		let capital = $('#newCapitalText').val();

		addCountryToTable(country, capital);

		$('#newCountryText').val('');
		$('#newCapitalText').val('');

		fixRowLinks();
	}

	function addCountryToTable(country, capital) {

		let row = $('<tr>')
			.append($('<td>').text(country))
			.append($('<td>').text(capital))
			.append($('<td>')
				.append($('<a href="#">[Up]</a>').click(moveRowUp))
				.append($('<a href="#">[Down]</a>').click(moveRowDown))
				.append($('<a href="#">[Delete]</a>').click(deleteRow)));

		$('#countriesTable').append(row);
	}

	function moveRowUp() {

		let row = $(this).parent().parent();

		row.insertBefore(row.prev());

		fixRowLinks();
	}

	function moveRowDown() {

		let row = $(this).parent().parent();

		row.insertAfter(row.next());

		fixRowLinks();
	}

	function deleteRow() {

		let row = $(this).parent().parent();

		row.remove();

		fixRowLinks();
	}

	function fixRowLinks() {

		$('a').show();

		let tableRows = $('#countriesTable tr');

		$(tableRows[2]).find('a:contains("Up")').hide();
		$(tableRows[tableRows.length - 1]).find('a:contains("Down")').hide();
	}
}