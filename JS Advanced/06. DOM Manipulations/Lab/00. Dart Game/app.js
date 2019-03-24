function dart() {

	const indices = {

		firstLayer: 1,
		secondLayer: 2,
		thirdLayer: 3,
		fourthLayer: 4,
		fifthLayer: 5,
		sixthLayer: 6
	};

	let isTurnOnHome = true;

	let $playBoard = $('#playBoard').on('click', 'div', onPlayBoardClick);

	function onPlayBoardClick(e) {

		e.stopPropagation();

		let turnPoints = +$(`tbody tr:nth-child(${indices[e.target.id]}) td:last`)
			.text()
			.split(' ')[0];

		playTurn(turnPoints);
	}

	function playTurn(turnPoints) {

		let playerOnTurn = isTurnOnHome ? 'Home' : 'Away';

		let $points = $(`#${playerOnTurn} p:first`);

		$points.text(+$points.text() + turnPoints);

		$('#turns p:first').text(`Turn on ${isTurnOnHome ? 'Away' : 'Home'}`);
		$('#turns p:last').text(`Next is ${playerOnTurn}`);

		if ($points.text() >= 100) {

			$playBoard.off('click');

			$('#Home p:last').css('background', isTurnOnHome ? 'green' : 'red');
			$('#Away p:last').css('background', isTurnOnHome ? 'red' : 'green');
		}

		isTurnOnHome = !isTurnOnHome;
	}
}