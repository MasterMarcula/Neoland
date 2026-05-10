/* Actividad 2 — Mayor o menor
Crear un número y mostrar si es mayor que 10 o menor/igual.
Extra: si es mayor que 50 mostrar 'Número grande'.
 */

let numero = 45;
if (numero > 50) {
  console.log('Número grande');
} else if (numero >= 10) {
  console.log('Es mayor a 10');
} else {
  console.log('Número bajo');
}

let temperatura = 120;

if (temperatura >= 150) {
  alert('apagando...');
} else if (temperatura >= 110) {
  alert('prendiendo los ventiladores');
}


/* Actividad 3 — Contador inteligente
Recorrer del 1 al 20 y mostrar si es par o impar.
Extra: contar cuántos pares hay.
 */

/* 3 de tipos de bucles
- for (cuando sabemos que hay un principio y final)
- while (no sabemos cuando terminará ni empezará con certeza)
- do...while (no sabemos cuando terminará ni empezará con certeza)
*/
let pares = 0;
let impares = 0;

for (let contador = 1; contador <= 20; contador++) {
  if (contador % 2 == 0) {
    console.log(`${contador} es par`);
    pares++;
  } else {
    console.log(`${contador} es impar`);
    impares++;
  }
}
console.log(`Hay ${pares} pares e ${impares} impares`);

// console.log(++pares); // Cuando yo ejecuto el incremento o decremento, ya de por sí, al ejecutarlo me va a dar un valor, si pongo el ++ despues, entonces se verá el VALOR ANTERIOR a cambiar. Si pongo el ++ ANTES, se verá el valor NUEVO.

/*
Actividad 4 — Tabla de multiplicar
Elegir un número y mostrar su tabla del 1 al 10.
*/
let numeroElegido = 9;
for (let contador = 1; contador <= 10; contador++) {
  console.log(`${numeroElegido} x ${contador} = ${numeroElegido * contador}`);
}

/*
Actividad 5 — Función saludo
Crear una función que reciba un nombre y muestre un saludo.
*/

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}
saludar('Alex');

/*
Actividad 6 — Calculadora simple
Crear funciones: sumar, restar, multiplicar, dividir.
*/

/* arrow functions */
const sumar = (nro1, nro2) => nro1 + nro2;
const restar = (nro1, nro2) => nro1 - nro2;
const multiplicar = (nro1, nro2) => nro1 * nro2;
const dividir = (nro1, nro2) => nro1 / nro2;

sumar(10, 20);

/* funciones expresadas
const sumar = function(nro1, nro2) {
  return nro1 + nro2
}
const restar = function(nro1, nro2) {
  return nro1 - nro2
}
const multiplicar = function(nro1, nro2) {
  return nro1 * nro2
}
const dividir = function(nro1, nro2) {
  return nro1 / nro2
}

*/

/* funciones declaradas

function sumar(nro1, nro2) {
  return nro1 + nro2;
}
function restar(nro1, nro2) {
  return nro1 - nro2;
}
function multiplicar(nro1, nro2) {
  return nro1 * nro2;
}
function dividir(nro1, nro2) {
  return nro1 / nro2;
}



*/

/*
Actividad 7 — Sistema de acceso
Crear función que reciba edad y diga si puede entrar.
*/

function acceso(edad) {
  if (edad >= 18) {
    return 'Entrada aceptada'
  } else {
    return 'acceso denegado'
  }
  
}
