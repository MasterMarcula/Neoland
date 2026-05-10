// DADO EL ARRAY DE OBJETOS

let carrito = [
 { producto: "Notebook", precio: 1000, cantidad: 3 },
 { producto: "Mouse", precio: 50, cantidad: 2 },
 { producto: "Teclado", precio: 100, cantidad: 4 },
 { producto: "Monitor", precio: 200, cantidad: 1 }
];

// *************************************************
// 10. AGREGAR PRODUCTO, tomar los datos del usuario

console.log("****  Vamos a agregar un nuevo producto. ****\n")
let product = prompt ("Ingrese el nombre del producto: ")
let price = prompt ("Ingrese el precio del producto: ")
let amount = prompt ("Ingrese la cantidad de producto: ")

let obj = {product,price,amount}
carrito.push(obj)

console.table(obj)
console.table(carrito)



// **************************************************
// 11. Buscar si existe un producto con nombre
// 13. Buscar un producto y si existe, preguntar al usuario por la nueva cantidad que tendrá


console.log("*** AHORA BUSQUEMOS ALGÚN PRODUCTO ***")
let buscado = prompt("Ingrese el producto a buscar: ")

let hay = false
for (let obj of carrito){
  if (obj.producto == buscado) {
    hay = true
    let cant = parseFloat(prompt(`${obj.producto} existe. Ingrese la nueva cantidad`))
    obj.cantidad = cant
  }
}

if (!hay) {
  console.log("No existe ese producto.")
} else {
  console.table(carrito)
}


// **************************************************
// 12. Eliminar un producto del carrito (podés hacerlo creando un nuevo array)

console.log("*** AHORA BUSQUEMOS ALGÚN PRODUCTO ***")

let buscado = prompt("Ingrese el producto a buscar: ")
let copia = carrito
let otraCopia = []
let esta = false

for (let i = 0; i < copia.length; i++){
  if (copia[i].producto == buscado){
    copia.slice(1, i)
    esta = true
  } else {
    otraCopia.push(copia[i])
  }
}

if(esta){
console.table(otraCopia)
} else {
  console.log(`El ${buscado} no está en la lista.`)
}

// **************************************************
// 14. Mostrar el producto de mayor precio

console.log("*** AHORA BUSQUEMOS EL PRODUCTO MÁS CARO ***")

let mayor = {}
let caro = 0
for (let i = 0; i < carrito.length; i++){
  if (carrito[i].precio > caro){
    caro = carrito[i].precio
    mayor = carrito[i]
  }
}
console.log(`El producto de mayor precio es ${mayor.producto}, que vale ${mayor.precio}`)

