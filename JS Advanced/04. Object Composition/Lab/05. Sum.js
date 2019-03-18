function getModel() {

	let numOneElement, numTwoElement, resultElement;

	return {

		init: (selector1, selector2, resultSelector) => {

			numOneElement = document.querySelector(selector1);
			numTwoElement = document.querySelector(selector2);
			resultElement = document.querySelector(resultSelector);
		},
		add: () => resultElement.value = +numOneElement.value + +numTwoElement.value,
		subtract: () => resultElement.value = numOneElement.value - numTwoElement.value,
	};
}