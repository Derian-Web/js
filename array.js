var  Derian = {
    nombre: 'Derian',
    apellido: 'Garcia',
    altura: 1.80
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


var personas = [pedro, Derian, Elias, Jose]

for(var i = 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}mts`)

}
