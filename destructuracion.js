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

function imprimirNombre({nombre,apellido,edad}){
    var persona = `Hola me llamo ${nombre} ${apellido} y tengo ${edad} `
    console.log(persona)
}

imprimirNombre(Derian)

A los tres puntos “…” se llama operador de propagación (Spread operator), es una nueva implementación en ES6. Básicamente lo que hace es crear un duplicado de nuestro objeto para luego modificarlo según lo que necesitemos