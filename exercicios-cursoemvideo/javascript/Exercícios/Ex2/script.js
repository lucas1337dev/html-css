function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'babyM.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'youngM.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultM.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'oldM.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'babyW.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'youngW.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultW.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'oldW.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}