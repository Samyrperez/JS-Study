//Operadores
//Operadores Aritmeticos
let a = 5
let b =10
console.log(a+b)//Suma
console.log(a-b)//resta
console.log(a*b)//Multiplicacion
console.log(a/b)//división

console.log(a % b) //Módulo =residual de la divisón
console.log(a ** b) //Exponente

//Incremento
a++
console.log(a)
//Decremento 
b--
console.log(b)

//Operadores de asingación
let myVariable = 2
console.log(myVariable)
myVariable += 2  //De esta manera le sumo el mismo numero ejemplo (2+2), si myVariable valiera 4 entonces seria (4+4)
console.log(myVariable)

myVariable += 2 
myVariable -= 2 
myVariable *= 2 
myVariable /= 2
myVariable %= 2  

//Operadores de comparación
//Nos sirven para comparar variables o resultados
console.log(a > b)//mayor que----False
console.log(a < b)//Menor o igual
console.log(a >= b)//Mayo o igual
console.log(a <= b)//Menor o igual
console.log(a == b) //Iguales por valor
console.log(a == "6")//Aunque sea un type Date diferente, js identifica que son lo mismo
console.log(a === a) //Igualdar por identidad (Por tipo y valor)
console.log(a === 6) 
console.log(a != 6)//Distinto (a es distinto de 6)False debido a que tienen el mismo valor
console.log(a !== "6")//Distinto a nivel de Identidad(En este caso true)
console.log(0 == false)
console.log(1 == false)
console.log(undefined == null)


//Truthy values (valores verdaderos)

//Todos los numeros positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacias
//Todos los boolean

// Falsy values (valores falsos)

/* 0 , 0n , null, undefined, NaN, boolean false, cadenas de texto vacias.*/



//Operadores logicos  => NOs valen para comparar valores que en realidad tienen un valor booleanos, osea si es verdadero o falso.

//and (&&): las dos expresiones deben ser verdaderas para que el resultado sea true, si al menos una de las expresiones es falsa el resultado sera false.
console.log(5 > 10  && 15 > 20)//false
console.log(5 < 10  && 15 < 20)//true
console.log(5 < 10  && 15 > 20)//false
console.log(5 > 10  && 15 > 20)//false
console.log(5 > 10  && 15 > 20 && 30> 40)//false

//or (||) : Si se cumple minimo una de las comparaciones será verdadero
console.log(5 > 10  || 15 > 20)//false
console.log(5 < 10  || 15 < 20)//true
console.log(5 < 10  || 15 > 20)//true

console.log(5 > 10  && 15 > 20 || 30 < 40)//true: debido a que la comparación del and es false pero la del or es verdadera.

//not (!) : Niego el valor actual y lo invierto, si es falso sera verdadero y viceversa
console.log(!true)
console.log(!false)
console.log(!(5 > 10  && 15 > 20))//false
console.log(!(5 > 10  || 15 > 20))//false


//OPERADORES TERNARIOS: Permiten escrbir una condición, otra forma de escribir condicionales
const isRaining = true
//Se hace la pregunta despues del ? si es true imprimira o se ejecutará el codigo antes de los dos puntos. Si no se ejecuta lo que etsá despues de los dos puntos.
isRaining ? console.log("Está lloviendo") : console.log ("No está lloviendo") 