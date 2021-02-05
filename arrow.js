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
    edad: 15
}

const MAYOR_DE_EDAD = 18

// const esMayorEdad = persona => {
//   return  persona.edad >= MAYOR_DE_EDAD
// }

// const esMayorEdad = persona => persona.edad >= MAYOR_DE_EDAD

const esMayorEdad = ({edad}) => edad >= MAYOR_DE_EDAD

const esMenorEdad = persona => persona.edad < MAYOR_DE_EDAD




function imprimirEdad(persona){
    if( esMayorEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona){
    if(esMenorEdad(persona)){
        console.log('ACCESO DENEGADO')
    }else{
        console.log('ACCESO PERMITIDO')
    }
}
permitirAcceso(Salvador)