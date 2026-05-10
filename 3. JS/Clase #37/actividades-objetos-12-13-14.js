let carrito = [
  { producto: 'Notebook', precio: 1000, cantidad: 3 },
  { producto: 'Mouse', precio: 50, cantidad: 2 },
  { producto: 'Teclado', precio: 100, cantidad: 4 },
  { producto: 'Monitor', precio: 200, cantidad: 1 },
];

/* 12. Eliminar un producto del carrito (podés hacerlo creando un nuevo array) */
function eliminar() {
  let carritoNuevo = [];
  let producto = buscar();
  if (typeof producto == 'string') {
    return 'No existe el producto para eliminar';
  }
  for (let item of carrito) {
    if (item != producto) {
      carritoNuevo.push(item);
    }
  }
  return carritoNuevo;
}
console.table(eliminar());

function buscar() {
  let encontrado = false;
  let producto = {}; // En el bucle, cuando encontró el objeto, lo pasó aquí
  let palabra = prompt('¿Qué producto busca?'); // MOUSE

  for (let item of carrito) {
    if (palabra.toLowerCase() == item.producto.toLowerCase()) {
      producto = item;
      encontrado = true;
    }
  }

  if (encontrado == false) {
    return 'producto NO encontrado';
  }
  return producto;
}

let objeto = {};
let texto = 'dsdfs';
let numero = 10;
let chequear = true;
typeof objeto;
typeof texto;
typeof numero;
typeof chequear;
