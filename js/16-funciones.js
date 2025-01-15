// Funciones: Es un bloque de codigo diseñado para realizar una funcion en especifico. Es necesario invocarla


// Simple
function myfunc(){
    console.log("hello function")
}

myfunc()

for (let i = 0; i < 5; i++){
    myfunc()
}

// Con parametros

function myfuncWithParams(name){
    console.log(`¡Hola, ${name}!`)
}

myfuncWithParams("Samyr")
myfuncWithParams("Perez")

// Funciones anonnimas

function(name){
    
}
