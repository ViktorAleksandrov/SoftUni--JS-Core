function solve() {

	Array.from(document.getElementsByTagName('button')).forEach(button =>

		button.addEventListener('click', clickFunc)
	);

	let sections = document.getElementsByTagName('section');

	let correntAnswers = ['2013', 'Pesho', 'Nakov'];
	let answersCount = 0;
	let correctAnswersCount = 0;

	function clickFunc(e) {

		Array.from(sections[answersCount].getElementsByTagName("input")).forEach(i => {

			if (i.checked && correntAnswers[answersCount] === i.value) {

				correctAnswersCount++;
			}

		});

		answersCount++;

		if (answersCount < 3) {

			sections[answersCount].style.display = 'block';

		} else {

			let resultElement = document.getElementById("result");

			if (correctAnswersCount === 3) {

				resultElement.textContent = 'You are recognized as top SoftUni fan!';

			} else {

				resultElement.textContent = `You have ${correctAnswersCount} right answers`;
			}
		}

		e.target.removeEventListener('click', clickFunc);
	}
}