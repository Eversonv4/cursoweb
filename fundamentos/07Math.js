// Math é mais um dos objetos que existem em JS. E dentro desses objetos tem várias coisas que eu ainda não sei porque ainda não cheguei nessa parte.
// Java script não tem operador de exponenciação. Então para fazer isso, dá pra usar esse objeto Math
// Ou multiplicar várias vezes (mas isso não é necessário se dá pra usar o objeto, certo?)

// Vamos tentar calcular a área de um círculo.

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2) 
// PI (3,1415...) e pow, são constantes dentro de Math e "pow" significa "power" (potência)
// Dentro de "Math.pow" temos dois parâmetros: 1º é a base da potência (no caso o raio); 2º o expoente.

console.log(area.toFixed(3))

console.log(typeof Math) // executou? Math é um "object". Mas lembra de "Number", com "N" maiúsculo? aquilo era função, mas Math é objeto.
console.log(typeof Number) // Só ver aí.