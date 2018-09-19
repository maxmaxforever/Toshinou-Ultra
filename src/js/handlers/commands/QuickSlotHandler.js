class QuickSlotHandler {
	static get ID() {
		return 30579;
	}
	// Useless for now...
	constructor(f) {
		this._handler = function (e, a) {
			let item = JSON.parse(e.detail);
			if(item.iconLootId.indexOf("drone_formation") != -1)
				console.log(item);
		}
	}

	get handler() {
		return this._handler;
	}
}
  
  