class SortedList {

	constructor() {

		this.collection = [];
		this.size = 0;
	}

	add(element) {

		this.collection.push(element);
		this.collection.sort((x, y) => x - y);

		this.size++;
	}

	remove(index) {

		if (index >= 0 && index < this.collection.length) {

			this.collection.splice(index, 1);
			this.size--;
		}
	}

	get(index) {

		if (index >= 0 && index < this.collection.length) {

			return this.collection[index];
		}
	}
}