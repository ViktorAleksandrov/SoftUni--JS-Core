function solve() {

	let [flightInfo, printCommand] = document.getElementById('str').value.split(', ');

	let nameRegex = / ([A-Z][A-Za-z]*(-[A-Z][A-Za-z]*\.)?-[A-Z][A-Za-z]*) /;
	let airportRegex = / ([A-Z]{3})\/([A-Z]{3}) /;
	let flightRegex = / ([A-Z]{1,3}\d{1,5}) /;
	let companyRegex = /- ([A-Z][A-Za-z]*\*[A-Z][A-Za-z]*) /;

	let name = flightInfo.match(nameRegex)[1].replace(/-/g, ' ');
	let fromAirport = flightInfo.match(airportRegex)[1];
	let toAirport = flightInfo.match(airportRegex)[2];
	let flightNumber = flightInfo.match(flightRegex)[1];
	let company = flightInfo.match(companyRegex)[1].replace('*', ' ');

	let resultSpan = document.getElementById('result');

	switch (printCommand) {

		case 'name':
			resultSpan.textContent = `Mr/Ms, ${name}, have a nice flight!`;
			break;
		case 'flight':
			resultSpan.textContent = `Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`;
			break;
		case 'company':
			resultSpan.textContent = `Have a nice flight with ${company}.`;
			break;
		case 'all':
			resultSpan.textContent = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`;
	}
}