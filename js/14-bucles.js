// loops o bucles : Estructura de control para revisar un condico mientras que la condicion sea verdadera y poder repetirlo

//  for: Ejecutarse cada wue se realice  una iteración o se recorra mientras sea true.
/* for (expression 1; expression 2; expression 3) {
   //  code block to be executed
} */
// La expresión 1 se ejecuta (una vez) antes de la ejecución del bloque de código.
// La expresión 2 define la condición para ejecutar el bloque de código.
// La expresión 3 se ejecuta (cada vez) después de que se haya ejecutado el bloque de código.

for (let i = 0; i < 5; i++){
    console.log(`Hola ${i}`)
};


const numbers = [1, 2, 3, 4, 5, 6, 7]

/*for (let i = 0; i < 5; i++){
    console.log(`Elemento: ${numbers[i]}`)
}*/

for (let i = 0; i < numbers.length; i++){//Con el .lenth recorreremos todo el array sin importar la cantidad de elementos que tengamos
    console.log(`Elemento: ${numbers[i]}`)
}

// while : evaluarse antes de cada iteración, recorre un bloque de código siempre que una condición especificada sea verdadera.
//while (condition) {
  // code block to be executed
//}
//a diferencia del for en este caso mi variable i ya debe estar definida
let i = 0
while (i < 5){
    console.log(`Hola while${i}`)
    i++
}
// Bucle infinito
// while(true){

// }

// do while: Este bucle ejecutará el bloque de código una vez, antes de verificar si la condición es verdadera, y luego repetirá el bucle mientras la condición sea verdadera.
/*do {
    // code block to be executed
  }
  while (condition);*/

i = 0
do {
    console.log(`Hola do ${i}`)
    i++

} while (i < 5)


// for of: recorre los valores de un objeto o algo que sea iterable.
/*for (variable of iterable) {
  // code block to be executed
}*/

myArray = [1, 2, 3, 4]
myMap = new Map([
    ["name", "Samyr"],
    ["email", "Sam@gmail.com"],
    ["age", 31]
])
mySet = new Set(["30", "PRogramación", "31" ,"Samyr", 50])

for (let valor of myArray){
    console.log("for of")
}// imprimirá 1, 2, 3, 4
for (let valor of myMap){
    console.log("for of")
}//