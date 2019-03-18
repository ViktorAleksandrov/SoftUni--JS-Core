function solve(arr) {

	let rectangles = arr.map(rect => {

		return {

			width: rect[0],
			height: rect[1],
			area: function () { return this.width * this.height; },
			compareTo: function (other) {

				return other.area() - this.area() || other.width - this.width;
			}
		};
	});

	return rectangles.sort((x, y) => x.compareTo(y));
}

// console.log(solve([[10, 5], [5, 12]]));
// console.log(solve([[10, 5], [3, 20], [5, 12]]));