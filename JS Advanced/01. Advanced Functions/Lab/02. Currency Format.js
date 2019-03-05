function solve(func) {

	return (value) => func(',', '$', true, value);
}

// function currencyFormatter(separator, symbol, symbolFirst, value) {

// 	let result = Math.trunc(value) + separator;

// 	result += value.toFixed(2).substr(-2, 2);

// 	if (symbolFirst) {

// 		return symbol + ' ' + result;
// 	}

// 	return result + ' ' + symbol;
// }

// console.log(solve(currencyFormatter)(5345));
// console.log(solve(currencyFormatter)(3.1429));
// console.log(solve(currencyFormatter)(2.709));