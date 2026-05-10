

const estudiantes = []

/* Imaginando un formulario en un sitio web
nombre [         ]
apellido [       ]
edad [           ]
*/
/* Al hacer clic sobre el botón 'agregar'*/
function agregar(nombre,apellido,edad) {
  
  let estudiante = {
    nombre,
    apellido,
    edad
  }
  estudiantes.push(estudiante)
}
agregar("José","Rodrigues",30)
agregar("Maria","Acosta",40)

console.table(estudiantes)

