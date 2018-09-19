class ShipAttackHandler {
	static get ID() {
		return 13529;
	}

	constructor() {
		this._handler = function (e, a) {
			var shipAttackCmd = JSON.parse(e.detail);
			let attackerId = shipAttackCmd[Variables.attackerId];
			let attackedShipId = shipAttackCmd[Variables.attackedId];

			let ship = a.ships[attackedShipId];
			if(!ship)
				return

			if (attackerId == window.hero.id) {
				a.lastAttack = $.now();
				window.attackWindow.hp(shipAttackCmd[Variables.attackHp]);
				window.attackWindow.shd(shipAttackCmd[Variables.attackShd]);
				window.attackWindow.targetName(ship.name);
			}

			if (attackedShipId == window.hero.id) {
				window.hero.hp = shipAttackCmd[Variables.attackHp];
				window.hero.shd = shipAttackCmd[Variables.attackShd];
			}

			if (api.targetShip && attackedShipId == api.targetShip.id) {
				api.lastAttack = $.now();
				api.lastAttackSinceLock = $.now();
			}
			ship.hp = shipAttackCmd[Variables.attackHp];
			ship.shd = shipAttackCmd[Variables.attackShd];

			if (attackerId != window.hero.id) {
				ship.isAttacked = true;
			} else {
				ship.isAttacked = false;
			}
			try {
				if (attackedShipId != window.hero.id &&
					ship.isNpc &&
					attackerId != window.hero.id &&
					attackerId != window.pet.id && 
					a.lockedShip != attackedShipId &&
					!a.isShipOnBlacklist(attackedShipId)) 
				{
					a.blackListId(attackedShipId);
				}
			} catch(e) {}
		}
	}

	get handler() {
		return this._handler;
	}
}