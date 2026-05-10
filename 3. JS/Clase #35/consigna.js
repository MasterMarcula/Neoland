//Crear arreglo de objetos y mostrar nombre y precio
let productos = [
 { nombre: "Notebook", precio: 1000 },
 { nombre: "Mouse", precio: 50 },
 { nombre: "Teclado", precio: 100 }
];

// Crear la función que muestra la lista de productos como tabla
// con nombre y precio
function mostrarProductos(listaProductos) {
    console.log("--- Lista de Productos ---");
    listaProductos.forEach(producto => {
        console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
    });
}

// Llamada a la función
mostrarProductos(productos);

// ************************************************************

// Ahora sólo mostrará los productos que tengan un precio mayor a 100

function showOver100(listaProductos) {
    console.log("--- Lista de Productos ---");
    listaProductos.forEach(producto => {
        if (producto.precio > 100){
            console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
        }
    });
}

showOver100(productos)


// ************************************************************
// Ahora mostrar los productos que cuesten más de 100

total = 0;
function showOver100(listaProductos) {
    console.log("--- Lista de Productos ---");
    listaProductos.forEach(producto => {
        total = total + producto.precio;
    });
}

showOver100(productos)

// ************************************************************
// Ahora mostrar la suma y el promedio de los productos

function sumarPrecios(productos) {
  return productos.reduce((acum, p) => acum + p.precio, 0);
}

const total = sumarPrecios(productos);
console.log("Total:", total);


// Aquí vamos con el promedio de precios

function promedioPrecios(productos) {
  const total = productos.reduce((acum, p) => acum + p.precio, 0);
  return total / productos.length;
}

const promedio = promedioPrecios(productos);
console.log("Promedio:", promedio.toFixed(2));
