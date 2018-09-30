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
					attackerId != window.hero.id &&
					!a.isShipOnBlacklist(attackedShipId) &&
					window.settings.settings.avoidAttackedNpcs &&
					!window.settings.settings.ggbot)
				{
					if(window.pet != null){
						if(window.pet.id != attackerId){
							a.blackListId(attackedShipId);
						}
					}else{
						a.blackListId(attackedShipId);
					}
				}
			}catch{}
			
		}
	}
	
	get handler() {
		return this._handler;
	}
}