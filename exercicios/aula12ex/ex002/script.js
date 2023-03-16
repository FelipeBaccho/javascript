function verificar() {
    var data = new Date() // criou uma instancia de Date
    var ano = data.getFullYear() // funcao da classe Date 
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('Verifique o ano e tente novamente.')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = '' // vazia para ser preenchida pela função

        var img = document.createElement('img') // coloca imagem pelo JS, pode ser pelo HTML
        img.setAttribute('id', 'foto') // define o id da imagem

        if (formSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/moco.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
            }

        } else if (formSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/moca.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/adulta.png')
            } else {
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }

        res.style.textAlign = 'center' // alinha texto pelo JS
        res.innerHTML = `${genero} com ${idade} anos!`
        res.appendChild(img) // faz a imagem aparecer no final
    }
}