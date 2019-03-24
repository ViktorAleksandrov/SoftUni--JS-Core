function attachGradientEvents() {

	$('#gradient').mousemove(e => $('#result').text(Math.floor(e.offsetX / 3) + '%'));
}