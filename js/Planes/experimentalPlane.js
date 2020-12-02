const Plane = require('./Plane');

class experimentalPlane extends Plane {

    constructor({model:model, maxSpeed:maxSpeed, maxFlightDistance:maxFlightDistance, maxLOadCapacity:maxLoadCapacity, type:type, classificationLevel:classificationLevel}) {
        super({model:model, maxSpeed:maxSpeed, maxFlightDistance:maxFlightDistance, maxLoadCapacity:maxLoadCapacity});
        this._model = model;
        this._maxSpeed = maxSpeed;
        this._maxFlightDistance = maxFlightDistance;
        this._maxLoadCapacity = maxLoadCapacity;
        this._type = type;
        this._classificationLevel = classificationLevel;
    }


    get model() {
        return this._model;
    }

    set model(value) {
        this._model = value;
    }

    get maxSpeed() {
        return this._maxSpeed;
    }

    set maxSpeed(value) {
        this._maxSpeed = value;
    }

    get maxFlightDistance() {
        return this._maxFlightDistance;
    }

    set maxFlightDistance(value) {
        this._maxFlightDistance = value;
    }

    get maxLoadCapacity() {
        return this._maxLoadCapacity;
    }

    set maxLoadCapacity(value) {
        this._maxLoadCapacity = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get classificationLevel() {
        return this._classificationLevel;
    }

    set classificationLevel(value) {
        this._classificationLevel = value;
    }
}

module.exports = experimentalPlane