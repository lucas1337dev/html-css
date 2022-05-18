// Declarando variáveis
let warpCount = 0
let chosenOption = ""

// Colocando o nome da nave
let spaceship = prompt("Digite o nome da nave")

// Escolhendo a resposta
chosenOption = prompt("Deseja entrar na primeira dobra espacial? \n1 - Sim \n 2 - Não")

// Repetição while
while(chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Desejar relizar a próxima dobra? \n 1 - Sim \n 2 - Não")
}

// Quebra do código
alert(`Nave: ${spaceship} \nQuantidade de dobras: ${warpCount}`)