// Ver lo siguiente luego que se vieron los errores típicos

function alerta(nombre) {
  return `🚨 ¡Alerta de seguridad para ${nombre}!`;
}

function cuidado(nombre) {
  return `⚠️ ¡Advertencia para ${nombre}!`;
}

function accion(instruccion) {
  console.log('Ejecutando acción...');
  console.log(instruccion()); // ✔️ se ejecuta acá

  console.log('Fin');
}

// ❌ Esto ahora NO alcanza, porque queremos usar el parámetro nombre
accion(cuidado);

/* 
instruccion() se ejecuta sin parámetros
nombre queda undefined
*/

// ✅ SOLUCIÓN
/* Por lo que cambiariamos 
  'function accion(instruccion)' 
  'function 'accion(instruccion, nombre)'
Para que tome 2 parámetros
 */

function cuidado(nombre) {
  return `⚠️ ¡Advertencia para ${nombre}!`;
}

function accion(instruccion, nombre) {
  console.log('Ejecutando acción...');
  console.log(instruccion(nombre)); // ✔️ se ejecuta acá

  console.log('Fin');
}

// ✅ Así funcionaria perfecto
accion(cuidado, "Santiago");

// Quedará pendiente los "wrapper" que los veremos con javascript avanzado.
