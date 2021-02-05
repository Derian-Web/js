var Salvador = {
    nombre: 'Salvador',
    apellido: '',
    edad: 18,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: true,
    drone: false
}

var Derian = {
    nombre: 'Derian',
    apellido: 'Garcia',
    edad: 18
}

const MAYOR_DE_EDAD = 18

function esMayorEdad(persona){
    return persona.edad >= MAYOR_DE_EDAD
}


function imprimirEdad(persona){
    if( esMayorEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirEdad(Derian)