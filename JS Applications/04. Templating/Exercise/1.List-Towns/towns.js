function attachEvents() {

	$('#btnLoadTowns').click(onBtnClick);

	function onBtnClick() {

		let $towns = $('#towns');
		let towns = $towns.val().split(', ');

		let sourceHtml = $('#towns-template').html();
		let template = Handlebars.compile(sourceHtml);
		let renderedHtml = template({ towns });

		$('#root').html(renderedHtml);

		$towns.val('');
	}
}