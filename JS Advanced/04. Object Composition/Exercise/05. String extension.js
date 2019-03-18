(() => {

	String.prototype.ensureStart = function (str) {

		return this.startsWith(str) ? this.toString() : str + this;
	};

	String.prototype.ensureEnd = function (str) {

		return this.endsWith(str) ? this.toString() : this + str;
	};

	String.prototype.isEmpty = function () {

		return this.length === 0;
	};

	String.prototype.truncate = function (n) {

		if (n < 4) {

			return '.'.repeat(n);
		}

		if (n >= this.length) {

			return this.toString();
		}

		let lastSpaceIndex = this.slice(0, n - 2).lastIndexOf(' ');

		let length = lastSpaceIndex === -1 ? n - 3 : lastSpaceIndex;

		return this.slice(0, length) + '...';
	};

	String.format = function (string, ...params) {

		for (let index = 0; index < params.length; index++) {

			string = string.replace(`{${index}}`, params[index]);
		}

		return string;
	};
})();

// let str = "my string";
// str = str.ensureStart("my");
// console.log(str);
// str = str.ensureStart("hello ");
// console.log(str);
// // str = str.ensureEnd(" 2");
// str = str.truncate(16);
// console.log(str);
// str = str.truncate(14);
// console.log(str);
// str = str.truncate(8);
// console.log(str);
// str = str.truncate(4);
// console.log(str);
// str = str.truncate(2);
// console.log(str);
// str = String.format("The {0} {1} fox", "quick", "brown");
// console.log(str);
// str = String.format("jumps {0} {1}", "dog");
// console.log(str);
// // str = '';
// console.log(str.isEmpty());