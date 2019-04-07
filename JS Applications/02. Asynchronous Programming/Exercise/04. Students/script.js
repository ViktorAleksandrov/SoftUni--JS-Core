function attachEvents() {

	const url = 'https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students';

	const headers = {
		'Authorization': 'Basic ' + btoa('guest:guest'),
		'Content-Type': 'application/json'
	};

	loadStudents();

	$('#createStudent').click(onCreateStudentBtnClick);

	async function loadStudents() {

		let students = await $.ajax({
			url,
			headers
		});

		let sortedValidStudents = students
			.filter(s => isStudentValid(s))
			.sort((a, b) => a.ID - b.ID);

		$('.myTr').remove();

		for (const student of sortedValidStudents) {

			let $student = $(`
				<tr class="myTr">
					<td>${student.ID}</th>
					<td>${student.FirstName}</th>
					<td>${student.LastName}</th>
					<td>${student.FacultyNumber}</th>
					<td>${student.Grade}</th>
				</tr>
			`);

			$('#results').append($student);
		}
	}

	async function onCreateStudentBtnClick() {

		let student = {

			ID: +$('#id').val(),
			FirstName: $('#firstName').val(),
			LastName: $('#lastName').val(),
			FacultyNumber: $('#facultyNumber').val(),
			Grade: +$('#grade').val(),
		};

		if (isStudentValid(student)) {

			try {
				await $.ajax({

					method: 'POST',
					url,
					headers,
					data: JSON.stringify(student)
				});
			}
			catch (error) {

				console.log(error);
			}

			loadStudents();
		}
	}

	function isStudentValid(student) {

		return student.ID
			&& student.FirstName
			&& student.LastName
			&& /\d+/.test(student.FacultyNumber)
			&& student.Grade;
	}
}