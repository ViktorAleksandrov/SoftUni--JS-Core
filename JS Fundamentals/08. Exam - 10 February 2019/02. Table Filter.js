function solve(matrix, command) {

	let [commandName, header, value] = command.split(' ');

	let headerIndex = matrix[0].indexOf(header);

	switch (commandName) {

		case 'hide':
			matrix.forEach(row => row.splice(headerIndex, 1));
			break;

		case 'sort':
			let headersRowForSort = matrix.shift();
			matrix.sort((x, y) => x[headerIndex].localeCompare(y[headerIndex]));
			matrix.unshift(headersRowForSort);
			break;

		case 'filter':
			let headersRowForFilter = matrix.shift();
			matrix = matrix.filter(row => row[headerIndex] === value);
			matrix.unshift(headersRowForFilter);
	}

	matrix.forEach(row => console.log(row.join(' | ')));
}

// solve([
// 	['name', 'age', 'grade'],
// 	['Peter', '25', '5.00'],
// 	['George', '34', '6.00'],
// 	['Marry', '28', '5.49']
// ], 'sort name');

// solve([
// 	['firstName', 'age', 'grade', 'course'],
// 	['Peter', '25', '5.00', 'JS-Core'],
// 	['George', '34', '6.00', 'Tech'],
// 	['Marry', '28', '5.49', 'Ruby']
// ], 'filter firstName Marry');

// solve([
// 	['name', 'age', 'grade'],
// 	['Peter', '25', '5.00'],
// 	['George', '34', '6.00'],
// 	['Marry', '28', '5.49']
// ], 'hide age');