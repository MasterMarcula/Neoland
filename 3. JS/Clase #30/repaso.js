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
