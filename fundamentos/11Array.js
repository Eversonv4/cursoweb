const valores = [7.7, 8.9, 6.3, 9.2] // aqui os arrays foram feitos de maneira bem literal, e tem que usar o colchetes e para separar cada elemento do array, tu separa com vírgula. 
console.log(valores[0], valores[3]) // mostra os elementos do array, na posição específica deles

console.log(valores[4]) 
/* Aqui eu pedi para mostrar um valor de uma posição que não existe lá no array. então ele vai me dar como o resultado "undefined"
Em outras linguagens poderia dar erro, com JS ele segue com o código e apararece aquela mensagem que citei. 
Tem que ficar de olho nisso, pois as vezes possa ser que tenha erro no seu código, tentando acessar um valor que não existe e isso prejudicar o seu trabalho. 
Atenção, sempre!
*/ 

// AGORA UMA COISA LEGAL DE JAVASCRIPT, VOCÊ PODE AUMENTAR O NÚMERO DE ELEMENTOS DENTRO DO SEU ARRAY (O MELHOR É TU FAZER UM ARRAY DO TAMANHO CERTO PARA NÃO PRECISAR FAZER ISSO.)
valores[4] = 10
console.log(valores) // agora aqui ele vai mostrar o array inteiro, e tu vai ver que o número 10 foi incluido lá na 4ª posição.
console.log(valores.length) // com a função length dá para acessar a quantidade de elementos no array. no caso dá um resultado 5. [0, 1, 2, 3, 4]

// Observação:
valores[10] = 6
console.log(valores) // eu acabei de colocar um elemento na décima posição, mas a 5ª, 6ª, 7ª, 8ª, 9ª ficam caracterizadas como "itens vazios". podem ser preenchidos depois.

// Array é heterogêneo, ele aceita multiplos valores, objetos, boolean, nulo, teste, etc.
valores.push({id: 3}, false, null, "teste") // Essa função PUSH, que adiciona novos elementos ao array.
console.log(valores)

// APESAR DE PODER, NÃO SIGNIFCA QUE VOCÊ DEVE CRIAR UM ARRAY COM DIVERSOS ELEMENTOS DISTINTOS. O IDEAL É CRIAR ARRAYS DE ELEMENTOS IGUAIS
// ARRAY DE TIPOS DE DADOS HOMOGÊMEOS DEIXAM SEUS CÓDIGOS MAIS ORGANIZADOS. PREZE POR ISSO. ORGANIZAÇÃO!

console.log(valores.pop())
// Essa função retira o último valor do array, no caso ali do array anterior é "teste". Mas dá para escolher qual elemento será retirado do array com outra função

delete valores[0] // esse delete funciona no contexto de objetos, para tirar um atributo de dentro de um objeto.
console.log(valores) // Ali dentro dos colchetes você pode retirar o qual elemento retirar com base em sua posição. Nesse caso o que está na posição zero.
// Viu? retirou tanto o elemento zero, quanto o último elemento, que foi feito na função "pop". excluiu a string "teste".

console.log(typeof valores)
// Em JS, um array é do tipo Object, é um objeto.