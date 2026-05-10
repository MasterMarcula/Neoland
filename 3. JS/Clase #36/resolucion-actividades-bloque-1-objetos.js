// 4. mostrar nombre y precio

let productos = [
  { nombre: 'Notebook', precio: 1000 },
  { nombre: 'Mouse', precio: 50 },
  { nombre: 'Teclado', precio: 100 },
];
let cafeteria = [
  { nombre: 'latte', precio: 5 },
  { nombre: 'mocha', precio: 3 },
  { nombre: 'lagrima', precio: 1 },
];

function mostrarNombrePrecio(array) {
  for (let obj of array) {
    console.log(
      `El nombre es: ${obj.nombre} y su precio es: u$s ${obj.precio}`,
    );
  }
}
mostrarNombrePrecio(productos);

// 5. Mostrar sólo los productos con precio mayor a 100:
function productosCaros(array) {
  for (let obj of array) {
    if (obj.precio > 100) {
      console.log(`el producto ${obj.nombre} es caro`);
    }
  }
}
productosCaros(productos);

// 6. suma total de precios
function totalCosto(array) {
  let total = 0;
  for (let obj of array) {
    total += obj.precio
  }
  return total
}
console.log(`El costo total es de u$s ${totalCosto(productos)}`)
console.log(`El total de los cafés es de u$s ${totalCosto(cafeteria)}`)

// Extra! calcular promedio
function promedioCosto(array) {
  let total = 0
  for (let obj of array) {
    total += obj.precio
  }
  let promedio = total / array.length
  return promedio
}
console.log(`El promedio es de u$s ${promedioCosto(productos)}`)
console.log(`El promedio de los café es de u$s ${promedioCosto(cafeteria)}`)




