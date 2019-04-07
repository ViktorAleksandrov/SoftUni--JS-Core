function attachEvents() {

	const baseUrl = 'https://baas.kinvey.com/appdata/kid_SyfZZPXKN/';
	const username = 'peter';
	const password = 'p';
	const base64auth = btoa(`${username}:${password}`);
	const authHeader = { Authorization: 'Basic ' + base64auth };

	let $posts = $('#posts');

	$('#btnLoadPosts').click(onLoadPostsButtonClick);
	$('#btnViewPost').click(onViewPostsButtonClick);

	function onLoadPostsButtonClick() {

		$.ajax({
			url: baseUrl + 'posts',
			headers: authHeader
		})
			.then(displayPosts)
			.catch(displayError);

		function displayPosts(posts) {

			$posts.empty();

			posts.forEach(post => {

				let $option = $('<option>')
					.text(post.title)
					.val(post._id);

				$posts.append($option);
			});
		}
	}

	function onViewPostsButtonClick() {

		let selectedPostId = $posts.val();

		if (selectedPostId) {

			let requestPost = $.ajax({

				url: baseUrl + 'posts/' + selectedPostId,
				headers: authHeader
			});

			let requestComments = $.ajax({

				url: baseUrl + `comments?query={"post_id":"${selectedPostId}"}`,
				headers: authHeader
			});

			Promise.all([requestPost, requestComments])
				.then(displayPostWithComments)
				.catch(displayError);
		}
	}

	function displayPostWithComments([post, comments]) {

		$('#post-title').text(post.title);
		$('#post-body').text(post.body);
		let $comments = $('#post-comments').empty();

		comments.forEach(comment => {

			let $comment = $('<li>').text(comment.text);

			$comments.append($comment);
		});
	}

	function displayError(err) {

		let $error = $('<div>')
			.text(`Error: ${err.status} (${err.statusText})`);

		$('body').prepend($error);

		setTimeout(() => $error.fadeOut(() => $error.remove()), 3000);
	}
}