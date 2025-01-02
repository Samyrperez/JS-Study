//Array->Estructura de datos #1
//Estructuras de datos: NOs permite almacenar varios valores en una sola variable
//Son utiles cuando necesitamos manejar listados de elementos

//Sintaxis

//Forma #1 Es la reomendada
let myArray = []

//Forma #2: NO recomendada ya que no se comporta de la misma manera que nuestra primera sintaxis y es mas común cometer errores con esta.
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//Agregar un valor al Array
myArray = [1]
myArray2 = new Array(3)//A diferencia de lo anterior, aquí no agrega un elemento, lo que hace es reservar 3 espacios.
console.log(myArray)
console.log(myArray2)