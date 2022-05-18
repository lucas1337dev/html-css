class Captain {
    constructor(name, agr, flightHours) {
        this.name = name
        this.age = age
        this.flightHours = flightHours
    }
}

class Spaceship {
    constructor(name, crewQuantity, captainName, captainAge, captainFlightHours) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.capitain = new Captain(captainName, captainAge, captainFlightHours)
    }
}

let spaceship = new Spaceship("Ártemis", 13, "Will Grey", 15000)