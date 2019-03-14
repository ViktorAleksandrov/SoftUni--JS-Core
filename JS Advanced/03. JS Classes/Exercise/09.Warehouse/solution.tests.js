// const assert = require('chai').assert;
// const Warehouse = require('./solution');

describe('Warehouse', function () {

	let warehouse;

	beforeEach(function () {

		warehouse = new Warehouse(10);
	});

	describe('constructor', function () {

		it('should not throw, when initialized with positive number', function () {

			assert.equal(warehouse.capacity, 10);
		});

		it('should throw, when initialized with negative number', function () {

			assert.throw(() => new Warehouse(-1), 'Invalid given warehouse space');
		});

		it('should throw, when initialized with 0', function () {

			assert.throw(() => new Warehouse(0), 'Invalid given warehouse space');
		});

		it('should throw, when initialized with string', function () {

			assert.throw(() => new Warehouse('1'), 'Invalid given warehouse space');
		});
	});

	describe('addProduct', function () {

		it('should throw, when there is no place for the current product', function () {

			assert.throw(() => warehouse.addProduct('Food', 'meat', 20), 'There is not enough space or the warehouse is already full');
		});

		it('should return product with the given type with already added products', function () {

			let productType = warehouse.addProduct('Food', 'meat', 5);

			assert.equal(productType.meat, 5);
		});

		it('should return product with the given type when quantity is equal to available space', function () {

			let productType = warehouse.addProduct('Food', 'meat', 10);

			assert.equal(productType.meat, 10);
		});

		it('should return product with summed quantity when is added more than 1 time', function () {

			warehouse.addProduct('Food', 'meat', 5);
			let product = warehouse.addProduct('Food', 'meat', 2);

			assert.equal(product.meat, 7);
		});
	});

	describe('orderProducts', function () {

		it('should return first product when ordered in descending order by the quantity', function () {

			warehouse.addProduct('Food', 'meat', 2);
			warehouse.addProduct('Food', 'fruits', 5);

			let firstProductName = Object.keys(warehouse.orderProducts('Food'))[0];

			assert.equal(warehouse.availableProducts.Food[firstProductName], 5);
		});
	});

	describe('occupiedCapacity', function () {

		it('should return 0 when there are no available products', function () {

			assert.equal(warehouse.occupiedCapacity(), 0);
		});

		it('should return correct value when there are available products', function () {

			warehouse.addProduct('Food', 'fruits', 5);

			assert.equal(warehouse.occupiedCapacity(), 5);
		});
	});

	describe('revision', function () {

		it('should return The warehouse is empty when there are no available products', function () {

			assert.equal(warehouse.revision(), 'The warehouse is empty');
		});

		it('should return correct value when there are available products', function () {

			warehouse.addProduct('Food', 'fruits', 5);
			warehouse.addProduct('Drink', 'water', 3);

			let expected = 'Product type - [Food]\n- fruits 5\nProduct type - [Drink]\n- water 3';

			assert.equal(warehouse.revision(), expected);
		});
	});

	describe('scrapeAProduct', function () {

		it('should return scraped product with reduced quantity when quantity is enough', function () {

			warehouse.addProduct('Food', 'fruits', 5);

			let productType = warehouse.scrapeAProduct('fruits', 3);

			assert.equal(productType.fruits, 2);
		});

		it('should return scraped product with 0 quantity when quantity is not enough', function () {

			warehouse.addProduct('Food', 'fruits', 5);

			let productType = warehouse.scrapeAProduct('fruits', 8);

			assert.equal(productType.fruits, 0);
		});

		it('should throw when product does not exist', function () {

			warehouse.addProduct('Food', 'fruits', 5);

			assert.throw(() => warehouse.scrapeAProduct('meat', 2), 'meat do not exists');
		});
	});
});