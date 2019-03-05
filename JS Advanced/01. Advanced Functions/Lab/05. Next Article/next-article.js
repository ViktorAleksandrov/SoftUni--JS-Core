function getArticleGenerator(articles) {

	let contentDiv = document.getElementById('content');

	return () => {

		if (articles.length) {

			let article = document.createElement('article');
			article.textContent = articles.shift();

			contentDiv.appendChild(article);
		}
	};
}
