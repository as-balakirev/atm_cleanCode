const Plane = require('./Plane');

class PassengerPlane extends Plane {

    constructor({model:model, maxSpeed:maxSpeed, maxFlightDistance:maxFlightDistance, maxLoadCapacity:maxLoadCapacity, passengersCapacity:passengersCapacity}) {
        super({model:model, maxSpeed:maxSpeed, maxFlightDistance:maxFlightDistance, maxLoadCapacity:maxLoadCapacity});
        this.passengersCapacity = passengersCapacity;
    }

    getPassengersCapacity() {
        return this.passengersCapacity;
    }
}

module.exports = PassengerPlane;