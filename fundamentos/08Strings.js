// São delimitadas por aspas simples ou duplas. Se abrir com aspas simples, fecha com ela também. O mesmo vale para ambas.

const empresa = "google"
console.log(empresa.charAt(4)) 
// Eu posso não ser o falante de inglês, mas tenho a impressão que esse "charAt" é uma abreviação
// de "charactere At" ou em português rústico BR, "caractere em".
// Já dá para ter uma noção que o que ela faz é selecionar o caractere que está em "número dentro do parênteses"
// No caso ali é um 4, então ele vai me mostrar qual caractere está na 4ª posição. Mas como computador conta
// a partir do zero em diante, tenho quase certeza que vai mostrar a letra L.
// acertei.

console.log(empresa.charAt(8))
// Se tu coloca uma posição de caractere que não existe, no caso "google" possui 6 letras.
// No caso o pc conta: {0, 1, 2, 3, 4, 5}
// Se colocar um valor que caractere que não tem, como no caso do 8. O JS vai mostrar um espaço vazio.
// Outras linguagens simplesmente daria um erro. JS é um pouco mais gentil e prossegue com ocódigo e no erro ele não dá nada.
// Na dúvida, não erre.

console.log(empresa.charCodeAt(3))
// Nessa situação, a função ela vai olhar qual o caractere está na posição tal e vai apresentar qual o quanto
// aquele caractere vale na "Tabela Ask" ou "Tabela Unicode". TODO caractere tem um número específico na tabela.
// Dependendo da fonte, tu pode confundir as letras, mas se olhar o código relacionado tu vai conferir e não tem erro.
// Na posição 3ª, a letra G, tem como código o número 103.

// IMPORTANTE!!!!!!!!!!!!!

// CARACTERES MAIÚSCULOS E MINÚSCULOS SÃO CONSIDERADOS CARACTERES DISTINTOS.

console.log(empresa.indexOf('o'))
console.log(empresa.indexOf('e'))
// Nesse caso, ele fez o oposto da função anterior. Aqui eu "falei" pro pc "Em qual posição está a letra 'o'? "
// Ele respondeu na tela "1", ou seja, na 1ª posição. Com a letra E foi a mesma coisa, e ele deu o resultado 5ª posição.
// Agora testando com a letra G.
console.log(empresa.indexOf('g'))
// Ele deu a posição 0. justamente como foi dito, ele conta partindo do zero.
// outro detalhe, ao pesquisar pelo próprio caractere em si, ele vai naquele que aparece primeiro.
// temos G na posição zero e três, mas ele deu somente o valor da que veio primeiro, no caso, zero.

console.log(empresa.substring(1))
// Essa função substring, ela meio que delimita os caracteres da sua string partindo do índice colocado dentro dos parênteses até o último indíce da cadeia de caracteres (string).
// E para fazer essa delimitação, a leitura é feita a partir do índice que está dentro dos "()" em diante.
// Nesse caso, com o índice 1, ele vai sumir com a primeira letra (que está no índice zero) da string e mostrar o resto.
// Mas daria pra retirar qualquer outro caractere. por exemplo.
// Vamos retirar os caracteres do índice zero e 1, mostrando assim o resultado "ogle".
console.log(empresa.substring(2))
// Beleza

console.log(empresa.substring(1, 4)) 
// Nesse caso, ele delimitou as posições, mas ele fecha antes de chegar no último índice em questão.
// Em outras palavras: G O O G L E --> SEUS ÍNDICES/posições: {0, 1, 2, 3, 4, 5}
// SE EU DELIMITO EM (1, 4), ele considera o primeiro parâmetros (1), e pára antes do segundo parâmetros (4).
// Ou seja, ele só vai mostrar os caracteres que estão nos índices {1, 2, 3}
// Ou seja (x2): G {O O G} L E

console.log(empresa.substring(0, 2)) 
// Vai mostrar {"G O"}.

console.log("A empresa ".concat(empresa).concat(' está a um passo da dominação mundial.'))
// Isso aí é pra juntar literais dentro de uma frase, por exemplo. Dá pra usar outros caracteres como o sinal de mais ou vírgula. 
// (lembra que dava pra multiplicar um valor dentro da string, mas não dava pra somar? então, é isso. o sinal de + quando está no contexto de string, ele tem a função de juntar unir coisas)

console.log("A empresa ", empresa, " está a um passo da dominação mundial.")
console.log("A empresa "+ empresa +" está a um passo da dominação mundial.")
// Viu? dá pra usar + ou ,
// Com a vírgula, ele já dá o espaçamento normal entre os trechos, sem precisar pôr espaços no fim do conteúdo entre aspas
// Assim: "qualquer coisa " <-- aqui tem espaço no fim, mas se tu separar os trechos por vírgula, então não precisa colocar esse espaço no fim ou no início.

console.log("A empresa", empresa, "está a um passo da dominação mundial.")
// percebeu a diferença no espaçamento de "google"? é isso aí.

console.log(empresa.replace('g', 'D'))
// Como o próprio nome da função já deixa claro o que faz, ela substitui um(ns) caractere por outro(s).
// O primeiro parâmtro é o que está lá dentro da string, e o segundo é aquele pelo qual será substituido.

console.log(empresa.replace('oo', 'u'))
// Tiramos duas letras "oo" e colocamos somente uma "u".

const besta = "HELL-666"
console.log(besta)
console.log(besta.replace(666, 234))
console.log(besta.replace("HELL-666", "Links 234"))
// Como pode ver, dá para substituir caracteres numéricos também e nem precisa colocá-los entre aspas.
// Lembre-se dos caracteres, se na string está maiúsculo, escreve maiúsculo nos parâmetros. Senão ele não lê.
// Repetindo: caracteres maiúsculos e minúsculos têm endereço diferente na tabela ask (ou Unicode).

console.log(besta.replace(besta, 'Olá mundo'))
// Por essa eu não esperava, dá pra linkar a variável diretamente sem precisar digitar algo que esteja escrito na string.
// #Mestre-Dos-Codigos #Tehc #Deus-Da-Tecnologia

console.log("Eu, Você, Filhos, Cachorro".split(/,/))
// convertendo string em array
// Essa função split, ela lê os elementos dentro da string e pode separar alguns grupinhos para transformá-los em array
// arrays são mais ou menos matrizes. entende? aquelas 2x2, 4x4, 3x5, 6x3, etc.
// Nos "()" tu coloca o que servirá de parâmetro para que ele saia picotando as coisas. Mas dá pra usar também as barras inclinadas para a direita como se fossem aspas, mas foda-se, na real. Usa as aspas mesmo.
// nesse caso eu usei a vírgula (",")
// ele fará uma leitura da minha frase e onde tiver vírgula, ele pega aqueles caracteres e os armazena num lugar diferente
// Fica mais tipo assim, é como se fosse uma matriz "1x4" -->> ['Eu' , 'Você' , 'Filhos' , 'Cachorro']
// Olhando para as aspas ', dá pra saber quais os caracteres específicamente que essa função recolheu para criar a matriz.
// Dá até pra pegar os emails de um formulário e transformar na lista de emails, separando-os usando essa função. Acredito que aqueles formulários da faculdade fazem um esquema desses por trás.