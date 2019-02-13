function solve() {

	let inputArr = JSON.parse(document.getElementById('arr').value);

	let shelfs = [];

	inputArr.forEach(string => {

		if (string.includes('->')) {

			let parts = string.split(' -> ');

			let id = parts[0];

			if (shelfs.every(x => x.id !== id)) {

				let genre = parts[1];

				shelfs.push({ id: id, genre: genre, books: [] });
			}

		} else {

			let parts = string.split(', ');

			let genre = parts[1];

			let shelf = shelfs.find(x => x.genre === genre);

			if (shelf) {

				let book = parts[0];

				shelf.books.push(book);
			}
		}
	});

	shelfs.sort((a, b) => b.books.length - a.books.length);

	displayShelfs();

	function displayShelfs() {

		let resultSpan = document.getElementById('result');

		shelfs.forEach(shelf => {

			let paragraph = document.createElement('p');

			paragraph.textContent = `${shelf.id} ${shelf.genre}: ${shelf.books.length}`;

			resultSpan.appendChild(paragraph);

			shelf.books.sort().forEach(book => {

				let p = document.createElement('p');

				p.textContent = `--> ${book}`;

				resultSpan.appendChild(p);
			});
		});
	}
}