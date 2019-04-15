const petsService = (() => {

	function getAll() {

		return kinvey.get('appdata', `pets?query={}&sort={"likes": -1}`, 'kinvey');
	}

	function getMy(userId) {

		return kinvey.get('appdata', `pets?query={"_acl.creator":"${userId}"}`, 'kinvey');
	}

	function getPet(petId) {

		return kinvey.get('appdata', `pets/${petId}`, 'kinvey');
	}

	function create(pet) {

		return kinvey.post('appdata', 'pets', 'kinvey', pet);
	}

	function edit(petId, pet) {

		return kinvey.update('appdata', `pets/${petId}`, 'kinvey', pet);
	}

	function remove(petId) {

		return kinvey.remove('appdata', `pets/${petId}`, 'kinvey');
	}

	return { getAll, getMy, getPet, create, edit, remove };
})();