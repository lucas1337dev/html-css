let spaceshipNames = ["Elemental", "Darwin", "Ártemis", "Supernova"]
console(spaceshipNames)


// SPLICE

/* Pega a posição index 1 (Darwin), Remove 2 elementos a partir desse index contando com o próprio do index (Darwin e Ártemis), Acrescenta os outros 3 elementos (Deméter, Puler e Golias)
let removedSpaceships = spaceshipNames.splice(1, 2, "Deméter", "Puler", "Golias")
console.log(spaceshipNames)
console.log(removedSpaceships) */


/* Não acrescenta novos elementos
let removedSpaceships = spaceshipNames.splice(1, 2)
console.log(spaceshipNames)
console.log(removedSpaceships) */


// SLICE

/* Pega os elementos do índice 1 ao 2 (desconsidera o último index) (não altera o original)
let extractedNames = spaceshipNames.slice(1, 3)
console.log(spaceshipNames)
console.log(extractedNames) */