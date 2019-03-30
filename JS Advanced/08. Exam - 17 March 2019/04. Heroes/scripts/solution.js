function solve() {

	let rebuiltKingdoms = [];

	$('#kingdom button').click(onRebuildButtonClick);
	$('#characters button').click(onJoinButtonClick);
	$('#actions button').click(onAttackButtonClick);

	function onRebuildButtonClick() {

		const kingdoms = ['castle', 'dungeon', 'fortress', 'inferno', 'necropolis', 'rampart', 'stronghold', 'tower', 'conflux'];

		let $kingdom = $('#kingdom div input:nth-child(1)');
		let $king = $('#kingdom div input:nth-child(2)');

		let kingdomName = $kingdom.val().toLowerCase();
		let kingName = $king.val();

		let isKingdomNameValid = kingdoms.includes(kingdomName);
		let isKingNameValid = kingName.length >= 2;

		if (isKingdomNameValid && isKingNameValid) {

			let kingdom = {

				kingdomName,
				kingName: kingName.toUpperCase(),
				tank: 0,
				fighter: 0,
				mage: 0,
				characters: ''
			};

			rebuiltKingdoms.push(kingdom);

			appendKingdom(kingdom);
		}
		else {

			resetInput(isKingdomNameValid, $kingdom);
			resetInput(isKingNameValid, $king);
		}

		function appendKingdom(kingdom) {

			let $kingdomName = $('<h1>').text(kingdomName.toUpperCase());
			let $castle = $('<div>').addClass('castle');
			let $kingName = $('<h2>').text(kingdom.kingName);

			let $legend = $('<legend>').text('Army');
			let $tanks = $('<p>').text('TANKS - 0');
			let $fighters = $('<p>').text('FIGHTERS - 0');
			let $mages = $('<p>').text('MAGES - 0');
			let $armyOutput = $('<div>').addClass('armyOutput');

			let $armyInfo = $('<fieldset>')
				.append($legend, $tanks, $fighters, $mages, $armyOutput);

			$(`#${kingdomName}`)
				.attr('style', 'display: inline-block')
				.append($kingdomName, $castle, $kingName, $armyInfo);
		}
	}

	function onJoinButtonClick() {

		let $characterName = $('#characters input[type=text]:nth-child(1)');
		let $kingdomName = $('#characters input[type=text]:nth-child(2)');

		let characterType = $('input[type=radio]:checked').val();
		let characterName = $characterName.val();
		let kingdomName = $kingdomName.val().toLowerCase();

		let isCharacterNameValid = characterName.length >= 2;
		let kingdom = rebuiltKingdoms.find(k => k.kingdomName === kingdomName);

		if (characterType && isCharacterNameValid && kingdom) {

			let $character = $(`#${kingdomName} p:contains(${characterType.toUpperCase()})`);
			$character.text(`${characterType.toUpperCase()}S - ${++kingdom[characterType]}`);

			kingdom.characters += characterName + ' ';

			$(`#${kingdomName} div.armyOutput`).text(kingdom.characters);
		}
		else {

			resetInput(isCharacterNameValid, $characterName);
			resetInput(kingdom, $kingdomName);
		}
	}

	function onAttackButtonClick() {

		let $attacker = $('#actions input:nth-child(2)');
		let $defender = $('#actions input:nth-child(3)');

		let attackingKingdomName = $attacker.val().toLowerCase();
		let defendingKingdomName = $defender.val().toLowerCase();

		let attacker = rebuiltKingdoms.find(k => k.kingdomName === attackingKingdomName);
		let defender = rebuiltKingdoms.find(k => k.kingdomName === defendingKingdomName);

		if (attacker && defender) {

			let totalAttack = attacker.tank * 20 + attacker.fighter * 50 + attacker.mage * 70;

			let totalDefence = defender.tank * 80 + defender.fighter * 50 + defender.mage * 30;

			if (totalAttack > totalDefence) {

				$(`#${defendingKingdomName} h2`).text(attacker.kingName);

				defender.kingName = attacker.kingName;
			}
		}
		else {

			resetInput(attacker, $attacker);
			resetInput(defender, $defender);
		}
	}

	function resetInput(boolean, element) {

		if (!boolean) {

			element.val('');
		}
	}
}

solve();