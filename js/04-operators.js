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
