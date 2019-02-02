function solve() {

	document.getElementById('searchBtn').addEventListener('click', function () {

		Array.from(document.getElementsByClassName('select')).forEach(e => e.classList.remove('select'));

		let inputText = document.getElementById('searchField').value.toLowerCase();

		document.getElementById('searchField').value = '';

		Array.from(document.querySelectorAll('tbody td')).forEach(td => {

			if (td.textContent.toLowerCase().includes(inputText)) {

				td.parentElement.classList.add('select');
			}
		});
	});
}