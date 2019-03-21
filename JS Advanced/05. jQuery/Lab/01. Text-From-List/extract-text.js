function extractText() {

	$('#result').text($('li').toArray().map(li => li.textContent).join(', '));
}
