function loadRepos() {

	$('#repos').empty();

	let username = $('#username').val();

	let url = `https://api.github.com/users/${username}/repos`;

	$.ajax({
		url,
		success: displayRepos,
		error: displayError
	});

	function displayRepos(repos) {

		for (const repo of repos) {

			let link = $('<a>')
				.text(repo.full_name)
				.attr('href', repo.html_url);

			let $repo = $('<li>').append(link);

			$('#repos').append($repo);
		}
	}

	function displayError(err) {

		$('#repos').append($('<li>Error</li>'));
	}
}