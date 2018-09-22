class ShipAttackHandler {
	static get ID() {
		return 8321;
	}

	constructor() {
		this._handler = function (e, a) {
			let shipAttackCmd = JSON.parse(e.detail);

			let attackerId = shipAttackCmd[Variables.attackerId];
			let attackedShipId = shipAttackCmd[Variables.attackedId];

			let ship = a.ships[attackedShipId];

			if ((window.pet != null && window.pet.id != attackerId) &&
				attackedShipId != window.hero.id && ship.isNpc &&
				attackerId != window.hero.id &&
				!a.isShipOnBlacklist(attackedShipId) &&
				window.settings.settings.avoidAttackedNpcs
			)
			{
				a.blackListId(attackedShipId);
			}
		}
	}
	
	get handler() {
		return this._handler;
	}
}