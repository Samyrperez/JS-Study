//Conditional Excercices
//if, else, else if, ternarias

// 1. Imprime por consola tu nombre si una variable toma tu su valor

/*let nom = "Samyr"

if (nom == "Samyr"){
    console.log("Tú nombre es Samyr")
}else{
    console.log("Tú nombre no es Samyr")
}*/

// 2. Imprime por consola un mensaje si el usuario y la contraseña coinciden con unos establecidos

/*const username = prompt("Ingrese una nombre de usuario: ")
const password = parseInt(prompt("Ingrese una contraseña: "))


if (password == 123457 && username =="Sam"){
    console.log("Username and Password Correct")
}else{
    console.log("Enter a correct password")
}*/

// 3. Verifica si un numero es positivo, negativo o cero e imprime un mensaje

/*let number = parseInt(prompt("Ingrese un numero: "))

if(number == 0){
    console.log("El numero ingresado es 0...")
}else if(number < 0){
    console.log("El numero ingresado es negativo...")
}else{
    console.log("El numero ingresado es positivo")
}console.log("Gracias por participar")*/

// 4. Verifica si una persona puede votar o no ( Mayor o igual a 18) e indica cuántos años le faltan

/*let age = parseInt(prompt("Ingrese su edad: "))
let aniosFaltantes 

if (age >= 18){
    console.log("El usuario es mayor de edad y puede votar")
}else if(aniosFaltantes = 18-age){
    console.log(`Te faltan ${aniosFaltantes} año para ser mayor de edad`)
}*/


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

/*let age = parseInt(prompt("Ingresa tu edad: "))
let faltante = 18 - age

let message = age >= 18 ? "Eres mayor de edad": `Eres menor de edad, te faltan ${faltante} años`
console.log(message)*/


// 6. Muestra en que estación del año nos encontramos dependiendo del  valor de una variable "mes".

//primera forma

/*let mes = prompt("Ingrese el nombre del mes: ").toLowerCase()
let season

if (mes == "enero"){
    season="invierno"
    console.log(`La estación del año es ${season}`)
}else if(mes == "febrero"){
    season="invierno"
    console.log(`La estación del año es ${season}`)
}else if(mes == "marzo"){
    season="Primavera"
    console.log(`La estación del año es ${season}`)
}else if(mes == "abil"){
    season="Primavera"
    console.log(`La estación del año es ${season}`)
}else if(mes == "mayo"){
    season="Primavera"
    console.log(`La estación del año es ${season}`)
}else if(mes == "junio"){
    season="Verano"
    console.log(`La estación del año es ${season}`)
}else if(mes == "julio"){
    season="Verano"
    console.log(`La estación del año es ${season}`)
}else if(mes == "agosto"){
    season="Verano"
    console.log(`La estación del año es ${season}`)
}else if(mes == "septiembre"){
    season="Otoño"
    console.log(`La estación del año es ${season}`)
}else if(mes == "octubre"){
    season="Otoño"
    console.log(`La estación del año es ${season}`)
}else if(mes == "noviembre"){
    season="Otoño"
    console.log(`La estación del año es ${season}`)
}else if(mes == "diciembre"){
    season="Invierno"
    console.log(`La estación del año es ${season}`)
}else{
    console.log("Escriba un mes del año valido")
}*/

//segunda forma
/*if(mes === "enero" || mes === "febrero" || mes === "diciembre"){
    season = "Invierno"
}else if(mes === "marzo" || mes === "abil" || mes === "mayo"){
    season = "Primavera"
}else if(mes === "junio" || mes === "julio" || mes === "agosto"){
    season = "Verano"
}else if(mes === "septiembre" || mes === "octubre" || mes === "noviembre"){
    season = "Otoño"
}else{
    console.log("Ingrese un mes del año valido")
}

if (season){
    console.log(`La estación del año es ${season}`)
}*/

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior switch

/*
let month = prompt("Ingrese el nombre del mes: ").toLowerCase()
let days

switch (month){
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        days=31
        break

    case "noviembre":
    case "abril":
    case "junio":
    case "septiembre":
        days=30
        break

    case "febrero":
        //Determinamos si el año es bisiesto, si es bisiesto tendra 29 dias, si no tendra 28 dias. Para ser bisiesto el año debe ser divisible entre 4.
        //reglas para ser un año bisiesto:
        //1.Divisible entre 4 
        //2.Divisible entre 400
        //3. Si es divisible entre 100 no es bisiesto
        let anio = parseInt(prompt("Ingrese el Año: "))
        if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)){
            days=29//año bisisesto
        }else{
            days=28//año no bisisesto
        }
        break

    default:
        console.log("Escriba un mes válido.")
}
if(days){
    console.log(`El mes de ${month} tiene ${days}`)
}*/

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

/*let message
let lenguage = prompt("Escribe el nombre del idioma  en que deseas saludar: ").toLowerCase()

switch (lenguage){
    case "español":
        message="Hola"
    case "ingles":
        message="hello"
    case "frances":
        message="Bonjour"
    case "portugues":
        message="olá"
    case "mandarin":
        message="Ní Háo"
    break

default:
    message = ("Ingresa un idioma valido: Ingles o español...")
}
console.log(`Tu saludo en ${lenguage} es ${message}`)*/
// 9. Usa un switch para hacer de nuevo el ejercicio 6

let month =prompt("Ingrese el nombre del mes: ").toLowerCase()
let season 

switch (month){
    case "enero":
    case "febrero":
    case "diciembre":
        season = "Invierno"
        break

    case "marzo":
    case "abril":
    case "mayo":
        season = "Primavera"
        break

    case "junio":
    case "julio":
    case "agosto":
        season = "Verano"
        break

    case "septiembre":
    case "octubre":
    case "noviembre":
        season = "Otoño"
        break

default:
    season = "Nombre del mes ingresado no valido..."
}
console.log(`El mes de ${month} pertenece a la estación ${season}`)
// 10. Usa un switch para hacer de nuevo el ejercicio 7

