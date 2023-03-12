// Condições aninhadas: quando há uma ou mais condições dentro da primeira.

/*
var idade = 15
if (idade < 16) {
    console.log('Nao vota')
} else if (idade >= 16 && idade < 18) { // A parte "idade >= 16 &&" poderia ser retirada pois se não é <16 e é <18, necessariamente vai ser >=16.
    console.log('Voto opcional')
} else if (idade >= 18) { // A parte "if (idade >= 18)" poderia ser retirada pois se não é <16 nem <18, necessariamente vai ser >=18.
    console.log('Voto obrigatorio')
}
*/

var idade = 15
console.log(`Voce tem ${idade} anos!`)
if (idade < 16) {
    console.log('Não vota.')
} else if (idade < 18 || idade >= 65) {
    console.log('Voto opcional.')
} else {3
    console.log('Voto obrigatório.')
}