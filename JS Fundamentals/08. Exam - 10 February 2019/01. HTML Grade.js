function solve(examPoints, completedHomework, totalHomework) {

	const examMaxPoints = 400;
	const maxGrade = 6;

	if (examPoints === examMaxPoints) {

		return maxGrade.toFixed(2);
	}

	const maxPoints = 100;

	let homeworkBonus = completedHomework / totalHomework * 10;

	let totalPoints = examPoints / examMaxPoints * 90 + homeworkBonus;

	let grade = 3 + 2 * (totalPoints - maxPoints / 5) / (maxPoints / 2);

	if (grade < 3) {

		grade = 2;
	}
	else if (grade > maxGrade) {

		grade = maxGrade;
	}

	return grade.toFixed(2);
}

// console.log(solve(300, 10, 10));
// console.log(solve(200, 5, 5));
// console.log(solve(400, 5, 5));
// console.log(solve(390, 5, 5));
// console.log(solve(20, 5, 5));