

/* Funciones declaradas [se puede invocar a la función antes o despues] */
function saludarAsantiago1() {
  console.log(`Hola Santiago`)
}

/* funciones expresadas [tener en cuenta que al invocarla debe ser LUEGO de definirlas]*/
const saludarAsantiago2 = function() {
 console.log(`Hola Santiago`) 
}

// Arrow functions (funciones flecha) [se omite la palabra 'function', no es necesario indicar "simbolo de llaves" y de forma implícita es return]
const saludarAsantiago3 = () => `Hola Santiago`

let nombre = saludarAsantiago3()
console.log(nombre)



// Parámetros (variables temporales)
const saludar = function(nombre, estudiante = true) {
  
    if (estudiante) {
      return `Hola ${nombre}, acomodate que comienza la clase pronto`
    }  else {
      return `Hola profesor ${nombre}, todos los sistemas listos para la clase` 
    }
    
}

saludar("Santiago", false) // como no se envió el 2do parámetro, usa el valor predeterminado 
saludar("Marcos")
saludar("David")
saludar("Jimena")
saludar("Alexs")
saludar("Claudia")
saludar("Sebas")


/* Uso de return (se usa dentro de las funciones), debe aparecer SÓLO una vez, SALVO cuando usa condicionales */
const sumar = function(nro1,nro2) {
    console.log(`El resultado es: ${nro1 + nro2 >= 100 ? "grande" : "normal"}`) // sumar(10,200) ---> 'El resultado es: grande'
    return nro1 + nro2
}
const restar = function(nro1,nro2) {
    console.log(`El resultado es: ${nro1 - nro2}`)
}

let resultado = sumar(10,40)
console.log(`El resultado de la suma es: ${resultado}`)


// Operador ternario (abreviación de condicional IF) 
// condicion ? true : false
if (nro1 + nro2 >= 100) {
  console.log(`resultado grande`)
} else {
  console.log(`resultado normal`)
}


