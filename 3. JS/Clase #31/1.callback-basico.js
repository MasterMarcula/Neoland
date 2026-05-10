/*
parámetros --> textos, números y booleanos.
novedad!: también pueden pasarse FUNCIONES
*/

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