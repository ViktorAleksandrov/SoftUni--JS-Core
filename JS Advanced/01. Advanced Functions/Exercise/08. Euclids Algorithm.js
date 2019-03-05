function solve(num1, num2) {

	return num2 ? solve(num2, num1 % num2) : num1;
}

// console.log(solve(252, 105));