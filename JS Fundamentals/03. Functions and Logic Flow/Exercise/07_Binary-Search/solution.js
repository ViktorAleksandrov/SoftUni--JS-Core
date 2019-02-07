function binarySearch() {

	let array = document.getElementById('arr').value.split(', ').map(n => +n);
	let number = +document.getElementById('num').value;

	let start = 0;
	let stop = array.length - 1;
	let middle = Math.floor((start + stop) / 2);

	while (array[middle] !== number && start < stop) {

		if (number < array[middle]) {

			stop = middle - 1;

		} else {

			start = middle + 1
		}

		middle = Math.floor((start + stop) / 2)
	}

	let resultSpan = document.getElementById('result');

	if (array[middle] === number) {

		resultSpan.textContent = `Found ${number} at index ${middle}`;

	} else {

		resultSpan.textContent = `${number} is not in the array`;
	}
}