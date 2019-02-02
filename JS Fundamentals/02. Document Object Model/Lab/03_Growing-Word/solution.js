function solve() {

	let paragraphStyle = document.querySelector('#exercise p').style;
	let colors = ['blue', 'green', 'red'];
	let colorCount = 0;
	let clickCount = 1;

	document.querySelector('button').onclick = () => {

		paragraphStyle.color = colors[colorCount];
		paragraphStyle.fontSize = clickCount * 2 + 'px';

		colorCount = (colorCount + 1) % colors.length;
		clickCount++;
	};
}