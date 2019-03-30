class Hotel {

	constructor(name, capacity) {

		this.name = name;
		this.capacity = capacity;
		this.bookings = [];
		this.currentBookingNumber = 1;

		this.single = Math.floor(capacity * 0.5);
		this.double = Math.floor(capacity * 0.3);
		this.maisonette = Math.floor(capacity * 0.2);
	}

	get roomsPricing() {

		return {

			single: 50,
			double: 90,
			maisonette: 135
		};
	}

	get servicesPricing() {

		return {

			food: 10,
			drink: 15,
			housekeeping: 25
		};
	}

	rentARoom(clientName, roomType, nights) {

		if (this[roomType] > 0) {

			let booking = {

				clientName,
				roomType,
				nights,
				roomNumber: this.currentBookingNumber++
			};

			this.bookings.push(booking);

			this[roomType]--;

			return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber - 1}.`;
		}

		let result = `No ${roomType} rooms available!`;

		if (roomType !== 'single' && this.single > 0) {

			result += ` Available single rooms: ${this.single}.`;
		}

		if (roomType !== 'double' && this.double > 0) {

			result += ` Available double rooms: ${this.double}.`;
		}

		if (roomType !== 'maisonette' && this.maisonette > 0) {

			result += ` Available maisonette rooms: ${this.maisonette}.`;
		}

		return result;
	}

	roomService(currentBookingNumber, serviceType) {

		let booking = this.bookings.find(b => b.roomNumber === currentBookingNumber);

		if (!booking) {

			return `The booking ${currentBookingNumber} is invalid.`;
		}

		if (!this.servicesPricing[serviceType]) {

			return `We do not offer ${serviceType} service.`;
		}

		if (!booking.services) {

			booking.services = [];
		}

		booking.services.push(serviceType);

		return `Mr./Mrs. ${booking.clientName}, Your order for ${serviceType} service has been successful.`;
	}

	checkOut(currentBookingNumber) {

		let booking = this.bookings.find(b => b.roomNumber === currentBookingNumber);

		if (!booking) {

			return `The booking ${currentBookingNumber} is invalid.`;
		}

		this.bookings = this.bookings.filter(b => b.roomNumber !== booking.roomNumber);
		this[booking.roomType]++;

		let totalMoney = this.roomsPricing[booking.roomType] * booking.nights;

		let result = `We hope you enjoyed your time here, Mr./Mrs. ${booking.clientName}. The total amount of money you have to pay is `;

		if (!booking.services) {

			return result + `${totalMoney} BGN.`;
		}

		let totalServiceMoney = 0;

		booking.services.forEach(type => totalServiceMoney += this.servicesPricing[type]);

		return result + `${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;
	}

	report() {

		let result = `${this.name.toUpperCase()} DATABASE:\n`;
		result += '-'.repeat(20) + '\n';

		if (this.bookings.length === 0) {

			return result + 'There are currently no bookings.';
		}

		let bookingsInfo = this.bookings.map(booking => {

			let info = `bookingNumber - ${booking.roomNumber}\n`;
			info += `clientName - ${booking.clientName}\n`;
			info += `roomType - ${booking.roomType}\n`;
			info += `nights - ${booking.nights}`;

			if (booking.services) {

				info += `\nservices: ${booking.services.join(', ')}`;
			}

			return info;
		})
			.join('\n' + '-'.repeat(10) + '\n');

		return result + bookingsInfo;
	}
}

// let hotel = new Hotel('HotUni', 4);
// hotel.rentARoom('Peter', 'single', 4);
// hotel.roomService(1, 'drink');
// console.log(hotel.checkOut(1));


// let hotel = new Hotel('HotUni', 10);

// console.log(hotel.rentARoom('Peter', 'single', 4));
// console.log(hotel.rentARoom('Robert', 'double', 4));
// console.log(hotel.rentARoom('Geroge', 'maisonette', 6));


// let hotel = new Hotel('HotUni', 10);

// hotel.rentARoom('Peter', 'single', 4);
// hotel.rentARoom('Robert', 'double', 4);
// hotel.rentARoom('Geroge', 'maisonette', 6);

// console.log(hotel.roomService(3, 'housekeeping'));
// console.log(hotel.roomService(3, 'drink'));
// console.log(hotel.roomService(2, 'room'));


// let hotel = new Hotel('HotUni', 10);

// hotel.rentARoom('Peter', 'single', 4);
// hotel.rentARoom('Robert', 'double', 4);
// hotel.rentARoom('Geroge', 'maisonette', 6);

// hotel.roomService(3, 'housekeeping');
// hotel.roomService(3, 'drink');
// hotel.roomService(2, 'room');

// console.log(hotel.report());