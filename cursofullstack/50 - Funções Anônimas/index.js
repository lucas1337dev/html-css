console.log(speedUp(60, 10)) //speedUp function 
console.log(doubleSpeed(50)) // doubleSpeed function

// Ocorre seguindo a ordem do código
let doubleSpeed = function(velocity) {
    return velocity * 2
}

// Ocorre primeiro mesmo com os parâmetros dados antes
function speedUp(velocity, acceleration) {
    return velocity + acceleration
}