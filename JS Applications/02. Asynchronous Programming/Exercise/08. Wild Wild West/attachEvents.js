function attachEvents() {

	const baseUrl = 'https://baas.kinvey.com/appdata/kid_HkN6M_UtN/players';

	const headers = {
		'Authorization': 'Basic ' + btoa('guest:guest'),
		'Content-Type': 'application/json'
	};

	let allPlayers;
	let currentPlayer;

	loadGame();

	let $saveBtn = $('#save').click(savePlayerProgress);
	let $reloadBtn = $('#reload').click(onReloadBtnClick);
	$('#addPlayer').click(onAddPlayerBtnClick);

	async function loadGame() {

		let players = await $.ajax({

			url: baseUrl,
			headers
		});

		allPlayers = players;

		let $players = $('#players').empty();

		for (const player of players) {

			let $player = $(`
				<div class="player" data-id="${player._id}">
					<div class="row">
						<label>Name:</label>
						<label class="name">${player.name}</label>
					</div>
					<div class="row">
						<label>Money:</label>
						<label class="money">${player.money}</label>
					</div>
					<div class="row">
						<label>Bullets:</label>
						<label class="bullets">${player.bullets}</label>
					</div>
				</div>
			`);

			let $playBtn = $('<button class="play">Play</button>').click(onPlayBtnClick);
			let $deleteBtn = $('<button class="delete">Delete</button>').click(onDeleteBtnClick);

			$player.append($playBtn, $deleteBtn);
			$players.append($player);
		}
	}

	async function savePlayerProgress() {

		if (currentPlayer) {

			$(canvas).css('display', 'none');
			$saveBtn.css('display', 'none');
			$reloadBtn.css('display', 'none');

			await $.ajax({

				method: 'PUT',
				url: baseUrl + '/' + currentPlayer._id,
				headers,
				data: JSON.stringify(currentPlayer)
			});

			clearInterval(canvas.intervalId);

			currentPlayer = undefined;

			loadGame();
		}
	}

	function onReloadBtnClick() {

		if (currentPlayer.money >= 60) {

			currentPlayer.money -= 60;
			currentPlayer.bullets = 6;
		}
	}

	async function onAddPlayerBtnClick() {

		let $name = $('#addName');

		let player = {

			name: $name.val(),
			money: 500,
			bullets: 6
		};

		$name.val('');

		await $.ajax({

			method: 'POST',
			url: baseUrl,
			headers,
			data: JSON.stringify(player)
		});

		loadGame();
	}

	async function onPlayBtnClick() {

		await savePlayerProgress();

		$(canvas).css('display', 'block');
		$saveBtn.css('display', 'block');
		$reloadBtn.css('display', 'block');

		let playerId = $(this).parent().data('id');
		currentPlayer = allPlayers.find(player => player._id === playerId);

		loadCanvas(currentPlayer);
	}

	async function onDeleteBtnClick() {

		let $parent = $(this).parent();

		let playerId = $parent.data('id');

		$parent.remove();

		await $.ajax({

			method: 'DELETE',
			url: baseUrl + '/' + playerId,
			headers
		});
	}
}