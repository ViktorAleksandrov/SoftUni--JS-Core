function subsum(arr, startIndex, endIndex) {

	if (!Array.isArray(arr)) {

		return NaN;
	}

	if (arr.length === 0) {

		return 0;
	}

	startIndex = Math.max(0, startIndex);

	return arr
		.slice(startIndex, ++endIndex)
		.reduce((x, y) => +x + +y);
}

// console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));
// console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
// console.log(subsum([10, 'twenty', 30, 40], 0, 2));
// console.log(subsum([], 1, 2));
// console.log(subsum('text', 0, 2));