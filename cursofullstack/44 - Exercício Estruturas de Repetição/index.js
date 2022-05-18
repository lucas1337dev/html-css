let spaceship = prompt("Digite o nome da nave")
let reverseSpaceship = ""

for(let i = spaceship.length - 1; i >= 0; i--){
    if(spaceship[i] == "e"){
        break
    }
    reverseSpaceship += spaceship[i]
}

alert(`Nome normal da nave: ${spaceship} \nNome inverso da nave: ${reverseSpaceship}`)