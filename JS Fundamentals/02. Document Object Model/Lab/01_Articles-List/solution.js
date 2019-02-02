function solve() {

    let createTitleElement = document.getElementById('createTitle');
    let createContentElement = document.getElementById('createContent');

    let title = createTitleElement.value;
    let content = createContentElement.value;

    if (title !== '' && content !== '') {

        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.textContent = title;
        p.textContent = content;

        let article = document.createElement('article');

        article.appendChild(h3);
        article.appendChild(p);

        let articlesList = document.getElementById('articles');

        articlesList.appendChild(article);
    }

    createTitleElement.value = '';
    createContentElement.value = '';
}