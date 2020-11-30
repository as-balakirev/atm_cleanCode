const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/militaryType');
const experimentalPlane = require('./Planes/experimentalPlane');

class Airport {

    constructor(planes) {
        this.planes = planes;
    }

    getPassengerPlanes() {
        return this.planes.filter(plane => plane instanceof PassengerPlane);
    }

    getMilitaryPlanes() {
        return this.planes.filter(plane => plane instanceof MilitaryPlane);
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        return this.getPassengerPlanes().sort((a, b) => a.getPassengersCapacity() - b.getPassengersCapacity())[0];
    }

    getTransportMilitaryPlanes() {
        return this.getMilitaryPlanes().filter(plane => plane.getMilitaryType() === MilitaryType.TRANSPORT);
    }


    getBomberMilitaryPlanes() {
        return this.getMilitaryPlanes().filter(plane => plane.getMilitaryType() === MilitaryType.TRANSPORT);
    }

    getExperimentalPlanes() {
        return this.planes.filter(plane => plane instanceof experimentalPlane);
    }

    sortByMaxDistance() {
        this.planes.sort((a, b) => a.Get_Max_Flight_Distance() - b.Get_Max_Flight_Distance());
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((a, b) => a.getMS() - b.getMS());
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => a.getMinLoadCapacity() - b.getMinLoadCapacity());
        return this;
    }

    getPlanes() {
        return this.planes;
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
