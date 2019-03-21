function attachEvents() {

	$('li').click(selectTown);
	$('button').click(printTowns);

	function selectTown() {

		let li = $(this);

		if (li.attr('data-selected')) {

			li.removeAttr('data-selected')
				.css('background', '');
		}
		else {

			li.attr('data-selected', 'true')
				.css('background', '#DDD');
		}
	}

	function printTowns() {

		let selectedTowns = $('li[data-selected=true]')
			.toArray()
			.map(li => li.textContent)
			.join(', ');

		$('#selectedTowns').text(selectedTowns);
	}
}