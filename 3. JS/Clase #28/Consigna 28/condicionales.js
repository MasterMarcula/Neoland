

/* Condicionales */
/*
:: Manejo de rangos
si (condición) {
entonces... pasa tal cosa
} sino {
pasa otra cosa
} */
let nro1 = 15
let nro2 = 30 // number
let nro3 = "30" // string

/* Comparación simple */
if (nro1 > nro2) {
  console.log(`${nro1} es más grande que ${nro2}`)
} else {
  console.log(`${nro2} es más grande que ${nro1}`)
}

/* comparaciones en cadena */
let haceFrio = false
let diaDespejado = true
if (haceFrio == true && diaDespejado == true) {
  console.log("Se puede ir a tomar sol, pero abrigado")
} 

/* usando operador de negación */
if (haceFrio) { // de forma predeterminada, chequea si la condición es TRUE.
  console.log("brrrrrr")
} else { // si en cambio es false...
  
}
if (!haceFrio) { // si le agrego el operador "!" chequea si la condición es FALSE.
  console.log("estoy sudando muchisimo")
} else { // si en cambio es true...
  
}

/* Anidación de condiciones */
let vip = true
let edad = 14
if (edad >= 18) {
    console.log("Bienvenido a la disco RETRO 90s")
    if (vip) {
      console.log("Podés ir al sector vip")
    } else {
      console.log("No podes entrar al sector vip")
    }
} else if (edad >= 14) {
  console.log("Podés ir a la discoteca light")
} else {
  console.log("Sos menor de edad, no podes entrar a la disco")
}


/* :: Casos específicos
según (un valor) {
    haga tal cosa
    o
    haga tal otra
    o 
    si no hay ninguna coincidencia pasa algo de forma predeterminada
}
*/

let opcion = "1" // prompt("Indicar opción")

switch (opcion) {
  case "1":
    console.log("Te comunicaré con Ventas...")
    break;
  case 2: 
    console.log("Te comunicaré con Servicios...")
    break;
  case 3: 
    console.log("Te comunicaré con Estado de cuenta...")
    break;
  default:
    console.log("Opción inexistente, por favor, intente nuevamente")
}





/* OPERADORES RELACIONALES */
nro1 > nro2 // nro1 MAYOR a nro2 -> false
nro1 >= nro2 // nro1 MAYOR o IGUAL a nro2 ->
nro1 < nro2 // nro1 MENOR a nro2 -> true
nro1 <= nro2  // nro1 MENOR o IGUAL a nro2 -> true
nro1 == nro2 // nro1 IGUAL a nro2 -> false
nro1 != nro2 // nro1 DISTINTO a nro2 -> true
nro2 === nro3 // Chequea si el valor es el mismo e importa el tipo de dato.

/* OPERADORES LÓGICOS */

/*------------------
Operador && (AND)
| cond 1 | cond 2 | resultado
  true      true     true
  false     true     false
  true     false     false
  false    false     false
  
Operador || (OR)
| cond 1 | cond 2 | resultado
  true      true     true
  false     true     true
  true     false     true
  false    false     false
  
Operador de negación "!" (NOT)
*/






