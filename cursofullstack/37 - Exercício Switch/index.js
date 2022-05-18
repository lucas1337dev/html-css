let dist = prompt("Digite a distância em Anos-luz")
let opt = prompt("Escolha qual opção deseja fazer a conversão: \nParsec(pc) \nUnidade astronômica(UA) \nQuilômetros(km)")

switch(opt) {
    case "pc" || "PC":
        let conv1 = (dist / 3.262)
        alert(`Distância em Anos-luz: ${dist} \nDistância em Parsec: ${conv1}`)
        break
    case "ua" || "UA":
        let conv2 = (dist * 63241)
        alert(`Distância em Anos-luz: ${dist} \nDistância em Unidade astronômica: ${conv2}`)
        break
    case "km" || "KM":
        let conv3 = (dist * 9.461e+12)
        alert(`Distância em Anos-luz: ${dist} \nDistância em Quilômetros: ${conv3}`)
        break
    default:
        alert(`Distância em Anos-luz: ${dist} \nUnidade não identificada: Conversão fora do escopo`)
}