let pName = prompt("Qual o seu nome, piloto?")
let velocity = 0
alert("A velocidade inicial da nave é de 0km/h")
let velocity2 = prompt("Qual a velocidade inicial que você deseja acelerar?")

if (velocity2 <= 0) { // Menor ou igual a 0
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if (velocity2 < 40) { // Menor que 40
    alert("Você está devagar, podemos aumentar mais.")
} else if (velocity2 >= 40 && velocity2 < 80) { // Maior ou igual a 40 e menor que 80
    alert("Parece uma boa velocidade para manter.")
} else if (velocity2 >= 80 && velocity2 < 100) { // Maior ou igual a 80 e menor que 100
    alert("Velocidade alta! Considere diminuir.")
} else { // Maior ou igual a 100
    alert("Velocidade perigosa. Controle automático forçado!")
}

alert("O nome do piloto é " + pName + " e a velocidade atual é " + velocity2 + "km/h")