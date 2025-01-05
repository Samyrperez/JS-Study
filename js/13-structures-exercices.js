// 1. Crea un array que almacene 5 animales
let animals = ["Elefante", "Gato", "Perro", "Ratón","Tigre"]
console.log(typeof(animals))
console.log(animals)

// 2. Añade dos mas . Uno al principio y otro al final

animals.push("mono", "serpiente")//Agregar al final
console.log(animals)

animals.unshift("culebra", "hormiga")//Agregar al inicio
console.log(animals)

// 3. Elimina el que se encuentra en la tercera posicion.

animals.splice(2, 1)
console.log(animals)

// 4. Crea una set que almacene cinco libros

let libros = new Set(["libro 1","libro 2","libro 3","libro 4","libro 5" ])
console.log(libros)

// 5. Añade dos mas. Uno de ellos repetidos

libros.add("libro 6", "libro 5")// nunca añadira un valor repetido
console.log(libros)

// 6. Elimina uno concreto a tu eleción.

libros.delete("libro 6")
console.log(libros)

// 7. Crea un mapa que asocie el numero del mes a su nombre

let mesAnio = new Map([
    ["Enero", 1],
    ["Febrero", 2],
    ["Marzo", 3],
    ["Abril", 4],
    ["Mayo", 5],
    ["Junio", 6],
    ["Julio", 7],
    ["Agosto", 8],
    ["Septiembre", 9],
    ["Octubre", 10],
    ["Nomviembre", 11],
    ["Diciembre", 12]
]);
console.log(mesAnio)

// 8. Comprueba si el mes numero 5 existe en el map e imprime el valor

console.log(mesAnio.has("Mayo"))


// 9. Añade al mapa una clave con un array como que almacene los meses de verano
let mapVerano = new Map()
let mesVerano = ["Junio", "Julio", "Agosto"]


mapVerano.set("meses de Verano",mesVerano)
console.log(mapVerano)

// 10. Crea un array, transformalo a un set y almacenalo en un map

let myArray = [1, 2, 3, 4]
let myName = ["Samyr", "Lola", "Mima"]

let myMapSet = new Map()

mySet_array = new Set(myArray)
console.log(mySet_array)

myMapSet.set("Claves Set", mySet_array)
console.log(myMapSet)

myMapSet.set("Names",myName)
console.log(myMapSet)

