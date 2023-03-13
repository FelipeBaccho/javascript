function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 19

    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 5 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#F6B18F'
    } else if (hora >= 12 && hora < 19) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#D6BEAB'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#0D314D'
    }
}