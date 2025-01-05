// Continuación estructuras
// Estructura de datos #2
// Set :  Es una estructura de datos que almacena valores únicos de cualquier tipo, ya sean primitivos u objetos.
// Aunque es un listado no teemos acceso a los indices, solo a sus valores


// Declaración
let mySet = new Set()// Declaramos la variable set
console.log(mySet)

// Inicialización
mySet = new Set(["30", "PRogramación", "31" ,"Samyr", 50])

console.log(mySet)

// Metodos comunes

// add y delet

mySet.add("Samyr Peréz")// add para añadir al final
console.log(mySet)

mySet.delete("Samyr Peréz")// Para borrar debo indicarle el valor del elemento a borrar
console.log(mySet)

console.log(mySet.delete("30"))// retorna un true si el elemento que queremos borrar existe y ha sido borrado. y false si el eelemento no existe

console.log(mySet)

//ejemplo:
if (mySet.delete("30")){
    console.log("Tú elelentno ha sido borrado")
}else {
    console.log("Tú elemento no existe. Ingresa un valor que exista")
}

// has :Con has podremos comprobar si el elemento existe o no

console.log(mySet.has("PRogramación"))// Si existe retornará true, de lo contrario retorna false


// size : Longitud de le elemento

console.log(mySet.size)// Nos retorna el numero de elelemtos en el set

// Convertir un set a array

let myArray = Array.from(mySet)// COnvertimos el set a un array
console.log(myArray)

// Convertir un array  a set 
mySet = new Set(myArray)
console.log(mySet)


//No admite Duplicados, lo elelemtos son unicos, con contenido o valores unicos
mySet.add("30")
console.log(mySet)

