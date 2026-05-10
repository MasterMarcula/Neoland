/*
parámetros --> textos, números y booleanos.
novedad!: también pueden pasarse FUNCIONES
*/

// Se llama la función ej: 'cuidado' dentro de la función principal 

function accion(instruccio, nombre = 'anónimo') { // callback
  console.log('Ejecutando acción...');
  console.log(instruccion()); // ✔️ se ejecuta acá
  console.log('enfriando cpu con los ventiladores...')
  console.log('Fin');
}

accion(() => '⚠️ ¡Advertencia!')
accion(nombre => `⚠️ ¡Advertencia ${nombre}!`)



