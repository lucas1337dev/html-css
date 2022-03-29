// Parâmetros normais
/* function speedUp(velocity, acceleration) {
    let newVelocity = velocity + acceleration
    console.log(`Nova velocidade: ${newVelocity}`)
}

speedUp(60, 10)
speedUp(40, 20)
speedUp(70, 5) */

// Parâmetros com valor Padrão
/* function greetPilot(name, message = "Olá") {
    alert(`${message}, ${name}`)
}

greetPilot("John Mars") */

// Armadilhas dos Parâmetros
function greetPilot(name, message = "Olá") {
    alert(`${message}, ${name}`)
}

greetPilot("John Mars", "Bem-vindo")

// Ordem dos Parâmetros
function speedUp(velocity, acceleration, unit = "km/s") {
    let newVelocity = velocity + acceleration
    alert(`Nova velocidade: ${newVelocity + unit}`)
}

speedUp(50, 20)