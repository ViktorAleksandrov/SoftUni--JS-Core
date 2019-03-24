function attachEventsListeners() {

	$('#convert').click(() => {

		let unitsRatioToMeter = {

			km: 1000,
			m: 1,
			cm: 0.01,
			mm: 0.001,
			mi: 1609.34,
			yrd: 0.9144,
			ft: 0.3048,
			in: 0.0254
		};

		let inputUnit = $('#inputUnits').val();
		let outputUnit = $('#outputUnits').val();

		let inputRatio = unitsRatioToMeter[inputUnit];
		let outputRatio = unitsRatioToMeter[outputUnit];

		let inputUnitValue = $('#inputDistance').val();

		let result = inputUnitValue * (inputRatio / outputRatio);

		$('#outputDistance').val(result);
	});
}