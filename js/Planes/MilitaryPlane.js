const Plane = require('./Plane');

class MilitaryPlane extends Plane {

    constructor({model:model, maxSpeed:maxSpeed, maxFlightDistance:maxFlightDistance, maxLoadCapacity:maxLoadCapacity, militaryType:militaryType}) {
        super({model:model, maxSpeed:maxSpeed, maxFlightDistance:maxFlightDistance, maxLoadCapacity:maxLoadCapacity});
        this.militaryType = militaryType;

    }

    getMilitaryType() {
        return this.militaryType;
    }
}

module.exports = MilitaryPlane;