function search() {

	let searchedText = $('#searchText').val();

	$('li').css('font-weight', 'normal');

	let towns = $(`li:contains(${searchedText})`).css('font-weight', 'bold');

	$('#result').text(`${towns.length} matches found.`);
}