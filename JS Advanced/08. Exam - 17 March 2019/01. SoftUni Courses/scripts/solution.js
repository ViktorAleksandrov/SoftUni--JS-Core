function solve() {

	$('button').click(onButtonClick);

	function onButtonClick() {

		let jsFundValue = $('input[value=js-fundamentals]:checked').val();
		let jsAdvValue = $('input[value=js-advanced]:checked').val();
		let jsAppValue = $('input[value=js-applications]:checked').val();
		let jsWebValue = $('input[value=js-web]:checked').val();

		let totalPrice = 0;

		processCourse(jsFundValue, 170);

		let jsAdvPrice = jsFundValue ? 162 : 180;
		processCourse(jsAdvValue, jsAdvPrice);

		processCourse(jsAppValue, 190);

		let hasModule = jsFundValue && jsAdvValue && jsAppValue;

		if (hasModule) {

			totalPrice *= 0.94;
		}

		processCourse(jsWebValue, 490);

		if (hasModule && jsWebValue) {

			processCourse('HTML and CSS', 0);
		}

		if ($('input[value=online]:checked').val()) {

			totalPrice *= 0.94;
		}

		$('.courseFoot p').text(`Cost: ${Math.floor(totalPrice).toFixed(2)} BGN`);

		function processCourse(course, coursePrice) {

			if (course) {

				let courseName = course.slice(0, 4).toUpperCase() + course.slice(4);

				$('#myCourses ul').append($('<li>').text(courseName));

				totalPrice += coursePrice;
			}
		}
	}
}

solve();