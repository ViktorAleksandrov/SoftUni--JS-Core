function solve() {

	Array.from(document.getElementsByTagName('button')).forEach(button =>

		button.addEventListener('click', () => {

			let previousElement = button.previousElementSibling;
			let radioLockInput = button.parentNode.children[2];

			if (button.textContent === 'Show more' && !radioLockInput.checked) {

				previousElement.style.display = 'inline';
				button.textContent = 'Hide it';

			} else if (button.textContent === 'Hide it' && !radioLockInput.checked) {

				previousElement.style.display = 'none';
				button.textContent = 'Show more';
			}
		})
	);
} 