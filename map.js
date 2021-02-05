var  Derian = {
    nombre: 'Derian',
    apellido: 'Garcia',
    altura: 1.81,
    cantidadDeLibros: 188
}

var pedro = {
    nombre: 'Pedro',
    apellido: 'Perez',
    altura: 1.85,
    cantidadDeLibros: 200
}

var Jose = {
    nombre: 'Jose',
    apellido: 'Ramirez',
    altura: 1.60,
    cantidadDeLibros: 55
}

var Elias = {
    nombre: 'Elias',
    apellido: 'Rivera',
    altura: 1.89,
    cantidadDeLibros: 88
}

const esAlta = persona => persona.altura > 1.8
const esbaja = persona =>  persona.altura < 1.8

var personas = [Derian,pedro,Jose,Elias]

var personasAltas = personas.filter(esAlta)


const pasarAlturaACMS = (persona) =>{
    // return persona.altura = persona.altura * 100
    
     return {
         ...persona,
         altura: persona.altura *= 100
     }
}

var personasCms = personas.map(pasarAlturaACMS)

// var acum = 0

// for (var i = 0; i < personas.length; i++){
//     acum = acum + personas[i].cantidadDeLibros
// }
// console.log(`En total hay ${acum}`)
const reducer = (acum, persona) =>{
    return acum + persona.cantidadDeLibros
}

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total de libros son ${totalDeLibros}`)