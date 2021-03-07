let isAtivo = false // JS tem o literal "false" para representar um valor de falso numa situação.
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 // JS também interpreta os valores 1 e 0, como verdadeiro e falso, respectivamente. Mas como 1 é um número literal, para que ele interprete como booleano, tem que alterar uma coisinha.
console.log(!!isAtivo) // Para que o JS interprete o 1 como booleano, e não como Number, então usamos a negação, o símbolo " ! ". que significa "NÃO alguma coisa". se usar ! duas vezes, fica verdadeiro.

isAtivo = 0
console.log(!!isAtivo)

console.log(!!true) // Usando as duas exclamações, você tem como resultado o valor original da coisa. True, tem que dar true e false, tem que dar false.
console.log(!!false) // 1 tem que dar true, 0 tem que dar false.

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ") // aqui pode parecer vazia, mas tem um espaço em branco aí.
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!"") // essa aqui realmente está vazia, não tem nem espaço.
console.log(!!null) // nulo
console.log(!!NaN) // Not A Number, não é um número.
console.log(!!undefined) // não definido.
console.log(!!(isAtivo = false))

console.log("para finalizar...")
console.log(!!("" || null || 0 || " " || false)) // o resultado dessa operação aqui é verdadeiro. o símbolo || significa "ou". Ou seja, se pelo menos um desses valores for verdadeiro, vai dar verdadeiro.
// é igual a lógica matemática, existem os valores lógicos "E" e "OU". Com E, todos tem que ser verdadeiro, para dar vedadeiro. Com OU, só precisa que um valor seja verdadeiro para que o resultado também seja verdadeiro.

let nome = "Olá"
console.log(nome || "Desconhecido") // JS faz operações lógicas com string. Naquele caso ali, se na variável let a pessoa não colocar noma, vai ficar uma string vazia que dá um valor lógico falso.
// Aí entra em questão a segunda consição, se "nome" OU Desconhecido. o console ignora o espaço vazio em "nome" e joga na tela "Desconhecido." Mas não significa que ele colocou a string "Desconhecido" para dentro da variável nome.
console.log(typeof nome)

console.log("Desconhecido" || nome) // Reparando bem essa operação lógica ( X OU Y ), ele faz a leitura da seguinte maneira "se X verdadeiro, então mostre na tela X. esquece o resto" ou "Se X falso, Ou então vê o que tem adiante, Y é verdadeiro. então mostre Y". 
// Percebemos que a ordem em que colocamos os valores lógicos interferem diretamente em como será feito a operação. Ele só fará a leitura dos outros fatores da operação enquanto os antecessores forem negativos. A partir do momento que aparecer o primeiro verdadeiro, então só ele será levado em consideração.