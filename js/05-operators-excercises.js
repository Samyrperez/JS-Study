//1. crea una variable para cada operación aritmetica
let numb1 = 5
let numb2 = 10
let numb3 = 6
let numb4 = 13
const myConst = 10
const myConst_2 = 10

console.log(numb1 + numb2)
console.log(numb1 - numb2)
console.log(numb1 * numb2)
console.log(numb1 / numb2)

console.log(numb1 % numb2)
console.log(numb1 ** numb2)


//2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas.

numb1 += 2
numb1 -= 2
numb1 *= 1
numb1 /= 1
numb1 %= 2

console.log(numb1)


//3. Imprime 5 comparaciones verdadera con  diferentes operadores de comparación

console.log(numb1 < numb2)
console.log(numb3 < numb2)
console.log(numb4 > numb2)
console.log(numb2 != numb3)
console.log(myConst === numb2)

//4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion
/*let numb1 = 5
let numb2 = 10
let numb3 = 6
let numb4 = 13
const myConst = 10
const myConst_2 = 10*/

console.log(numb1 != numb1)
console.log(numb2 == numb3)
console.log(myConst !== myConst_2)
console.log(numb1 == numb3)
console.log(numb1 == numb3)


//5. Utiliza el operador logico and
console.log(myConst == myConst_2 && numb2 == myConst)//true
console.log(myConst !== myConst_2 && numb2 == numb3)//false

//6. utiliza el operador logico or.
console.log(myConst == myConst_2 || numb2 == numb3)//true
console.log(myConst !== myConst_2 || numb2 !== myConst)//false
//7. Combina ambos operadores logicos.


//8. Añade alguna negación

//9. Utiliza el operador ternario.

//.Combina operadores operadores aritmeticos, de comparación y logicos.