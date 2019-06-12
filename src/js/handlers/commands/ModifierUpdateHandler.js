class ModifierUpdateHandler {
	static get ID() {
		return 24213; 
	}

	constructor() {
		this._handler = (e, a) => {
            let command = JSON.parse(e.detail);
            
            if(command.userId == window.hero.id && command.modifier == 26){
                if(command.count == 1 ){
                    window.invertedMovement = true;
                }else{
                    window.invertedMovement = false;
                }

            }
            // Update ships modifier
            if(a.ships[command.userId])
                a.ships[command.userId].modifier.push(command);
        }
    }

    get handler() {
        return this._handler;
    }

}


/*
activated: false
attribute: 0
count: 0
modifier: 32
userId: 150200093
_-q4F: ""
*/