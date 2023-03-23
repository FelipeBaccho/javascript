function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Digite um numero!')
    } else {
        var n = Number(num.value) // usado o "while" porem no dia a dia seria melhor usar o "for"
        var c = 1
        tab.innerHTML = '' // isso faz com que antes de ser calculada e mostrada, o espaco sera limpo
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}