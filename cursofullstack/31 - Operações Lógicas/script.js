let spaceship = "Elemental"
let velocity = 20

// TABELA VERDADE DO E(AND)

// && = e(and)
console.log(spaceship.length == 9 && velocity > 15)
// V e V = V

console.log(velocity > 10 && velocity < 19)
// V e F = F

console.log(velocity < 17 && spaceship == "Elemental")
// F e V = F

console.log(spaceship == "Golias" && velocity > 21)
// F e F = F

// TABELA VERDADE DO OU(OR)

// || = ou(or)
console.log(spaceship.length || velocity > 15)
// V ou V = V

console.log(velocity > 10 || velocity < 19)
//V ou F = V

console.log(velocity < 17 || spaceship == "Elemental")
// F ou V = V

console.log(spaceship == "Golias" || velocity > 21)
// F ou F = F

// TABELA VERDADE DO NÃO(NOT)

// ! = não(not)
console.log(!(velocity > 19))
// NÃO V = F

console.log(!(spaceship == "Golias"))
// NÃO F = V


console.log(!(velocity > 25 && spaceship == "Elemental") || (velocity - 3 == 17 && spaceship.length + 1 > 15))
// !(velocity > 25 && spaceship == "Elemental") || (17 == 17 && 10>15)
// !(F && V) || (V && F)
// !F || F
// V || F
// V