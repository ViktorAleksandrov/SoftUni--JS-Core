function attachEventsListeners() {

	$('input[type=button]').click(onButtonsClick);

	function onButtonsClick() {

		let unitsRatioToSecond = {

			days: 86400,
			hours: 3600,
			minutes: 60,
			seconds: 1
		};

		let id = $(this).attr('id').replace('Btn', '');

		let unitValue = $(`#${id}`).val();

		let seconds = unitsRatioToSecond[id] * unitValue;

		$('#days').val(seconds / unitsRatioToSecond.days);
		$('#hours').val(seconds / unitsRatioToSecond.hours);
		$('#minutes').val(seconds / unitsRatioToSecond.minutes);
		$('#seconds').val(seconds);
	}
}