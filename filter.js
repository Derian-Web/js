var  Derian = {
    nombre: 'Derian',
    apellido: 'Garcia',
    altura: 1.81
}

var pedro = {
    nombre: 'Pedro',
    apellido: 'Perez',
    altura: 1.85
}

var Jose = {
    nombre: 'Jose',
    apellido: 'Ramirez',
    altura: 1.60
}

var Elias = {
    nombre: 'Elias',
    apellido: 'Rivera',
    altura: 1.89
}

const esAlta = persona => persona.altura > 1.8
const esbaja = persona =>  persona.altura < 1.8

var personas = [Derian,pedro,Jose,Elias]

var personasAltas = personas.filter(esAlta)
var perosonasBajas = personas.filter(esbaja)

console.log(perosonasBajas)