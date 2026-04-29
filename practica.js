// Consigna 33
// Actividad 1
let comidas = ["Pizza", "Hamburguesa", "Ensalada", "Sushi", "Tacos"];
console.log(comidas);

// Actividad 2
let frutas = ["manzana", "banana", "pera"];

//Agregar fruta al final
frutas.push("naranja");
console.log(frutas);

//Eliminar la última fruta
frutas.pop();
console.log(frutas);

// Agregar fruta al principio
frutas.unshift("fresa");
console.log(frutas);

// Eliminar la primera fruta
frutas.shift();
console.log(frutas);

// Actividad 3
// Crear dos arrays 
let bebidas = ["agua", "jugo"];
let comidas = ["pizza", "pasta"];

// Actividad 4
// Mostrar como texto
let colores = ["rojo", "verde", "azul"];
let coloresTexto = colores.join(", ");
console.log(coloresTexto);

// Actividad 5
// COpiar y ordenar
let numeros = [1,2,3,4,5,6]
// Crear un array con los tres primeros números
let primerosNumeros = numeros.slice(0, 3);
console.log(primerosNumeros);

// Actividad 6
// Invertir el orden de los números
let numerosInvertidos = numeros.slice().reverse();
console.log(numerosInvertidos);

// Actividad 7
let nombres = ["Ana", "Juan", "Pedro", "Ana"];

// Encontrar la posición de Pedro
let posicionPedro = nombres.indexOf("Pedro");
console.log(posicionPedro);

// Encontrar la primera posición de Ana
let primeraPosicionAna = nombres.indexOf("Ana");
console.log(primeraPosicionAna);

// Encontrar la última posición de Ana
let ultimaPosicionAna = nombres.lastIndexOf("Ana");
console.log(ultimaPosicionAna); 

// Actividad 8
// ¿Existe Juan en el array?
let existeJuan = nombres.includes("Juan");
console.log(existeJuan);
if (existeJuan) {
    console.log("Juan está en el array.");
} else {
    console.log("Juan no está en el array.");
}

// Actividad 9
// Credar un array de tareas
let tareas = ["Lavar los platos", "Hacer la cama", "Sacar la basura"];
console.log(tareas);

// Agregar una nueva tarea al final
tareas.push("Comprar comida");
console.log(tareas);

// Eliminar la última tarea
tareas.pop();
console.log(tareas);

// Mostrar el array como texto
let tareasTexto = tareas.join(", ");
console.log(tareasTexto);  

// Mostrar cantidad de tareas
console.log(tareas.length);

// Actividad 10
let alumnos = ["Sofía", "Lucas", "Martín"];

// Agregar un nuevo alumno al final
alumnos.push("Valentina");
console.log(alumnos);   

// Buscar alumno "Lucas" y mostrar su posición
let posicionLucas = alumnos.indexOf("Lucas");
console.log(posicionLucas);

// Ordenar y mostrar el array de alumnos
alumnos.sort();
console.log(alumnos);

 // Invertir el orden del array de alumnos
alumnos.reverse();
console.log(alumnos);

// Actividad 11
// Carrito de compras 
let carrito = ["pan", "leche", "huevos"];
console.log(carrito);

// Agregar un nuevo producto al carrito
carrito.push("mantequilla");
console.log(carrito);

//Eliminar el último producto del carrito
carrito.pop();
console.log(carrito);   

// Mostrar el carrito como texto
let carritoTexto = carrito.join(", ");
console.log(carritoTexto);  

// Mostrasr la cantidad de productos en el carrito
console.log(carrito.length);