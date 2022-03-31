let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]


/* Função pra mostrar o nome e o index de cada nave 
hitchedSpaceships.forEach(function(currentSpaceship, index){
    console.log(`Nave: ${currentSpaceship} \nÍndice: ${index}`)    
}) */

/* Função para transformar os nomes das naves em letra maiúscula 
let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship, index){
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})
console.log(upcasedSpaceships) */

/* Filtra as naves com 7 caracteres ou mais (retorna um novo array)
let with7Chars = hitchedSpaceships.filter(element => { return element.length >= 7})
console.log(with7Chars) */

/* Retorna o primeiro elemento que satisfaz a função
let with7Chars = hitchedSpaceships.find(element => { return element.length >= 7})
console.log(with7Chars) */