function carregar() {
    var hora = new Date()
    horaAtual = hora.getHours
    var time = document.getElementById('horario')
    time.innerHTML = `Agora são ${horaAtual} horas`
    var img = document.querySelector('div.hourDiv')
    if (horaAtual < 12 && horaAtual >= 5) {
        img.classList.add('morning') //img.src = 'imgs/morning.jpg'
        document.body.style.backgroundColor = "#ddd290"
    } else if (horaAtual >= 12 && horaAtual < 18) {
        img.classList.add('noon') //img.src = 'imgs/noon.jpg'
        document.body.style.backgroundColor = "#c98768"
    } else {
        img.classList.add('night') //img.src = 'imgs/night.jpg'
        document.body.style.backgroundColor = "#575757"
    }
}