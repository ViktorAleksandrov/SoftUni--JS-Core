function attachEvents() {

	const weatherSymbols = {

		'Sunny': '&#x2600',
		'Partly sunny': '&#x26C5',
		'Overcast': '&#x2601',
		'Rain': '&#x2614'
	};

	const degreeSymbol = '&#176';

	const baseUrl = 'https://judgetests.firebaseio.com/';

	$('#submit').click(onGetWeatherButtonClick);

	async function onGetWeatherButtonClick() {

		let $forecast = $('#forecast');

		try {

			let locations = await $.get(baseUrl + 'locations.json');

			let townName = $('#location').val();

			let code = locations.find(town => town.name === townName).code;

			$('#current span').remove();
			$('#upcoming span').remove();

			$forecast.css('display', 'block');

			displayTodayForecast(code);
			displayThreeDayForecast(code);
		}
		catch (error) {

			$forecast.css('display', 'block');
			$forecast.text('Error');
		}
	}

	async function displayTodayForecast(code) {

		let todayForecast = await $.get(baseUrl + `forecast/today/${code}.json`);

		let forecast = todayForecast.forecast;
		let weatherSymbol = weatherSymbols[forecast.condition];

		let $weatherSymbol = createSpanElement('condition symbol', null, weatherSymbol);
		let $townName = createSpanElement('forecast-data', todayForecast.name);

		let temperaturesHtml = `${forecast.low + degreeSymbol}/${forecast.high + degreeSymbol}`;
		let $temperatures = createSpanElement('forecast-data', null, temperaturesHtml);

		let $weatherCondition = createSpanElement('forecast-data', forecast.condition);

		let $todayWeatherInfo = createSpanElement('condition');
		$todayWeatherInfo.append($townName, $temperatures, $weatherCondition);

		$('#current').append($weatherSymbol, $todayWeatherInfo);
	}

	async function displayThreeDayForecast(code) {

		let threeDayForecast = await $.get(baseUrl + `forecast/upcoming/${code}.json`);

		for (const forecast of threeDayForecast.forecast) {

			let weatherSymbol = weatherSymbols[forecast.condition];
			let $weatherSymbol = createSpanElement('symbol', null, weatherSymbol);

			let temperaturesHtml = `${forecast.low + degreeSymbol}/${forecast.high + degreeSymbol}`;
			let $temperatures = createSpanElement('forecast-data', null, temperaturesHtml);

			let $weatherCondition = createSpanElement('forecast-data', forecast.condition);

			let $currentDayWeatherInfo = createSpanElement('upcoming');
			$currentDayWeatherInfo.append($weatherSymbol, $temperatures, $weatherCondition);

			$('#upcoming').append($currentDayWeatherInfo);
		}
	}

	function createSpanElement(className, text, html) {

		let $span = $('<span>').addClass(className);

		if (text) {

			return $span.text(text);
		}
		else if (html) {

			return $span.html(html);
		}

		return $span;
	}
}