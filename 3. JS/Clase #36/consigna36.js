let carrito = [
  { id: 1, producto: "Notebook Pro", precio: 1200, cantidad: 1, categoria: "Hardware" },
  { id: 2, producto: "Mouse Inalámbrico", precio: 45, cantidad: 2, categoria: "Periféricos" },
  { id: 3, producto: "Teclado Mecánico", precio: 90, cantidad: 1, categoria: "Periféricos" },
  { id: 4, producto: "Monitor 24' Full HD", precio: 250, cantidad: 1, categoria: "Hardware" },
  { id: 5, producto: "Auriculares Gamer", precio: 75, cantidad: 1, categoria: "Audio" },
  { id: 6, producto: "Cable HDMI 2.0", precio: 15, cantidad: 3, categoria: "Accesorios" },
  { id: 7, producto: "Silla de Oficina", precio: 300, cantidad: 1, categoria: "Muebles" },
  { id: 8, producto: "Webcam 1080p", precio: 60, cantidad: 1, categoria: "Accesorios" },
  { id: 9, producto: "Pad Mouse XL", precio: 20, cantidad: 2, categoria: "Periféricos" },
  { id: 10, producto: "Disco Externo 1TB", precio: 110, cantidad: 1, categoria: "Hardware" }
];

// 1. FUNCIÓN PARA MOSTRAR TODOS LOS PRODUCTOS
function mostrar(){
  for(let i = 0; i < carrito.length; i++){
    console.table(carrito[i])
  }
}

//mostrar()

// ******************************************************
// 2. FUNCIÓN PARA MOSTRAR EL COSTO DE INVENTARIO POR PRODUCTO
function costoInventario(){
  for(let i = 0; i < carrito.length; i++){
    console.log(`Producto: ${carrito[i].producto}, Monto: ${carrito[i].cantidad * carrito[i].precio}`)
  }
}

//costoInventario()

// *************************************************************************
// 3. FUNCIÓN PARA MOSTRAR EL MONTO TOTAL DE UN PRODUCTO, SI ESTÁ EN EL CARRITO
function costoProducto(){
  let prod = prompt("Ingrese el nombre del producto a consultar: ")
  let hay = false
  for(let i = 0; i < carrito.length; i++){
    if (carrito[i].producto == prod){
      console.log(`Producto: ${carrito[i].producto}, Monto: ${carrito[i].cantidad * carrito[i].precio}`)
      hay = true
    }
  }
  if (!hay){
    console.log(`El producto ${prod} no está en el inventario.`)
  }
}

//costoProducto()

// *************************************************************************
// 4. FUNCIÓN QUE MUESTRA EL PRECIO TOTAL DEL INVENTARIO

function calcTodo(){
  let todo = 0
  let i = 0
  for (let obj of carrito){
    todo += carrito[i].cantidad * carrito[i].precio
    i++
  }
  console.log(`El precio total del inventario es ${todo}`)
}

//calcTodo()

// *************************************************************************
// 5. FUNCIÓN PARA FILTRAR PRODUCTOS CON TOTAL MAYOR A 100 O MENOR A 100
function menorMayor(){
  let menores = []
  let mayores = []
  let pico = prompt("Introduzca la cifra pivote")
  for (let i = 0; i < carrito.length; i++){
    if(carrito[i].precio <= pico){
      menores.push(carrito[i])
    } else {
      mayores.push(carrito[i])
    }
  }
  console.log(`*** De menos de ${pico}$ ***`)
  console.table(menores)
  console.log(`*** De más de ${pico}$ ***`)
  console.table(mayores)
}

//menorMayor()

// *************************************************************************
// 6. FUNCIÓN PARA CONTAR LA CANTIDAD DE PRODUCTOS QUE HAY EN EL INVENTARIO
function calcCant(){
  let todo = 0
  let i = 0, j = 0
  let cant = 0
  let cat = [0,0,0,0,0]
  for (let obj of carrito){
    cant += carrito[i].cantidad
    switch (carrito[i].categoria) {
      case "Hardware": 
        cat[0]++
        break;
      case "Accesorios":
         cat[1]++
         break;
      case "Periféricos":
         cat[2]++
         break;
      case "Muebles":
         cat[3]++
         break;
      case "Audio":   
         cat[4]++
         break;
    } // switch
    i++
  } // for
    
  for(let i = 0; i < cat.length; i++){
    switch (i) {
      case 0: 
        console.log(`Hay ${cat[i]} productos en la categoría Hardware`)
        break;
      case 1:
         console.log(`Hay ${cat[i]} productos en la categoría Accesorios`)
         break;
      case 2:
         console.log(`Hay ${cat[i]} productos en la categoría Periféricos`)
         break;
      case 3:
         console.log(`Hay ${cat[i]} productos en la categoría Muebles`)
         break;
      case 4:   
         console.log(`Hay ${cat[i]} productos en la categoría Audio`)
         break;
    } // switch
  } //for
  console.log(`En total son ${cant} productos.`)
}

//calcCant()

// *************************************************************************
// 7. FUNCIÓN QUE VERIFICA SI EXISTE UN PRODUCTO

function existeProd() {
//let buscado = prompt("Introduzca el producto a buscar")
  let existe = false
  for(let i = 0; i < carrito.length; i++){
    if (carrito[i].producto == buscado){
      existe = true
    }
  }
  if (existe){
    console.log(`El producto ${buscado} está en el inventario.`)
  } else {
    console.log(`El producto ${buscado} NO está en el inventario.`)
  }
}

//existeProd()

// *************************************************************************
// 8. FUNCIÓN PARA ENCONTRAR EL PRODUCTO CON MAYOR PRECIO
function mayorPrecio(){
  let mayor = { id: 20, producto: "N", precio: 0, cantidad: 1, categoria: "H" }
  for (let obj of carrito){
    if(mayor.precio < obj.precio){
      mayor = obj
    }
  }
  console.log(`El producto con mayor precio es ${mayor.producto} que cuesta ${mayor.precio} US$.`)
}

//mayorPrecio()

// *************************************************************************
// 9. FUNCIÓN QUE AGREGA UN NUEVO PRODUCTO AL ARREGLO
function addProd() {
  let prod = prompt("Nombre del producto: ")
  let prec = prompt("Precio del producto: ")
  let cant = prompt("Cantidad a ingresar: ")
  let catg = prompt("Categoría del producto: ")
  let id = carrito.length + 2
  let nuevoProducto = {id, prod, prec, cant, catg}
  carrito.push(nuevoProducto)
}

//addProd()

// *************************************************************************
// 10. FUNCIÓN QUE CALCULA PROMEDIO DE PRECIOS

function priceProm () {
  let count = 0
  let total = 0
  for (let obj of carrito) {
    total += obj.precio
    count++
  }
  return (total / count).toFixed(2)
}

//console.log(priceProm())

// *************************************************************************
// 11. FUNCIÓN QUE MUESTRA LOS PRODUCTOS POR PRECIOS EN ORDEN ASCENDENTE
function growingPrice() {
  let precios = carrito
  precios.sort((a, b) => a.precio - b.precio);
  console.table(precios)
}

//growingPrice()

// *************************************************************************
// 12
function mayorA2() {
  let cant = []
  let i = 0
  for(let obj of carrito){
    if (obj.cantidad > 2){
      cant.push(carrito[i])
    }
    i++
  }
  console.table(cant)
}

//mayorA2()

// *************************************************************************
// CORE: Programa cíclico que pide que el usuario ejecute una función, sale con 0.



do {
  console.log("************************************")
  console.log("***     INTRODUZCA SU OPCIÓN     ***")
  console.log("************************************")
  console.log("*  1. Mostrar productos.           *")
  console.log("*  2. Monto de productos.          *")
  console.log("*  3. Monto de producto.           *")
  console.log("*  4. Total de todo el inventario. *")
  console.log("*  5. Pivote de precios.           *")
  console.log("*  6. Inventario de productos.     *")
  console.log("*  7. Verificar un producto.       *")
  console.log("*  8. Producto de mayor precio.    *")
  console.log("*  9. Agregar nuevo producto.      *")
  console.log("* 10. Calcular precio promedio.    *")
  console.log("* 11. Productos ordenados/precio.  *")
  console.log("* 12. Productos con más de 2unids. *")
  console.log("*  0. Salir de la app.             *")
  console.log("************************************")

  let opt = prompt("Introduzca su opción")
    switch (opt) {
      case "1": 
        mostrar();
        break;
      case "2": 
        costoInventario()
        break;
      case "3": 
        costoProducto()
        break;
      case "4": 
        calcTodo()
        break;
      case "5": 
        menorMayor()
        break;
      case "6": 
        calcCant()
        break;
      case "7": 
        existeProd()
        break;
      case "8": 
        mayorPrecio()
        break;
      case "9": 
        addProd()
        break;
     case "10": 
        console.log(priceProm())
        break;
     case "11": 
        growingPrice()
        break;
     case "12": 
        mayorA2()
        break; 
      default: 
      console.log("Introduzca una opción válida")
      break; 
    }
    console.clear
} while (opt !== 0);