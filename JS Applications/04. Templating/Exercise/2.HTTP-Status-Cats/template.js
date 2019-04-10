$(() => {
	renderCatTemplate();

	function renderCatTemplate() {

		let template = $('#cat-template').html();
		let compiledTemplate = Handlebars.compile(template);
		let htmlResult = compiledTemplate({ cats });

		$('#allCats').html(htmlResult);
	}
});

function showStatusCodeInfo(id) {

	let $id = $(`#${id}`).toggle();

	let $btn = $id.prev();

	let isShowBtn = $btn.text().startsWith('Show');

	$btn.text(isShowBtn ? 'Hide status code' : 'Show status code');
}