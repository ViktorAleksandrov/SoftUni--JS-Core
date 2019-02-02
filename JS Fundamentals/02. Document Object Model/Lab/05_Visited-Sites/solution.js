function solve() {

	let anchors = document.querySelectorAll('#exercise a');

	for (let anchor of anchors) {

		anchor.addEventListener('click', () => {

			let span = anchor.nextElementSibling;

			let visitingCount = Number(span.textContent.split(' ')[1]) + 1;

			span.textContent = `Visited: ${visitingCount} times`;
		});
	}
}