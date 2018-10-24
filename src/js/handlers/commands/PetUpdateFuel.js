class PetUpdateFuel {
	static get ID() {
		return 17699;
	}

	constructor() {
		this._handler = (e, a) => {
            let command = e.wholeMessage.split("|");
            a.petHasFuel = true;
            a.currentModule = -1;
        }
    }

    get handler() {
        return this._handler;
    }

}