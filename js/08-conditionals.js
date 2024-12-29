/*Condicionales
Nos permite ejecutar cierto codigo si es verdadero o falso o si se cumplen ciertas condiciones
*/
//Estos se puden juntar en 3 bloques
//if, else if, else


//if (sí)
let age = 20

//condicion dentro del parentesis
/*if(ege == 37){
    //bloque de codigo
    console.log("La edad es 37")
}*/

//else(sí no)
/*if(ege != 37){
    //bloque de codigo
    console.log("La edad no es 37")
}else{//si no se ejecuta este codigo
    console.log("La edad no es 37 años")
}*/

//else if(sí no, sí): Otra condición la cual si 
/*if(age == 37){
    //bloque de codigo
    console.log("La edad es 37")
}else if(age < 18){//Solo se ejecutará si la edad es menor de edad
    console.log("Es menor de edad")
}else if(age >= 18 && age <=37){
    console.log("Es mayor de edad")
}else{//si no se ejecuta este codigo, caso por defecto
    console.log("La edad no es 37 años ni es menor de edad")
}*/

//Operadores ternarios: UNa forma mas compacta de escribir un condicional
//Revisiíon del if - que hacemos si se cumple - que hacemos si no se cumple
//const message = age == 37 ? "La edad es 37": "La edad no es 37"
//console.log(message)

//switch: Es una alternativa para anidar en vez de usar if, else if
//Esto se hace cuando debemos comparar muchas condiciones con una sola variable
let day = 3
let dayName

/*if (day == 0){
    dayName = "Lunes"
} else if(day == 1){
    dayName = "Martes"
}......Este seria una ejemplo donde usariamos el "switch"*/

switch (day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"//revisa
        break//si cumple sale del bloque y deja de revisar el resto
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default://Lo usamos para q  ue reemplase el else que usariamos en un if, en caso tal no se cumpla lo anterior
        dayName = "Numero de Día incorrecto"
}
console.log(dayName)