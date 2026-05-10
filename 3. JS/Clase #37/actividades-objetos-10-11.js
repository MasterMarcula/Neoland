let carrito = [
  { producto: 'Notebook', precio: 1000, cantidad: 3 },
  { producto: 'Mouse', precio: 50, cantidad: 2 },
  { producto: 'Teclado', precio: 100, cantidad: 4 },
  { producto: 'Monitor', precio: 200, cantidad: 1 },
];

/*
Actividad 10 — Agregar producto
*/

function agregar() {
  const producto = prompt('Indicar nombre de producto');
  const precio = Number(prompt('Indicar precio de producto'));
  const cantidad = Number(prompt('Indicar cantidad de producto'));
  const obj = {
    producto, // producto: producto
    precio, // precio: precio
    cantidad,
  };
  carrito.push(obj);
  return carrito;
}
// console.table(agregar());

/*
Actividad 11 — Buscar producto
*/

function buscar() {
  // let mensaje = ""
  let encontrado = false; //.
  let producto = {}; //.

  let palabra = prompt('¿Qué producto busca?'); // MOUSE
  palabra = palabra.toLowerCase(); // mouse
  let letraCapital = palabra.charAt(0).toUpperCase(); // M
  palabra = palabra.substring(1); // ouse
  let palabraCompleta = letraCapital.concat(palabra);

  for (let item of carrito) {
    if (item.producto.indexOf(palabraCompleta) > -1) {
      // mensaje = `Producto encontrado!`;
      encontrado = true; //.
      producto = item; //.
    }
  }

  //if (mensaje == '') {
  if (encontrado == false) {
    //.
    return `Producto NO encontrado!`;
  } else {
    // return mensaje
    return producto; //.
  }
}

// Alternativa
function buscar2() {
  let mensaje = '';
  let palabra = prompt('¿Qué producto busca?'); // MOUSE

  for (let item of carrito) {
    if (palabra.toLowerCase() == item.producto.toLowerCase()) {
      mensaje = 'producto encontrado';
    }
  }

  if (mensaje == '') {
    return 'producto NO encontrado';
  }
  return mensaje;
}
buscar2();
