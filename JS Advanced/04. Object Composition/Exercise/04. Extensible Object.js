function solve() {

	return {

		extend: function (template) {

			Object.keys(template).forEach(key => {

				let value = template[key];

				if (typeof value === 'function') {

					Object.getPrototypeOf(this)[key] = value;
				}
				else {

					this[key] = value;
				}
			});
		}
	};
}

// let obj = solve();

// obj.extend({ extensionMethod: function () { }, extensionProperty: 'someString' });

// console.log(Object.getPrototypeOf(obj));
// console.log(obj);