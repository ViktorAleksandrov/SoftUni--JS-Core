function attachEvents() {

	const baseUrl = 'https://baas.kinvey.com/appdata/kid_HkN6M_UtN/books';

	const headers = {
		'Authorization': 'Basic ' + btoa('guest:guest'),
		'Content-Type': 'application/json'
	};

	let $booksList = $('#booksList');
	let $editTitle = $('#editTitle');
	let $editAuthor = $('#editAuthor');
	let $ediIsbn = $('#editIsbn');

	let allBooks;
	let currentBook;

	loadBooks();

	$('#createBook').click(onCreateBookBtnClick);
	$('#editBook').click(onEditBookBtnClick);

	async function loadBooks() {

		let books = await $.ajax({

			url: baseUrl,
			headers
		});

		$booksList.empty();

		allBooks = books;

		for (const book of books) {

			let $link = $('<a>')
				.text(book.title)
				.attr('href', '#')
				.click(showEditBook);

			let $deleteBtn = $('<button>')
				.text('Delete')
				.click(onDeleteBtnClick);

			let $book = $('<li>')
				.attr('data-id', book._id);

			$book.append($link, $deleteBtn);

			$booksList.append($book);
		}
	}

	async function onCreateBookBtnClick() {

		let book = {

			title: $('#bookTitle').val(),
			author: $('#bookAuthor').val(),
			isbn: $('#isbn').val()
		};

		await $.ajax({

			method: 'POST',
			url: baseUrl,
			headers,
			data: JSON.stringify(book)
		});

		loadBooks();
	}

	async function onEditBookBtnClick() {

		$('.edit').attr('class', 'hidden');

		currentBook.title = $editTitle.val();
		currentBook.author = $editAuthor.val();
		currentBook.isbn = $ediIsbn.val();

		await $.ajax({

			method: 'PUT',
			url: baseUrl + '/' + currentBook._id,
			headers,
			data: JSON.stringify(currentBook)
		});

		loadBooks();
	}

	async function onDeleteBtnClick() {

		let $parent = $(this).parent();

		let bookId = $parent.data('id');

		$parent.remove();

		await $.ajax({

			method: 'DELETE',
			url: baseUrl + '/' + bookId,
			headers
		});
	}

	function showEditBook() {

		$('.hidden').attr('class', 'edit');

		let bookId = $(this).parent().data('id');
		currentBook = allBooks.find(b => b._id === bookId);

		$editTitle.val(currentBook.title);
		$editAuthor.val(currentBook.author);
		$ediIsbn.val(currentBook.isbn);
	}
}