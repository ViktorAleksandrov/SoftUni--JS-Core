/*let Extensible = */(function () {

	let idCounter = 0;

	return class Extensible {

		constructor() {

			this.id = idCounter++;
		}

		extend(template) {

			Object.keys(template).forEach(key => {

				if (typeof template[key] === 'function') {

					Extensible.prototype[key] = template[key];
				}
				else {

					this[key] = template[key];
				}
			});
		}
	};
})();

// let obj1 = new Extensible();
// let obj2 = new Extensible();
// let obj3 = new Extensible();

// console.log(obj1.id);
// console.log(obj2.id);
// console.log(obj3.id);

// obj1.extend({ extensionMethod: function () { }, extensionProperty: 'someString' });
// console.log();