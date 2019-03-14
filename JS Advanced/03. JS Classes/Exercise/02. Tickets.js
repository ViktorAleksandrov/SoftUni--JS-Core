function solve(arr, sortingCriterion) {

	class Ticket {

		constructor(destination, price, status) {

			this.destination = destination;
			this.price = price;
			this.status = status;
		}
	}

	let tickets = [];

	arr.forEach(ticketData => {

		let [destination, price, status] = ticketData.split('|');

		tickets.push(new Ticket(destination, +price, status));
	});

	switch (sortingCriterion) {

		case 'destination':
			tickets.sort((x, y) => x.destination.localeCompare(y.destination));
			break;
		case 'price':
			tickets.sort((x, y) => x.price - y.price);
			break;
		case 'status':
			tickets.sort((x, y) => x.status.localeCompare(y.status));
	}

	return tickets;
}

// console.log(solve(['Philadelphia|94.20|available',
// 	'New York City|95.99|available',
// 	'New York City|95.99|sold',
// 	'Boston|126.20|departed'],
// 	'destination'));

// console.log(solve(['Philadelphia|94.20|available',
// 	'New York City|95.99|available',
// 	'New York City|95.99|sold',
// 	'Boston|126.20|departed'],
// 	'status'));