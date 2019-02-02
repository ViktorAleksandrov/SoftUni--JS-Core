function solve() {

	setTimeout(function () {

		let horizontalMargin = getRandom(1, 81);
		let verticalMargin = getRandom(1, 45);

		let div = document.querySelector('#exercise div');

		div.style.marginLeft = horizontalMargin + '%';
		div.style.marginTop = verticalMargin + 'vh';

		solve();

	}, 2000);

	function getRandom(min, max) {

		return Math.random() * (max - min) + min;
	}
}