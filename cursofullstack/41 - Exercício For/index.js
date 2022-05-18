let spaceship = prompt("Digite o nome da espaçonave")
let caractere = prompt("Digite o caractere que deseja substituir no nome")
let newCaractere = prompt("Por qual caractere deseja substituir")
let newSpaceship = ""

for(let i = 0; i < spaceship.length; i++){
    if(spaceship[i] == caractere){
        newSpaceship += newCaractere
    } else {
    newSpaceship += spaceship[i]
    } 
}

alert(`O novo nome da nave é: ${newSpaceship}`)