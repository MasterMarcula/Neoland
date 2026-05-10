/* BUCLES */

/*
para (contador;condición;incremento/decremento) {
    haga tal cosa
}
PARA CUANDO SABEMOS CUANTAS VECES QUEREMOS QUE REPITA ALGO.
* /
for (let contador = 0; contador < 10; contador++) {
    console.log(`FOR: El valor actual es --> ${contador}`)
}

/* Requisito: debe saludar 2 veces porque es cultural en España */
let nombre = "Santi" // prompt
for (let contador = 0; contador < 2; contador++) {
    console.log(`Hola ${nombre}`)
}

/*
mientras (condición) {
    haga algo repetidamente
} 
*/
let contador = 10; // 1
while (contador > 0) { // 2
  console.log(`WHILE: El valor actual es --> ${contador}`)
 contador-- // 3
  console.log(`WHILE: El valor nuevo es --> ${contador}`)
  // prompt("ERROR: indicar nuevamente un número")
}

console.log(`han finalizado las repeticiones y quedó en ${contador}`)
/* =========== */

let edad = 17 // prompt
while (edad < 18) {
    console.log("Lo siento, pero no podes entrar")
    edad = 19 // prompt
}

console.log("Podes entrar")

/*
hacé...mientras
hace {

} mientras (condicion) 
*/
let opcion;
do {
  console.log("Te has comunicado con Vodafone, por favor haz la elección")
  let opcion = 5 // prompt...
  switch (opcion) {
  case 1:
    console.log("Te comunicaré con Ventas...")
    break;
  case 2: 
    console.log("Te comunicaré con Servicios...")
    break;
  case 3: 
    console.log("Te comunicaré con Estado de cuenta...")
    break;
    case 0:
      console.log("Repetiré las opciones")
    break;
  default:
    console.log("Opción inexistente, por favor, intente nuevamente") 
      // prompt
  }
} while (opcion == 0)
  
console.log("¡Hola!, ¿En qué puedo ayudarte hoy?")  
  
  
  

