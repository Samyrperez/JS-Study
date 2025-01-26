// Funciones: Es un bloque de codigo diseñado para realizar una funcion en especifico. Es necesario invocarla
// Necestamos crear codigo que se pueda reutilizar

// Simple
function myfunc(){
    console.log("hello, function")// Codigo a ejecutar
}
myfunc()

for (let i = 0; i < 5; i++){
    myfunc()// Se imprimirá 5 veces
}



// Con parametros

function muFuncWithParams(name){
    console.log(`!hola, ${name}¡`)
}
muFuncWithParams("Samyr")// Se le pasa el parametro al name

// Funciones anonimas: No tienenn un nombre definido
// Estas funciones anonimas se le deben asignar a una variable o constante, de otra manera no tendria como poder invocarla.
const myfunc2= function (name){
    console.log(`!hola, ${name}¡`)
}
myfunc2("Samyr Perez")


// Arrow(Flecha) functions 

const myFunc3 = (name) => {
    console.log(`¡hola, ${name}!`)
}
const myFunc4 = (name) => console.log(`¡hola, ${name}!`)


myFunc3('Samyr Perez')
myFunc4('Samyr Perez')


// Parametros
function suma(a, b){
    console.log(a + b)
}
suma(5 , 10)
suma()// Imprimirá NAM debido a que no le estoy dando valores

// Por defecto

function defaultSuma(a = 0, b = 0){
    console.log(a + b)
}

defaultSuma()// Imprimirá 0
defaultSuma(5)
defaultSuma(5,10)

// Retorno de valores

function multi(a, b){
    return a * b
}

let result= multi(5, 10)
console.log(result)

// Funciones anidadas

function extern(){
    console.log("funcion Externa")
    function intern(){
        console.log("Función Interna")
    }
    intern()
}
extern()
// intern() Error: fuera del scope


// Funciones de orden superior: Reciben otras funciones como argumentos

function applyFunc(func, param){
    func(param)
}
applyFunc(myFunc4,"Función de orden superior")

// forEach: funcion que sirver para ejecutar bucles a funciones iterables

myArray = [1, 2, 3, 4]
// primera forma de usarlo
myArray.forEach((value) => console.log(value))

// segunda forma de usarlo

myArray.forEach(function(value){
    console.log(value)
})

myMap = new Map([
    ["name", "Samyr"],
    ["email", "Sam@gmail.com"],
    ["age", 31]
])
mySet = new Set(["30", "PRogramación", "31" ,"Samyr", 50])
mySet.forEach((value) => console.log(value))
myMap.forEach((value) => console.log(value))