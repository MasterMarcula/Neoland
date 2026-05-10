
// Errores comunes

// ❌ # CASO 1 - (ni en el llamado ni dentro de acción se ejecuta)
// Nos indicará 'ƒ cuidado()'. Se muestra la función sin ejecutarla (la consola imprime su definición)

/* Callbacks */
function alerta() {
  return '🚨 ¡Alerta de seguridad!';
}

function cuidado() {
  return '⚠️ ¡Advertencia!';
}

/* Función principal para llamar a los 'callbacks' (funciones para pasar por la función principal) */
function accion(instruccion) {
  console.log('Ejecutando acción...');
  console.log(instruccion); /* como no uso paréntesis, estoy mostrando la función sin ejecutarla */
}

accion(cuidado);  

/* Caso alternativo, usando función anónima */
// Función principal
function accion(instruccion) {
  console.log('Ejecutando acción...');
  console.log(instruccion); // No ejecuta, por no poner los paréntesis
}
accion(function () {
  return '⚠️ ¡Advertencia!';
});


// ❌ # CASO 2 - Ejecución por fuera de la función principal
// Ejecutar la función sin que pase por la función principal, cuando pasamos los paréntesis en el llamado 

/* Callbacks */
function alerta() {
  return '🚨 ¡Alerta de seguridad!';
}

function cuidado() {
  return '⚠️ ¡Advertencia!';
}

/* Función principal para llamar a los 'callbacks' (funciones para pasar por la función principal) */
function accion(instruccion) {
  console.log('Ejecutando acción...');
  console.log(instruccion); /* Se muestra el valor recibido sin ejecutarlo */
}

 accion(cuidado()); /* Nos va a devolver '⚠️ ¡Advertencia!' la función 'cuidado', es decir nos dará un string cuando lo veamos en el console.log de la línea 18 */

// ❌ CASO #3 - Ambos lugares se intenta ejecutar función.

function alerta() {
  return '🚨 ¡Alerta de seguridad!';
}

function cuidado() {
  return '⚠️ ¡Advertencia!';
}

function accion(instruccion) {
  console.log('Ejecutando acción...');
  instruccion(); // ❌ posible error

  console.log('Fin');
}

accion(cuidado());

// ✅ CASO #4 - Correcta 
// Se llama la función ej: 'cuidado' dentro de la función principal 

function alerta() {
  return '🚨 ¡Alerta de seguridad!';
}

function cuidado() {
  return '⚠️ ¡Advertencia!';
}

function accion(instruccion) {
  console.log('Ejecutando acción...');
  console.log(instruccion()); // ✔️ se ejecuta acá
  console.log('Fin');
}

accion(cuidado);

/* Caso alternativo con función anónima */
// Función principal
function accion(instruccion) {
  console.log('Ejecutando acción...');
  console.log(instruccion()); // Ejecuta la función que se envía desde acción.
}
accion(function () {
  return '⚠️ ¡Advertencia!';
});