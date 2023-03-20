/* 
    Repetições
        Estrutura de repetição com teste lógico no início: enquanto uma condição for verdadeira a sua função será repetida, até que a condição seja falsa.
                while (condição){
                    bloco
                }
        Estrutura de repetição com teste lógico no final: a função é executada e somente depois é testada para verdadeira ou falsa, sendo verdadeira a função sera repetida.
                do {
                    bloco
                } while (condição)

    Exemplo "while": ao comer pizza, enquanto tiver fatias elas serão comidas
    function comerPizza() {
        while(temFatia()){
            comerFatia()
        }
    }

*/

var a = 1
while (a <= 6) {
    console.log(`Passo ${a}`)
    a++ // a = a + 1
}

var b = 1
do {
    console.log(`Passo ${b}`)
    b++ // b = b + 1
} while (b <= 6)
