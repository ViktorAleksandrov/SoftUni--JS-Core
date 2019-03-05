function solve(firstNum) {

	function add(secondNum) {

		firstNum += secondNum;

		return add;
	}

	add.toString = () => firstNum;

	return add;
}

// console.log(solve(1).toString());
// console.log(solve(1)(6)(-3).toString());