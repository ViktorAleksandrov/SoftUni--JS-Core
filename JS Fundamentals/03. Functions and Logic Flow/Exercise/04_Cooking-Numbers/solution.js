function solve() {

	Array.from(document.getElementsByTagName('button')).forEach(button =>

		button.addEventListener('click', cookNumbers)
	);

	let output = document.querySelector('#output');

	let operations = {

		'chop': x => x / 2,
		'dice': x => Math.sqrt(x),
		'spice': x => x + 1,
		'bake': x => x * 3,
		'fillet': x => x * 0.8
	};

	function cookNumbers() {

		let command = this.textContent.toLowerCase();

		let number = +output.textContent || +document.querySelector('input').value;

		output.textContent = operations[command](number);
	}
}