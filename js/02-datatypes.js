//Hay diferente tipos de datos:
//Son los datos en lsoq ue se fundamentan la interaccion con el lenguaje, son inmutables, representan un valor y por eso son primitivos. Son los basicos del lenguaje, basicos e inmutabeles.
//Son 7 tipos de datos
//Cadena de texto "String"
let myname = "Samyr Perez"
let alias = "Sam"

//Números "Numbers"
let ege = 23//Entero
let altura = 1.77//Decimal

//Booleanos
let isTeacher = true
let isStudent = false

//Undefined
let undefinedValue//No definida o inicializadas.
console.log(undefinedValue)

//Null
let nullValue = null //Más adelante esta variable podria tener un valor, solo le indicaremos que este valor es nulo.

//Symbol
let mySymbol = Symbol("mysymbol")//Los symbolos representan valores unicos

//BinInt  "Gran entero"
let myBinInt = BigInt(88888888888888888484884848488484848484848848848484)//Se usa cuando el numero es demasiado grande y no puede ser representado con el tipo primitivo number
let myBinInt2 = 88888888888888888484884848488484848484848848848484n

//Para mostrar los tipos de datos usamos "typeof"
console.log(typeof mySymbol)
console.log(typeof isTeacher)
console.log(typeof myname)
console.log(typeof ege)
console.log(typeof isStudent)
console.log(typeof myBinInt2)
