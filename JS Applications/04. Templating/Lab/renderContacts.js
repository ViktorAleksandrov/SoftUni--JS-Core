$(async () => {

	const sourceHtml = await $.get('contactTemplate.hbs');
	const template = Handlebars.compile(sourceHtml);
	const renderedHtml = template({ contacts });

	$('contacts').html(renderedHtml);
});

function showDetails(id) {

	$(`#${id}`).toggle();
}