// Estructura de datos #3
// Map
//  Cada elemento esta formado por un par (clave, valor)

// declaracion o sintaxis

let myMap = new Map()
console.log(myMap)

// Inicialización
// Clave,valor: ([[clave,valor],[clave,valor]])
myMap = new Map([
    ["name", "Samyr"],
    ["email", "Sam@gmail.com"],
    ["age", 31]
])

console.log(myMap)

// Metodos y propiedades

// set : Para actualizar(si la clave existe) o agregar un elemento(si la clave no existe )
myMap.set("alias","Sam")// Agregar un elemento
myMap.set("name","Sammy")// Actualizar un elemento

console.log(myMap)

// get: Para recuperar el valor

myMap.get("name")
console.log(myMap)

// has: Para comprobar si una clave existe o no

console.log(myMap.has("name"))// Inprimirá true
console.log(myMap.has("namen"))// Imprimira flase

// delete: eliminar una clave

myMap.delete("email")
console.log(myMap)

// keys, values y entries


console.log(myMap.keys())//devuelve las claves
console.log(myMap.values())//devuelve los valores
console.log(myMap.entries())//Devuelve todo el listado


// size : cuenta el numero de elementos dentro del map

console.log(myMap.size)


// clear: Borrar todo el map

myMap.clear()
console.log(myMap)



