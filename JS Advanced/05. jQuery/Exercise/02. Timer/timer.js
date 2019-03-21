function timer() {

	$('#start-timer').click(startTimer);
	$('#stop-timer').click(stopTimer);

	let totalSeconds = 0;
	let isWorking = false;
	let timerId;

	function startTimer() {

		if (!isWorking) {

			timerId = setInterval(step, 1000);
			isWorking = true;
		}
	}

	function stopTimer() {

		clearInterval(timerId);
		isWorking = false;
	}

	function step() {

		totalSeconds++;

		$('#hours').text(('0' + Math.trunc(totalSeconds / 3600)).slice(-2));
		$('#minutes').text(('0' + Math.trunc((totalSeconds / 60) % 60)).slice(-2));
		$('#seconds').text(('0' + Math.trunc(totalSeconds % 60)).slice(-2));
	}
}