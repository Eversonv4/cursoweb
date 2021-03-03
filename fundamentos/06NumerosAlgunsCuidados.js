console.log(7 / 0)

/* Javascript é meio bugado nesse esquema de números. Por algum motivo essa linguagem gosta de quebrar
algumas leis da matemática. Por exemplo: Ao executar esse código acima, o resultado será "Infinity".
Pois ele usa o mesmo conceito de limites (lá da matéria de cálculo 1). "se eu divido um
número qualquer por um número muito próximo de zero, o resultado vai se aproximando de infinito".
Logo, se quanto mais próximo de zero for o divisor, mais próximo do infinito. Se o valor for zero, aí vai pro infinito efetivamente.
Acho uma puta sacanagem, pois eu passei a vida inteira convicto que não deve dividir por zero em hipótese alguma. Foda-se.
 */

console.log("10" / 2)
console.log("10" * 2)

/* Nesse caso é meio louco, pois isso é uma string, ou seja, deveria ser lido como uma palavra.
Mas o Javascript é um pouco mais sagaz e reconhece que há um número dentro dessa string e ele termina
por resolver a operação.
Outro detalhe: como pode ver, funciona tanto para multiplicação, quanto para divisão.
Entretanto se tentar subtrair ou somar, não vai funcionar. Pois o sinal de soma e subtração fazem
outras coisinhas com strings, e isso o JS prioriza. Se quer fazer as operações, faz direito. Esquece essa
merda de usar os números dentro de string.
 */



console.log("Tudo bem?" * 2) 
// Nesse caso o JS não fez nada, ele viu que ai não tinha números e deu como resultado "NaN"
// Ou se preferir, "Not a Number" (não é um número).

console.log(0.1 + 0.8)
console.log(0.1 + 0.7)
// Essa aí é foda kkkkk não entendi o porquê que no primeiro caso, ele dá o resultado 0.6 bonitinho
// mas no de baixo, fica uma dizima. WTF ????
// kkkkk testa aí, tu vai ver que só dá esse resultado na soma de (0.1 + 0.7), qualquer outro valor ele dá o resultado exato.
// Se alguém souber o motivo disso, me explica por favor, meu Instagram é @4eversoon.

console.log(1.2 + 0.7)
// kkkk ta vendo? isso dá o resultado certo "1.9"


// console.log(10.toString())  <<--- Isso não dá certo, pois o valor 10 precisa estar dentro de parênteses. Mas se fosse uma variável, estava de boas.
// NÃO DÁ PARA USAR UM LITERAL PARA CHAMAR FUNÇÃO (a explicação mais formal para isso)
console.log((10.856).toString())
// Esse caso é importante, porque caso queira usar uma função sobre um valor numérico, se colocar o número
// diretamente, vai dar erro. É necessário pôr dentro de parênteses. Vê outro teste:
console.log((10.856).toFixed(2))

