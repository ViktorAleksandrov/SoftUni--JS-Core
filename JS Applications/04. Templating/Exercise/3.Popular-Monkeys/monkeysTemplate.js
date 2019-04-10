$(() => {

	let template = $('#monkey-template').html();
	let compiledTemplate = Handlebars.compile(template);
	let htmlResult = compiledTemplate({ monkeys });

	$('.monkeys').html(htmlResult);
});

function showInfo(id) {

	$(`#${id}`).toggle();
}