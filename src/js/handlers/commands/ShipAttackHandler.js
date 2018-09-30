class ShipAttackHandler {
	static get ID() {
		return 30692;
	}

	constructor() {
		this._handler = function (e, a) {
			let shipAttackCmd = JSON.parse(e.detail);

			let attackerId = shipAttackCmd[Variables.attackerId];
			let attackedShipId = shipAttackCmd[Variables.attackedId];

			let ship = a.ships[attackedShipId];
			try{
				if (
					attackedShipId != window.hero.id && ship.isNpc &&
					attackerId != window.hero.id || (window.pet != null && window.pet.id != attackerId) &&
					!a.isShipOnBlacklist(attackedShipId) &&
					window.settings.settings.avoidAttackedNpcs &&
					!window.settings.settings.ggbot)
				{
					a.blackListId(attackedShipId);
				}
			}catch{console.log("shipattackhandler id check error");}
			
		}
	}
	
	get handler() {
		return this._handler;
	}
}