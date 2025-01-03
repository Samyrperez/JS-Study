//Array->Estructura de datos #1
//Estructuras de datos: NOs permite almacenar varios valores en una sola variable
//Son utiles cuando necesitamos manejar listados de elementos

//Sintaxis

//Forma #1 Es la reomendada
let myArray = []//

//Forma #2: NO recomendada ya que no se comporta de la misma manera que nuestra primera sintaxis y es mas común cometer errores con esta.
let myArray2 = new Array()//Array mas puro con estructura de datos, pero no la mas facil

console.log(myArray)
console.log(myArray2)


//Inicialización

//Agregar un valor al Array
myArray = [1]
myArray2 = new Array(3)//A diferencia de lo anterior, aquí no agrega un elemento, lo que hace es reservar 3 espacios. 
console.log(myArray)
console.log(myArray2)

myArray =[1, "PRogramación", 31 ,"Samyr"]//Guardar varios valores
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

//Como ir agregando valores poco a poco
myArray2 = new Array(3)//Inicializo mi array con 3 casillas, no es necesario hacerlo, sin embargo esto ayudaria a que si dejo espaciós vacios estos se reserven para el Array.
myArray2[0] = "Samyr"//Añadimos en cada posicición
myArray2[1] = "David"
myArray2[2] = "Perez"

console.log(myArray2)

//De la otra forma
myArray = []
myArray[0] ="Samyr"
myArray[1] ="Davíd"
myArray[2] ="PEréz"
myArray[3] ="Pabón"

console.log(myArray)

//Métodos comunes

myArray= []

// push y pop
//- Push sirve para agregar elementos en el Array
myArray.push("Samyr")
myArray.push("David")
myArray.push("Perez")
myArray.push(31)
console.log(myArray)

//- Pop Elimina el ultimo elemento del array

console.log(myArray.pop())//Tambien podriamos imprimir lo que elimina

//shift y unshift

console.log(myArray.shift())//Elimina el primer elelemento de la lista
console.log(myArray)

myArray.unshift("Sam", "Anton")//Sirve para agregar uno o mas elementos al principio del Array
console.log(myArray)

// length: Es una propiedad en este caso

console.log(myArray.length)//.length en este caso se´ra una propiedad mas no una función
//Este me retorna la longitud de mi ArraY , En este caso 4


// clear : Para borrar un array

myArray = []//Para borrar solo lo incializo en 0
console.log(myArray)

// slice : Para tomar una porción del array
myArray.push(1, "Programación", 31 ,"Samyr")

let myNewArray = myArray.slice(1, 3)//Es un margen del 1-3(espacios) pero el ultimo indice no lo tomara, en este caso solo tomaria el indice 1-2 e imprimiria "Programación", 31 
console.log(myNewArray)

//splice: Elimina los elementos pero dentor del rango que le establezcamos






