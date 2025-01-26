// 1.Crea una funcion que reciba dos numeros y devuelve su suma

// 2. Crea una función que reciba un array de números y devuelva el mayo de ellos

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

// 4.Crea una función que reciba un array de string y devuelva un nuevo array con las string en mayusculas

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos array y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea uan funcion que reciba un array de números y devuelva la suma de toso los números pares

// 8. Crea una función que reciba un aray de numeros y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una funcion que calcule el factorial de un número.


// Crea una funcion que reciba el radio de una circunferencia y muestre la longitud y superfiecie.

let radio = parseFloat(prompt("Ingresa el valor del radio: "))
let longitud = 2 * Math.PI * radio
let superficie = Math.PI * Math.pow(radio, 2)

console.log("La longitud del circulo es: " + longitud)
console.log("La superficie de un circulo es: " + superficie)
