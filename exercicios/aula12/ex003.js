/* 
Condições múltiplas: serve para trabalhar com valores fixos ao invés de intervalos, pontual mas útil. 
Necessário o termo "break" entre os blocos para funcionar, assim o código para quando encontrar o valor desejado.
O ultimo termo "default" é opcional, e não necessita de "break" por ser já o final do código.

    switch (expressão) {
        case valor 1:
            bloco 1
            break
        case valor 2:
            bloco 2
            break
        case valor 3:
            bloco 3
            break
        default:
            bloco default
            break
    }

    
    Dias da semana para o JS:
        0 = Domingo
        1 = Segunda
        2 = Terça
        3 = Quarta
        4 = Quinta
        5 = Sexta
        6 = Sábado
*/

var agora = new Date()
var diaSem = agora.getDay()
switch(diaSem) { // Poderia ser feito com "if or else" que funcionam pra praticamente tudo, porém o código ficaria bem maior.
    case 0: // Pode ser número ou string entre apóstrofes.
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Dia inválido')
}