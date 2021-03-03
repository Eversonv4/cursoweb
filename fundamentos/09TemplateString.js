const nome = 'Elisa'
const concatenacao = 'Oi, ' + nome + '!' 
const template = `
Como
    vai,
        ${nome}?
`
// Esse símbolo de dólar e as chaves é para que o JS interprete que dentro da string tem uma variável, que é para ele ir lá na variável e buscar o que tem dentro dela
// ao invés de mostrar de maneira literal "${nome}". Isso só funciona se a string for delimitada com crase. Se for aspas normal, ele vai jogar tudo 
// como está escrito "${nome}". Se reparar bem ele funciona como se estivesse chamando uma função dentro da própria variável "template".
// Essa string, ao invés de ser delimitada usando aspas, foi usada o símbolo de cráse (backtick, em inglês).
// Normalmente, você não deve quebrar a linha do texto no meio de uma string. vai dar erro. 
// Mas ao usar um processo chamado "interpolação", é possíve não só quebrar a linha no texto, mas a variável vai
// adquirir para si o formato do texto, todas as quebras de linhas, os espaçamentos, tudo. Do jeito que tu escrever
// vai aparcer lá.

console.log(template)
console.log(nome)
console.log(concatenacao)

// Um pouco mais sobre aquela expressão com o síbolo de dólar e as chaves

console.log(`2 + 2 = ${4 + 4}`)
// A conta está errada, mas agora ficou claro que fazer operação de soma dentro da string não funciona. Só trabalha com o que está dentro das chaves.
// Mas se você abrir um espaço "fora" da string com a expressão " ${} ", então dá para fazer o que quiser lá dentro.
// Inclusive, é até melho que ficar fazendo ("variavel A" + "variável B" + "Variável C" + etc).
// Já joga logo dentro que na hora de mostrar fica uma coisa só.

console.log("A conta está errada, mas olha os comentários. É importante!")


// O que vem adiante eu não sei muito bem como funciona, mas aparentemente é uma função. Nesse caso, é uma que torna as letras maiúsculas.

const up = texto => texto.toUpperCase() // Ao que posso entender esse símbolo => faz criar uma função
console.log(`Ei...${up('segure o Chan')}!!! `) // No caso => símbolo faz criar uma função, e o "up" é o nome que e dei para a função. 
// deixa ver...

const deixandoletramaiuscula = maiuscu => maiuscu.toUpperCase()
console.log(`Será que ${deixandoletramaiuscula('eu acertei?')}!?!`)
console.log(deixandoletramaiuscula('kkkkkk sim, uhuu!'))
console.log(up('legal'))