const peso1 = 1.0 
/* Números quebrados são também chamados de VALOR PONTO FLUTUANTE, justamente por poder 
variar nos númeos que estão depois da vírgula. Mas nesse caso, como tem um zero depois da vírgula
a leitura do número é feita como se fosse inteiro. Javascript permite essas coisas, o que
não acontece sempre com outras linguagens.
Ambos são Number, ou seja, números inteiros e reais são Number, normal.
*/

const peso2 = Number('2.0')
/* Uma outra maneira de criar um número é usando essa função "Number". ele pega os valores de string
e faz uma leitura como se fosse número normal, e não caractere (como era de se esperar.).
 */


console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) 
/* Nesse caso em específico, podemos usar essa função "Number.isInteger()" para saber se o numero é 
Inteiro(Integer) ou não. Se tiver um zero depois da vírgula, ele vai ler como se fosse número inteiro.

Tanto que se mudarmos o valor de peso1 para 1,5 ou qualquer outro número quebrado.
Ao executar o código, ele vai dar "false".

*/
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.2345
const avaliacao2 = 7.2355

const total = avaliacao1 * peso1 + avaliacao2 * 2
const media = total / (peso1 + peso2)
console.log(media) 
/* Até aqui, tranquilo. Já vimos isso no curso de algoritmos, beleza.
Agora vamos dar uma olhada em como diminuir o número de casas decimais depois da vírgula.
*/

console.log(media.toFixed(2)) 

/* Pronto, ao usar a função "toFixed" ele dá uma corrigida nos números de casas
depois da vírgula com base no número que tu pôe dentro dos parênteses. Ex: (2), (3), etc.
Um detalhe: o número continua gigante depois da vírgula, mas essa função faz com que só mostre 
alguns dígitos depois da vírgula. Mas na real, o número de caracteres por trás continua grande.
*/

// Existem várias outras funções que dá para explorar em cima do Number. Como no caso de "toString"

console.log(media.toString())
/*

*/