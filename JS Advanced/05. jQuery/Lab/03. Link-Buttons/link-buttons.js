function attachEvents() {

	$('a').click(addSelectedClass);

	function addSelectedClass() {

		$('.selected').removeClass('selected');
		$(this).addClass('selected');
	}
}