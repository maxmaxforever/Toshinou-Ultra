class ShipSelectedHandler {
  static get ID() {
    return 13233;
  }

  constructor() {
    this._handler = function (e, a) {
      let parsedJson = JSON.parse(e.detail);

      let ship = a.ships[parsedJson.userId];
      if(ship != null){
        ship.maxHp = parsedJson[Variables.selectMaxHp];
        ship.maxShd = parsedJson[Variables.selectMaxShd];
        ship.hp = parsedJson[Variables.selectHp];
        ship.shd = parsedJson.shield;
        
        a.lockedShip = ship;
        if (!api.attacking && (window.settings.settings.killNpcs && ship.isNpc && !window.settings.settings.pause) || (window.settings.settings.autoAttack && ship.isEnemy && !ship.isNpc) || (window.settings.settings.autoAttackNpcs && ship.isNpc)) {
          api.startLaserAttack();
          a.lastAttack = $.now();
          api.attacking = true;
        }
      }
    }
  }

  get handler() {
    return this._handler;
  }
}