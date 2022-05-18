let spaceship = prompt("Digite o nome da sua nave")
let spaceshipVelocity = 0
let chosenOption

function menu() {
    let option
    while(option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja fazer? \n1 - Acelerar a nave \n2 - Desacelerar a nave \n3 - Imprimir dados de bordo \n4 - Sair do programa")
    }
    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity) {
    let newVelocity = velocity - 5
    if(newVelocity < 0) {
        newVelocity = 0
    }
    return newVelocity
}

function data(spaceship, velocity) {
    alert(`Nome da nave: ${spaceship} \nVelocidade da nave: ${velocity}km/s`)
}

do {
    chosenOption = menu()
    switch(chosenOption){
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break
        case "3":
            data(spaceship, spaceshipVelocity)
            break
        default:
            alert("Encerrando programa de bordo")
    }
} while(chosenOption != "4")

