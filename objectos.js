var Derian = {
    nombre: 'Derian',
    apellido: 'Garcia',
    edad: 18
}

var Salvador = {
    nombre: 'Salvador',
    apellido: 'Castellanos',
    edad: 18
}

function imprimirMayusculas({nombre}){
    var nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirMayusculas(Derian)
imprimirMayusculas(Salvador)