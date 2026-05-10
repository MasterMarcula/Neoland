

// Ejemplo de alguna ocasión específica/especial, cuando la propiedad sea más de 1 palabra separada por espacio
let persona = {
  "localidad externa": "Localidad falsa"
}

persona["localidad externa"]

let estudiante = {
  id: 5,
  nombre: "Jozé",
  apellido: "Equiz",
  edad: 25,
  localidad: "Madrid",
  país: "España",
  cursando: true
}

// Poder recorrer un objeto y mostrar sus propiedades y valores en forma textual
for (let clave of Object.keys(estudiante)) {
    console.log(clave, estudiante[clave])
}

// Convertir los valores del objeto a un array
Object.values(estudiante)


// Crear arrays dentro de un array sobre las propiedades y valores de un objeto
Object.entries(estudiante)
