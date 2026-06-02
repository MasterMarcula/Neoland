let productos = [ 
 { id: 1, nombre: "Notebook", precio: 1200, stock: 5, categoria: "Hardware" }, 
 { id: 2, nombre: "Mouse", precio: 45, stock: 20, categoria: "Periféricos" }, 
 { id: 3, nombre: "Teclado", precio: 90, stock: 10, categoria: "Periféricos" }, 
 { id: 4, nombre: "Monitor", precio: 250, stock: 0, categoria: "Hardware" }, 
 { id: 5, nombre: "Auriculares", precio: 75, stock: 8, categoria: "Audio" } 
]; 

// Consigna 1
//const nombres = productos.map(producto => producto.nombre);
//console.table(nombres); 

// Consigna 2
//const prodsFormatted = productos.map(productos => `• ${productos.nombre} - ${productos.precio}`);
//console.log(prodsFormatted.join('\n'))

//Consigna 3
//const prodsAvailable = productos.filter(producto => producto.stock > 0);
//console.table(prodsAvailable);

//Consigna 4
//const prodsInCat = productos.filter(producto => producto.categoria === "Hardware");
//console.table(prodsInCat);

//Consigna 5
//const prodFound = productos.find(producto => producto.id === 4);
//console.log(prodFound)

//Consigna 6
//const prodFound = productos.find(producto => producto.nombre === "Mouse");
//console.log(prodFound)

//Consigna 7
//const todosConStock = productos.every(producto => producto.stock > 0);
//console.log(todosConStock ? "Todos tienen stock" : "No todos tienen stock");
//console.log(todosConStock);

//Consigna 8
//const prodValued = productos.every(producto => producto.precio > 0);
//console.log(prodValued ? "Todos tienen precio mayor que 0" : "No todos tienen precio mayor que 0");
//console.log(prodValued);

//Consigna 9
//const hayAgotados = productos.some(producto => producto.stock === 0);
//const prodEmpty = productos.some(producto => producto.stock === 0);
//console.log(prodEmpty);

//Consigna 10
//const prodExpensive = productos.some(producto => producto.precio > 1000);
//console.log(prodExpensive); 

//Consigna 11
//const cosTotal = productos.reduce((acumulador, articulo) => {
//  return acumulador + articulo.precio;
//}, 0);
//console.log(cosTotal)

//Consigna 12
////const valorTotal = productos.reduce((acumulador, articulo) => {
//  return acumulador + (articulo.precio * articulo.stock);
//}, 0);
//console.log(valorTotal)