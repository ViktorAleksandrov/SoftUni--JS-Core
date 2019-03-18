function solve() {

	return (() => {

		let reports = [];
		let id = 0;
		let currentSelector;

		let report = (author, description, reproducible, severity) => {

			reports.push({

				ID: id++,
				author,
				description,
				reproducible,
				severity,
				status: 'Open'
			});

			if (currentSelector) {

				createHtml();
			}
		};

		let setStatus = (id, newStatus) => {

			reports.find(report => report.ID === id).status = newStatus;

			if (currentSelector) {

				createHtml();
			}
		};

		let remove = id => {

			reports = reports.filter(report => report.ID !== id);

			if (currentSelector) {

				createHtml();
			}
		};

		let sort = (method = 'ID') => {

			switch (method) {

				case 'ID':
					reports.sort((a, b) => a.ID - b.ID);
					break;

				case 'author':
					reports.sort((a, b) => a.author.localeCompare(b.author));
					break;

				case 'severity':
					reports.sort((a, b) => a.severity - b.severity);
			}

			if (currentSelector) {

				createHtml();
			}
		};

		let output = selector => currentSelector = selector;

		function createHtml() {

			let contentDiv = document.querySelector(currentSelector);
			contentDiv.innerHTML = '';

			reports.forEach(report => {

				let descriptionParagraph = createElement('p', undefined, report.description);
				let descriptionDiv = createElement('div', 'body');
				descriptionDiv.appendChild(descriptionParagraph);

				let authorSpan = createElement('span', 'author', `Submitted by: ${report.author}`);
				let statusSpan = createElement('span', 'status', `${report.status} | ${report.severity}`);
				let titleDiv = createElement('div', 'title');
				titleDiv.appendChild(authorSpan);
				titleDiv.appendChild(statusSpan);

				let reportDiv = createElement('div', 'report', undefined, `report_${report.ID}`);
				reportDiv.appendChild(descriptionDiv);
				reportDiv.appendChild(titleDiv);

				contentDiv.appendChild(reportDiv);
			});
		}

		function createElement(elementType, className, textContent, id) {

			let element = document.createElement(elementType);

			if (className) {

				element.classList.add(className);
			}

			if (textContent) {

				element.textContent = textContent;
			}

			if (id) {

				element.id = id;
			}

			return element;
		}

		return { report, setStatus, remove, sort, output };
	})();
}

// let bugTracker = solve();

// bugTracker.output('#content');
// bugTracker.report('az', 'idat', false, 1);
// bugTracker.report('vik', 'a ne ve', true, 3);
// bugTracker.report('kostov', 'yeee', false, 0);
// bugTracker.report('kiwi', 'judge rip', true, 5);
// // bugTracker.setStatus(1, 'Closed');
// // bugTracker.remove(0);
// // bugTracker.sort('ID');
// bugTracker.sort('author');
// // bugTracker.sort('severity');