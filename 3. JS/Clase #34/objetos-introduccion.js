/*
1	Aroa	Ramirez	aroa.ramirez@gmail.com	25	Madrid	España
2	Marcos	Oliveros	marcos.olvieros@gmail.com	52	Valencia	España
3	Sebas	Alonso	sebas.alonso@gmail.com	40	Madrid	España
4	Alex	Gonzalez	alex.gonzalez@gmail.com	34	Madrid	España
*/

let estudiantes = [{
  id: 1,
  nombre: "Aroa",
  apellido: "Ramirez",
  edad: 25,
  localidad: "Madrid",
  país: "España",
  cursando: true
},
{
  id: 2,
  nombre: "Marcos",
  apellido: "Oliveros",
  edad: 52,
  localidad: "Valencia",
  país: "España",
  cursando: true
},
{
  id: 3,
  nombre: "Sebas",
  apellido: "Alonso",
  edad: 40,
  localidad: "Madrid",
  país: "España",
  cursando: true
},{
  id: 4,
  nombre: "Alex",
  apellido: "Gonzalez",
  edad: 34,
  localidad: "Madrid",
  país: "España",
  cursando: true
}]

console.table(estudiantes)


const estudiante5 = {
  id: 5,
  nombre: "Jozé",
  apellido: "Equiz",
  edad: 25,
  localidad: "Madrid",
  país: "España",
  cursando: true
}

// como acceder a un valor
console.log(estudiante5.nombre)

// como modificar un valor
estudiante5.nombre = "José"

// como agregar una propiedad
estudiante5.altura = 1.71

// como borrar una propiedad
delete estudiante5.altura

let madrid = 0
let valencia = 0
let otras = 0

// recorrer un array de objetos
for (let estudiante of estudiantes) {
  console.table(estudiante.localidad)
  switch (estudiante.localidad) {
    case 'Madrid':
        madrid++
      break;
    case 'Valencia':
      valencia++
      break;
    default:
      otras++
  }
}

`Hay ${madrid} estudiantes de Madrid, ${valencia} estudiantes de Valencia y ${otras} estudiantes de otras ciudades`

let sumaEdades = 0;
for (let estudiante of estudiantes) {
    sumaEdades += estudiante.edad
}

`El promedio de edad es de ${sumaEdades / estudiantes.length} años`
