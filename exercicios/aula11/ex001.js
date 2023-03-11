/*
    Condições em JS:

    if (condição) {
        bloco "true"
    } else {
        bloco "false"
    }

    Tipos de condição (aqui somente duas das existentes):
        -Simples: somente com o bloco de "true" (if)
        -Composta: com bloco de "true" e de "false" (if or else)
*/

console.log('O console funciona!') // Aqui estamos executando o código dentro do node ao apertar F8 por meio do plugin "Node.js Exec", e nesse exemplo para aparecer um texto no terminal o comando é diferente.

/*
var vel = 60.5
console.log(`A velocidade do seu carro é ${vel}km/h.`)
console.log('Você ultrapassou a velocidade permitida. MULTADO.') // Com um código sequencial a pessoa SEMPRE será multada, o que não faz sentido.
console.log('Dirija sempre usando o cinto de segurança.')
*/

var vel = 70
console.log(`A velocidade do seu carro é ${vel}km/h.`)
if (vel > 60) {
    console.log('Você ultrapassou a velocidade permitida. MULTADO.')
}
console.log('Dirija sempre usando o cinto de segurança.')