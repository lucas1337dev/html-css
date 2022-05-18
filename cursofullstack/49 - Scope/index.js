//Escopo global
let spaceshipName = "Supernova"

function changeSpaceshipname() {
    spaceshipName = "Elemental"
}

console.log(spaceshipName)

changeSpaceshipname()

console.log(spaceshipName)

// Escopo local
function startSpaceshipVelocity() {
    let spaceshipVelocity = 0
}

startSpaceshipVelocity

console.log(spaceshipVelocity)

function setSpaceshipDetails() {
    let velocity = 50
    if(velocity == 50) {
        velocity = 60
        var spaceshipName = "Elemental" // Define no escopo mais alto (na função, mesmo dentro do if)
        let spaceshipType = "Discovery"
    }
    console.log(velocity)
    console.log(spaceshipName)
    console.log(spaceshipType)
}