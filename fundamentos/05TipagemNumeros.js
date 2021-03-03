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
Essa função, como o próprio nome dele sugere, o valor que será apresentado, ele virá em formato de 
string. Ali, apesar de mostrar números, são caracteres como se fosse texto.
*/

console.log(media.toString(2)) // Binário

/*
Ao colocar o número 2 dentro desses parênteses, o computador vai fazer a leitura naquele número gigante
porém em binário. Ou seja, ele vai jogar na tela uma porrada de zeros e uns. Será que se eu pôr um 6
ele me retorna em octal?
*/

console.log(media.toString(8)) // Octal

/* Sim! de fato, ele retorna valores em octal, e acredito que isso vale para decimal e 
hexadecimal. No caso, essa função "toString" serve até como conversor de sistemas númericos.
Binário, Octal, Decimal e Hexadecimal.
 */

console.log(media.toString(10)) // Decimal
console.log(media.toString(16)) // Hexadecimal

/* O padrão é mostrar em decimal, por isso tentar converter para decimal, ele mostra o mesmo
valor original
 */

 // Testando agora como saber os tipos dos números:

 console.log(typeof media)
 console.log(typeof Number) 
 
 // Prestar atenção para não pôr "number" com "N" maiúsculo, pois isso é uma função.
 // Testa aí que você vai confirmar isso: Ctrl + Shift + N

 console.log(typeof peso2)
 /* Testa isso daí e perceba que por mais que a variável "peso2" originalmente seja uma string
 ele se comporta como número. Devido ter chamado a função "Number" (com N maiúsculo), ela leu o que tinha
 na string e viu que era um número, sendo assim, pro javascript, "peso2" é "number" (tipo de dado)
 e não uma string.
 */
console.log(' ')

 const saudacao = ('Olá, tudo bem?')
 console.log(saudacao)
 console.log(typeof saudacao)

 // Viu o resultado? a variável "saudacao" é do tipo string