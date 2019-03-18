function solve() {

	return (() => {

		let collection = [];
		let size = 0;

		let add = function (element) {

			collection.push(element);
			collection.sort((a, b) => a - b);

			this.size++;
		};

		let remove = function (index) {

			if (index >= 0 && index < collection.length) {

				collection.splice(index, 1);
				this.size--;
			}
		};

		let get = function (index) {

			if (index >= 0 && index < collection.length) {

				return collection[index];
			}
		};

		return { add, remove, get, size };
	})();
}

// let list = solve();

// list.add(1);
// list.add(2);
// list.add(3);
// console.log(list.size);
// list.remove(1);
// console.log(list.get(0));
// console.log(list.size);