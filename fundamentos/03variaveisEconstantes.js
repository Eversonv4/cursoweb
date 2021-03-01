var a = 3
    console.log(a)
let b = 4
    console.log(b)
c = a * b //Não precisa usar var ou let para atribuir valores à uma variável.

    console.log('Quanto dá 3 x 4?')
    console.log('Acho que é', c) //Como pode ver, a vírgula separa as sentenças a serem mostradas.
    console.log(a,b,c)

/* Perceba que com o "var" vc pdoe reatribuir valores para a mesma variável
    ele meio que substitui o valor anterior pelo novo
    mas no caso do "let" ele não deixa fazer isso
    ele torna aquela variável exclusiva para aquele valor que tu deu.
    EXECUTE O PROGRAMA E VEJA
*/
var h = 1
let i = 2
var h = 3
let g = 5
console.log(h, i)

/* Se por acaso vc mudar o nome da variável, tirar o segundo "I" e colocar outra letra
   ou qualquer outra palavra, o programa roda tranquilo. Pois nesse caso, vc está atribuindo
   outro lugar na memória para aquele valor (o número 5, no caso), um lugar desocupado.
*/

const fuckyou = 666 
console.log(fuckyou)

    // É fácil entender que você não pode atribuir um novo valor da constante.