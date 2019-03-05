function solution(command) {

	switch (command) {

		case 'upvote':
			this.upvotes++;
			break;

		case 'downvote':
			this.downvotes++;
			break;

		case 'score':
			let inflation = 0;

			if (this.upvotes + this.downvotes > 50) {

				inflation = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
			}

			return [
				this.upvotes + inflation,
				this.downvotes + inflation,
				this.upvotes - this.downvotes,
				getRating(this.upvotes, this.downvotes)
			];
	}

	function getRating(upvotes, downvotes) {

		if (upvotes + downvotes < 10) {

			return 'new';
		}
		else if (upvotes > (upvotes + downvotes) * 0.66) {

			return 'hot';
		}
		else if (upvotes >= downvotes && (upvotes > 100 || downvotes > 100)) {

			return 'controversial';
		}
		else if (upvotes < downvotes) {

			return 'unpopular';
		}
		else {

			return 'new';
		}
	}
}

// let post = { upvotes: 100, downvotes: 100 };

// solution.call(post, 'upvote');
// solution.call(post, 'downvote');

// console.log(solution.call(post, 'score'));     // [127, 127, 0, 'controversial']

// for (let index = 0; index < 50; index++) {

// 	solution.call(post, 'downvote');
// }

// console.log(solution.call(post, 'score'));     // [139, 189, -50, 'unpopular']