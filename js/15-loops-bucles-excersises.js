// Ejercicios bucles

// 1. Crea un bucle que imprima los números del 1 al 20.

//  Solución
let myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// Primera forma
/*

for (let i = 0; i <= 20; i++){
    console.log(`Number ${i}`)
}

*/

// Segunda forma
/*
for (let i = 0 ; i <= 20; i++){
    if (i == 0){
        continue
    }
    console.log(`Number ${i}`)
}

*/

// Tercera forma: Recorriendo un array con .lentjh
/*

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i])
}

*/



// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado.

// Primera forma
/*

let suma = 0

for (let i = 1; i <=100; i++){
    suma += i
    console.log(suma)
}
console.log(`La suma de los números del 1 al 100 es ${suma}`)

*/





// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

// Primera forma
/*

for (let i = 1; i <= 50; i++){
    if(i % 2 === 0){
        console.log(`El numero ${i} es par`)
    }else{
        console.log(`El numero ${i} es impar`)
    }
}

*/

// Segunda forma

/*
for (let i = 2;i <= 50; i += 2){
    console.log(i)
}

Aunque la primera fomra es mas eficiente
*/

// 4. Dado un array de nombres, unse un bucle para imprimir cada nombre en la consola.

let names = ["nombre 1", "nombre 2", "nombre 3", "nombre 4", "nombre 5", "nombre 6"]

// primera forma
/*
for (let valor of names){
    console.log(`Los nombres del Array son ${valor}`)
}
*/

// Segunda forma 
/*
for(let i = 0; i < names.length; i++){
    console.log(`Los nombes de mi array son ${names}`)
}
*/




// 5. Escribe un buble que cuente el numero de vocales en una cadena de texto.

/*
let texto = prompt("Ingrese una frase:")
let vocales = "aeiouAEIOU"
let contador = 0

for (let i = 0; i < texto.length; i++){
    if (vocales.includes(texto[i])){//includes: Verifica si el carácter actual está dentro de la lista de vocales.
        contador++
    }
}

console.log(`El número de vocales en la cadena de etexto es: ${contador}`)

*/

// 6. Dado un array de números, use un bucle para multiplicar todos los numeros y mostrar el producto.

// Primera forma: for
/*

let myNewArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let multi = 1;

for (let i = 0; i < myNewArray.length; i++){
    multi *= myNewArray[i]
    console.log(`${multi}`)
}
console.log(`La multiplicación de los numeros de mi array es: ${multi}`)
*/

// Segunda forma

/*
let numeros = [2, 3, 4, 5];
let producto = 1;

for (let numero of myNewArray) {
    producto *= numero; // Multiplica cada número
}


console.log(`El producto de los números es: ${producto}`);

*/

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.

/*
let tableArray = [1,2,3,4,5,6,7,8,9,10]
let multiplicador = parseInt(prompt("Ingrese un numero"))
let resultado = 0
*/

// primera forma
/*

for (let i = 0; i < tableArray.length; i++ ){
    resultado = multiplicador * tableArray[i]
    console.log(`${multiplicador} x ${tableArray[i]} = ${resultado}`)
}
*/

// Segunda forma: Mejoras, Validación del input del usuario

/*
if(isNaN(multiplicador)){
    console.log("Por favor, Ingresa un numero valido")
}else {
    for (let i = 0; i < tableArray.length; i++ ){
        resultado = multiplicador * tableArray[i]
        console.log(`${multiplicador} x ${tableArray[i]} = ${resultado}`)
    }
}
*/

// tercera forma: Personalizar el rango de la tabla
/*

let multiplicador = parseInt(prompt("Ingrese un numero"))
let rango = parseInt(prompt("Ingrese hasta eu numero desea multiplicar"))

if (isNaN(multiplicador || isNaN(rango))){
    console.log("Por favor, Ingresa numeros válidos")
}else{
    for(let i = 1; i <= rango; i++)
        console.log(`${multiplicador} x ${rango} = ${multiplicador * i}`)
}

*/

// 8. Usa un bucle para invertir una cadena de texto.

// let invertida = ""
// let text = prompt("Ingresa una cadena de texto")

// Primera forma

/*
for (let i = text.length - 1; i >= 0; i--){//i-- significa "resta 1 a i
    invertida += text[i]//En cada iteración, toma el carácter actual de la cadena (usando el índice i) y agrégalo al inicio de la nueva cadena.
    
}
console.log(invertida)
*/

// Mejoras: Validación

/*
if(!text){
    console.log("No ingresaste ninguna cadena")
}else{
    for(let i = text.length - 1; i >= 0; i--)
        invertida += text[i]
}
console.log(invertida)

*/

// 9. Una un bucle para generar los primeros 10 numeros de la secuencia de fibonaccí.

/*
let a = 0
let b = 1

console.log(a)
console.log(b)

for (let i = 2; i < 10; i++){
    let siguiente = a + b
    console.log(siguiente)
    a = b
    b = siguiente
}
*/

// 10. Dado un array de números , una un bucle para crear un nuevo array que contenga solo números mayores a 10.

// let number = [1,2,3,4,5,20,32,34,12,10,11,22,25,40,23]
// let mayorA10 = []

/*
for (let i = 0; i < number.length; i++){
    if(number[i] !== undefined && number[i] >= 10){
        mayorA10.push(number[i])
    }else{
        console.log(`El numero ${number[i]} es menor a 10`)
    }
}

console.log(`Los numeros mayor a 10 son : ${mayorA10}`)
*/